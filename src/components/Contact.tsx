import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: [
        "CIA Office Complex, Main Road, Sector - III,",
        "I.D.A Phase-II, Near Prof. Jayasankar Circle,",
        "Cherlapally, R.R. District,",
        "Secunderabad, Telangana 500051"
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+91 9606708908"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@polyneo.com"],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to discuss your polymer compounding needs? Our team of experts is here to help
            you find the perfect solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactInfo.map((info, index) => (
            <Card key={index} className="border-border" style={{ boxShadow: "var(--shadow-card)" }}>
              <CardHeader>
                <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle>{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-muted-foreground">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
