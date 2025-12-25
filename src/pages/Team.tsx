import { Briefcase, HardHat, Building2 } from "lucide-react";

const teamMembers = [
  {
    name: "Shekhar Rajaram Dhuri",
    role: "Society Affairs & Legal Aid Consultant",
    qualification: "DDEO, GDCA",
    icon: Briefcase,
    description:
      "DDEO, GDCA certified consultant specializing in co-operative housing societies. Expert advisor on redevelopment of housing society buildings with deep knowledge of legal frameworks and member coordination.",
  },
  {
    name: "Ajit Suresh Palav",
    role: "Construction & Revenue Consultant",
    qualification: "B.E. (Civil)",
    icon: HardHat,
    description:
      "B.E. (Civil) with extensive expertise in redevelopment, repairs, and revenue works. Specializes in site execution management and detailed project costing with hands-on field experience.",
  },
  {
    name: "Chinmay Milind Shinde",
    role: "Structure & Planning Consultant",
    qualification: "B.E. (Civil), M.Tech (Construction Management)",
    icon: Building2,
    description:
      "Registered Valuer, Chartered Engineer, and certified Structural Auditor. Brings advanced technical expertise in structural assessment and project planning.",
  },
];

const Team = () => {
  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-display font-bold text-primary mb-6">
            Core Team
          </h1>
          <p className="text-lg text-muted-foreground">
            Meet the experienced professionals behind Ekdant Associates.
            Our founding partners bring decades of combined expertise in
            engineering, construction, and consultancy.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 space-y-10">
          {teamMembers.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="flex flex-col md:flex-row overflow-hidden rounded-lg shadow-lg"
              >
                {/* Left Accent Strip */}
                <div className="flex items-center justify-center bg-gradient-to-b from-red-900 to-red-700 text-yellow-300 p-6 md:w-28">
                  <Icon size={42} />
                </div>

                {/* Content */}
                <div className="flex-1 bg-gradient-to-r from-yellow-100 via-yellow-200 to-orange-200 p-8">
                  <h2 className="text-2xl font-bold text-red-900 mb-1">
                    {member.name}
                  </h2>
                  <p className="text-red-700 font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm font-medium text-muted-foreground mb-4">
                    {member.qualification}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default Team;
