import { Target, Users, Lightbulb, Award, CheckCircle2, Linkedin } from "lucide-react";
import { CometCard } from "@/components/ui/comet-card";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every compound we develop undergoes rigorous testing to ensure it meets the exact specifications required for your application.",
    },
    {
      icon: Users,
      title: "Customer Partnership",
      description: "We believe in building long-term relationships through transparent communication and dedicated support at every stage.",
    },
    {
      icon: Lightbulb,
      title: "Continuous Innovation",
      description: "Our R&D team constantly explores new formulations and processing techniques to stay ahead of industry demands.",
    },
    {
      icon: Award,
      title: "Quality Assurance",
      description: "ISO-certified processes and comprehensive quality control ensure consistent performance in every batch we produce.",
    },
  ];

  const milestones = [
    "10+ years of polymer compounding expertise",
    "ISO 9001:2015 certified manufacturing facility",
    "10,000+ tons annual production capacity",
    "State-of-the-art R&D laboratory",
    "100+ custom formulations developed",
    "Serving clients across India",
  ];

  const team = [
    { name: "Dr. Ajay Taraiya", linkedin: "https://www.linkedin.com/in/dr-ajay-taraiya/" },
    { name: "Mr. Purushotham Adoni", linkedin: "https://www.linkedin.com/in/purushotham-adoni-10b650107/" },
    { name: "Mr. Anuj Taraiya", linkedin: "https://www.linkedin.com/in/anuj-taraiya/" },
  ];

  return (
    <section id="about" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Who We Are
          </h2>
          <p className="text-xl text-muted-foreground">
            A leading provider of engineered polymer compounds, combining decades of expertise
            with cutting-edge technology to deliver solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <CometCard key={index} className="h-full">
                <div
                  className="bg-card p-6 rounded-xl border border-border h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="bg-gradient-to-br from-primary to-accent w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </CometCard>
            );
          })}
        </div>

        {/* Experience Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Decades of
                <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Proven Excellence
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Our commitment to quality, innovation, and customer satisfaction has made us a trusted
                partner for businesses worldwide. With cutting-edge technology and a team of experienced
                polymer scientists, we deliver solutions that push the boundaries of material performance.
              </p>
              <p className="text-lg text-muted-foreground">
                From concept to production, we work closely with our clients to understand their unique
                challenges and develop custom compounds that meet their exact specifications.
              </p>
            </div>

            <CometCard className="h-full">
              <div className="bg-card p-8 rounded-xl border border-border h-full" style={{ boxShadow: "var(--shadow-card)" }}>
                <h3 className="text-2xl font-bold mb-6">Decades of Proven Experience</h3>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle2 className="h-6 w-6 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-lg">{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CometCard>
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-8 text-center">Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <CometCard key={index} className="h-full">
                <div
                  className="bg-card p-6 rounded-xl border border-border text-center h-full"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <h4 className="text-lg font-semibold mb-3">{member.name}</h4>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="text-sm">Connect on LinkedIn</span>
                  </a>
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
