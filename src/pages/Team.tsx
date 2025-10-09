import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      position: "Founder & CEO",
      image: team1,
      bio: "With over 20 years of experience in real estate and construction, Rajesh leads Ekdant Associates with vision and strategic expertise. His commitment to excellence has been the driving force behind our success.",
      email: "rajesh@ekdantassociates.com",
      linkedin: "#",
    },
    {
      id: 2,
      name: "Priya Sharma",
      position: "Chief Architect",
      image: team2,
      bio: "An award-winning architect with a passion for sustainable design, Priya brings innovative solutions to every project. Her creative vision has shaped some of our most iconic developments.",
      email: "priya@ekdantassociates.com",
      linkedin: "#",
    },
    {
      id: 3,
      name: "Arun Patel",
      position: "Project Director",
      image: team3,
      bio: "Arun's extensive experience in project management ensures timely delivery and quality execution. His attention to detail and leadership skills make him invaluable to our team.",
      email: "arun@ekdantassociates.com",
      linkedin: "#",
    },
    {
      id: 4,
      name: "Sanjay Verma",
      position: "Chief Engineer",
      image: team1,
      bio: "A structural engineering expert with 15+ years of experience, Sanjay ensures the structural integrity and safety of all our projects while implementing innovative construction techniques.",
      email: "sanjay@ekdantassociates.com",
      linkedin: "#",
    },
    {
      id: 5,
      name: "Neha Gupta",
      position: "Interior Design Head",
      image: team2,
      bio: "Neha's creative expertise in interior design adds the perfect finishing touches to our projects. Her aesthetic sensibility ensures that every space is both beautiful and functional.",
      email: "neha@ekdantassociates.com",
      linkedin: "#",
    },
    {
      id: 6,
      name: "Vikram Singh",
      position: "Business Development",
      image: team3,
      bio: "Vikram's strategic approach to business development has helped Ekdant Associates grow its market presence. His client relationships and negotiation skills drive our continued success.",
      email: "vikram@ekdantassociates.com",
      linkedin: "#",
    },
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6">Meet Our Team</h1>
            <p className="text-xl text-muted-foreground">
              The passionate professionals behind Ekdant Associates' success
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-4">{member.position}</p>
                  <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex gap-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for excellence. 
              If you're interested in joining the Ekdant Associates family, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@ekdantassociates.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <Mail size={20} />
              careers@ekdantassociates.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
