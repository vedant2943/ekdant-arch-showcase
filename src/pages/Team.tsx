import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Mail } from "lucide-react"; // Mail and Linkedin imports can be removed if not used elsewhere
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";

const Team = () => {
  // Hooks for scroll animations
  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver();
  // Removed teamGridRef as individual cards now handle their own animation trigger
  const { ref: ctaRef, hasBeenInView: ctaInView } = useIntersectionObserver();

  const teamMembers = [
    {
      id: 1,
      name: "Shekhar Rajaram Dhuri",
      position: "Society Affairs and Legal Aid Consultant",
      qualification: "DDEO, GDCA",
      bio: "Consultant – Co-operative Housing Societies\nAdvisor – Redevelopment of Buildings of Housing Society",
      image: team1,
      email: "shekhar@ekdantassociates.com", // Kept data in case needed later
      linkedin: "#", // Kept data in case needed later
    },
    {
      id: 2,
      name: "Ajit Suresh Palav",
      position: "Construction & Revenue Consultant",
      qualification: "B.E. (Civil)",
      bio: "Consultant – Redevelopment/Repairs/Revenue\nSite Execution / Costing",
      image: team1,
      email: "ajit@ekdantassociates.com", // Kept data in case needed later
      linkedin: "#", // Kept data in case needed later
    },
    {
      id: 3,
      name: "Chinmay Milind Shinde",
      position: "Structure & Planning Consultant",
      qualification: "B.E. (Civil), M.Tech. (Construction Management)",
      bio: "Valuer, Chartered Engineer, Structural Auditor",
      image: team3,
      email: "chinmay@ekdantassociates.com", // Kept data in case needed later
      linkedin: "#", // Kept data in case needed later
    },
  ];

  return (
    <main className="pt-20">
      {/* Header */}
      <section ref={headerRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <h1 className="text-5xl font-display font-bold mb-6 text-primary">
              Meet Our Team
            </h1>
            <p className="text-xl text-muted-foreground">
              The passionate professionals behind Ekdant Associates' success
            </p>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      {/* Removed teamGridRef from section tag */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              // Individual Card Animation Hook
              const { ref: cardRef, hasBeenInView: cardInView } = useIntersectionObserver();

              return (
                <Card
                  ref={cardRef}
                  key={member.id}
                  className={`overflow-hidden border-2 border-transparent
                              hover:shadow-xl hover:scale-105 hover:border-primary
                              transition-opacity duration-700 ease-out
                              transition-transform duration-700 ease-out
                              hover:transition-transform hover:duration-300 hover:ease-in-out
                              hover:transition-shadow hover:duration-300 hover:ease-in-out
                              hover:transition-colors hover:duration-300 hover:ease-in-out ${
                    cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }} // Staggered delay for cards
                >
                  <div className="relative h-80 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                    <p className="text-primary font-semibold mb-1">
                      {member.position}
                    </p>
                    <p className="text-muted-foreground mb-4 font-medium">
                      {member.qualification}
                    </p>
                    <p className="text-muted-foreground mb-6 text-sm whitespace-pre-line leading-relaxed">
                      {member.bio}
                    </p>
                    {/* --- REMOVED SOCIAL LINKS DIV --- */}
                    {/* <div className="flex gap-4"> ... links were here ... </div> */}
                    {/* -------------------------------- */}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div
            className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
            <h2 className="text-3xl font-display font-bold mb-4">
              Join Our Team
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals who share our
              passion for excellence. If you're interested in joining the Ekdant
              Associates family, we'd love to hear from you.
            </p>
            {/* --- UPDATED EMAIL LINK TO USE CORRECT ADDRESS --- */}
            <a
              href="mailto:ekdant_associates@hotmail.com" // Use the actual email from contactInfo
              className="inline-flex items-center gap-2 text-primary hover:underline font-semibold"
            >
              <Mail size={20} />
              ekdant_associates@hotmail.com
            </a>
            {/* ----------------------------------------------- */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;

