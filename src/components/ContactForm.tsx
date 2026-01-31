import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

const formSchema = z.object({
  orgName: z.string().min(2, "Organization name must be at least 2 characters"),
  requirement: z.string().min(10, "Please provide more details about your requirement"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  consent: z.boolean().default(false).refine((val) => val === true, {
    message: "You must agree to the privacy policy",
  }),
});

const ContactForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      orgName: "",
      requirement: "",
      email: "",
      phone: "",
      consent: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct email content
    const subject = `New Inquiry from ${values.orgName}`;
    const body = `
Organization: ${values.orgName}
Email: ${values.email}
Phone: ${values.phone}

Requirement:
${values.requirement}
    `.trim();

    // Create mailto link
    const mailtoLink = `mailto:info@polyneo.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open default mail client
    window.location.href = mailtoLink;

    toast.success("Opening your email client to send the request...");
    form.reset();
  }

  return (
    <div className="bg-muted/30 p-8 rounded-lg border border-border">
      <h3 className="text-2xl font-bold mb-6">Request a Quote / More Information</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="orgName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name *</FormLabel>
                <FormControl>
                  <Input placeholder="Your Company Ltd." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Email *</FormLabel>
                  <FormControl>
                    <Input placeholder="john@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number *</FormLabel>
                  <FormControl>
                    <Input placeholder="+91 98765 43210" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="requirement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Requirement *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your application, material needs, and quantities..."
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consent"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-background border">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>
                    I agree to the processing of my personal data for the purpose of handling my request.
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          <Button type="submit" className="w-full md:w-auto">Submit Request</Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
