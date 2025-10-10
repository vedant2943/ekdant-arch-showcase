import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "Chandresh Vaibhav CHS LTD.",
      location: "Nallasopara (East)",
      category: "Residential",
      members: "116",
      image: project1,
      status: [
        "Developer 'M/s Ashoka Buildcon' selected through Tender Process.",
        "Full FSI & TDR CC '2,04,645 Sq. Ft.' 'G + 14' in received in the name of society in Yr 2021-22",
        "Society Members Flats & Shops Allotment PAAA Completed.",
        "OC Received Yr 2024."
      ]
    },
    {
      id: 2,
      title: "Shree Ganesh CHS",
      location: "Virar (West)",
      category: "Residential",
      members: "85",
      image: project2,
      status: [
        "Developer 'M/s Paradise Developers' selected through competitive bidding.",
        "IOD approved and FSI clearance received in 2022.",
        "Construction work in progress - 60% completed.",
        "Expected completion by Q4 2025."
      ]
    },
    {
      id: 3,
      title: "Laxmi Narayan Tower",
      location: "Nalasopara (West)",
      category: "Commercial",
      members: "45",
      image: project3,
      status: [
        "Developer 'M/s Elite Constructions' appointed after tender process.",
        "CC received for 'G + 10' commercial complex.",
        "All legal formalities and agreements completed.",
        "Construction phase initiated in Jan 2024."
      ]
    },
    {
      id: 4,
      title: "Sai Krupa Housing Society",
      location: "Vasai (East)",
      category: "Residential",
      members: "150",
      image: project1,
      status: [
        "Developer selection completed through transparent tender.",
        "Full FSI approval received - 'G + 16' structure.",
        "Member allocation and PAAA process completed.",
        "OC received in 2023."
      ]
    },
    {
      id: 5,
      title: "Evergreen Heights",
      location: "Mira Road",
      category: "Residential",
      members: "98",
      image: project2,
      status: [
        "Developer 'M/s Skyline Builders' selected.",
        "IOD and CC clearances obtained in 2021.",
        "Construction 80% complete.",
        "Handover scheduled for Q2 2025."
      ]
    },
    {
      id: 6,
      title: "Shivam Commercial Complex",
      location: "Bhayandar",
      category: "Commercial",
      members: "60",
      image: project3,
      status: [
        "Developer finalized through competitive bidding.",
        "CC approved for mixed-use development 'G + 12'.",
        "Legal documentation and society agreements finalized.",
        "Foundation work completed."
      ]
    },
    {
      id: 7,
      title: "Radha Krishna Residency",
      location: "Nallasopara (East)",
      category: "Residential",
      members: "120",
      image: project1,
      status: [
        "Developer 'M/s Crown Developers' appointed.",
        "FSI and TDR calculations completed - 1,85,000 Sq. Ft.",
        "All member flats allocated successfully.",
        "OC obtained in 2024."
      ]
    },
    {
      id: 8,
      title: "Omkar Heights",
      location: "Virar (East)",
      category: "Residential",
      members: "75",
      image: project2,
      status: [
        "Developer selection through tender process completed.",
        "Building plan approved 'G + 13'.",
        "Construction in progress - 45% completed.",
        "Expected delivery in 2026."
      ]
    },
    {
      id: 9,
      title: "Metro Plaza",
      location: "Nalasopara (West)",
      category: "Commercial",
      members: "35",
      image: project3,
      status: [
        "Developer 'M/s Metro Constructions' finalized.",
        "CC received for retail and office complex.",
        "Member shop allocation completed.",
        "Interior work in progress."
      ]
    },
    {
      id: 10,
      title: "Sunrise Valley CHS",
      location: "Vasai (West)",
      category: "Residential",
      members: "135",
      image: project1,
      status: [
        "Developer appointed through transparent tender.",
        "Full FSI approval - 'G + 15' twin towers.",
        "PAAA and member agreements finalized.",
        "Project completed and OC received in 2023."
      ]
    },
    {
      id: 11,
      title: "Golden Gate Apartments",
      location: "Mira Road",
      category: "Residential",
      members: "92",
      image: project2,
      status: [
        "Developer 'M/s Golden Constructions' selected.",
        "IOD clearance and CC received.",
        "Construction 70% complete.",
        "Finishing work in progress."
      ]
    },
    {
      id: 12,
      title: "Pearl Commercial Hub",
      location: "Bhayandar",
      category: "Commercial",
      members: "50",
      image: project3,
      status: [
        "Developer finalized after competitive bidding.",
        "CC approved for 'G + 11' commercial structure.",
        "All legal formalities completed.",
        "Structural work 60% completed."
      ]
    },
    {
      id: 13,
      title: "Mahalaxmi Towers",
      location: "Nallasopara (West)",
      category: "Residential",
      members: "108",
      image: project1,
      status: [
        "Developer 'M/s Mahalaxmi Developers' appointed.",
        "FSI calculations and CC received.",
        "Member flat allocation completed.",
        "OC received in 2024."
      ]
    },
    {
      id: 14,
      title: "Green Park Society",
      location: "Virar (West)",
      category: "Residential",
      members: "88",
      image: project2,
      status: [
        "Developer selection through tender completed.",
        "Building sanctions received 'G + 14'.",
        "Construction phase ongoing - 55% completed.",
        "Expected completion in Q3 2025."
      ]
    },
    {
      id: 15,
      title: "City Center Mall",
      location: "Nalasopara (East)",
      category: "Commercial",
      members: "40",
      image: project3,
      status: [
        "Developer 'M/s City Developers' finalized.",
        "CC approved for shopping complex.",
        "Shop allocation to members completed.",
        "Fit-out work in progress."
      ]
    },
    {
      id: 16,
      title: "Shanti Nagar CHS",
      location: "Vasai (East)",
      category: "Residential",
      members: "125",
      image: project1,
      status: [
        "Developer appointed through transparent process.",
        "Full FSI approval received - 'G + 16'.",
        "All member agreements finalized.",
        "OC obtained in 2023."
      ]
    },
    {
      id: 17,
      title: "Diamond Heights",
      location: "Mira Road",
      category: "Residential",
      members: "95",
      image: project2,
      status: [
        "Developer 'M/s Diamond Constructions' selected.",
        "IOD and CC clearances obtained.",
        "Construction 65% complete.",
        "Interior finishing phase commenced."
      ]
    },
    {
      id: 18,
      title: "Business Bay Complex",
      location: "Bhayandar",
      category: "Commercial",
      members: "55",
      image: project3,
      status: [
        "Developer finalized through competitive tender.",
        "CC received for 'G + 10' IT park.",
        "Legal documentation completed.",
        "Construction 40% completed."
      ]
    },
    {
      id: 19,
      title: "Ganpati Residency",
      location: "Nallasopara (East)",
      category: "Residential",
      members: "112",
      image: project1,
      status: [
        "Developer 'M/s Ganpati Developers' appointed.",
        "FSI and TDR CC received.",
        "Member flat allocation successful.",
        "Project completed with OC in 2024."
      ]
    },
    {
      id: 20,
      title: "Hill View Apartments",
      location: "Virar (East)",
      category: "Residential",
      members: "82",
      image: project2,
      status: [
        "Developer selection completed.",
        "Building plan approved 'G + 13'.",
        "Construction ongoing - 50% completed.",
        "Expected handover in 2026."
      ]
    },
    {
      id: 21,
      title: "Trade Center",
      location: "Nalasopara (West)",
      category: "Commercial",
      members: "38",
      image: project3,
      status: [
        "Developer 'M/s Trade Constructions' finalized.",
        "CC approved for commercial complex.",
        "Shop and office allocation completed.",
        "Internal work in progress."
      ]
    },
    {
      id: 22,
      title: "Sai Dham CHS",
      location: "Vasai (West)",
      category: "Residential",
      members: "140",
      image: project1,
      status: [
        "Developer appointed through tender process.",
        "Full FSI approval - 'G + 15'.",
        "All member formalities completed.",
        "OC received in 2023."
      ]
    },
    {
      id: 23,
      title: "Skyline Towers",
      location: "Mira Road",
      category: "Residential",
      members: "100",
      image: project2,
      status: [
        "Developer 'M/s Skyline Developers' selected.",
        "IOD and CC received.",
        "Construction 75% complete.",
        "Final phases under execution."
      ]
    },
    {
      id: 24,
      title: "Corporate Square",
      location: "Bhayandar",
      category: "Commercial",
      members: "48",
      image: project3,
      status: [
        "Developer finalized after tender.",
        "CC approved for 'G + 12' corporate offices.",
        "Legal agreements executed.",
        "Structural work 55% completed."
      ]
    }
  ];

  const categories = ["All", "Residential", "Commercial"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <main className="pt-20">
      {/* Header */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of exceptional developments
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card 
                key={project.id} 
                className="overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <MapPin size={16} />
                    <p className="text-sm">{project.location}</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4">
                    <Users size={16} />
                    <p className="text-sm">Number of Members: {project.members}</p>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full mb-4"
                    onClick={() => toggleExpand(project.id)}
                  >
                    {expandedProject === project.id ? (
                      <>
                        Hide Status <ChevronUp className="ml-2" size={16} />
                      </>
                    ) : (
                      <>
                        View Status <ChevronDown className="ml-2" size={16} />
                      </>
                    )}
                  </Button>

                  {expandedProject === project.id && (
                    <div className="mt-4 p-4 bg-secondary rounded-lg animate-fade-in">
                      <h4 className="font-bold mb-3 text-primary">Status of the Project</h4>
                      <ol className="space-y-2">
                        {project.status.map((item, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground pl-4">
                            <span className="font-semibold text-foreground">{idx + 1}.</span> {item}
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
