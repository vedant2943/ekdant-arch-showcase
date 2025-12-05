import { useState, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Existing generic project images (currently unused, can remove if you want)
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

// New project-specific imports
import amiParkImage from "@/assets/AMI Park.jpg";
import anandParkImage from "@/assets/Anand park.jpg";
// import ananddam2Image from "@/assets/Ananddam 2.jpg"; 
import beasSadanImage from "@/assets/Beas Sadan.jpg";
import gokhivBalajiImage from "@/assets/Gokhiv Balaji.jpg";
import jayGaneshKripaImage from "@/assets/Jay Ganesh Kripa.jpg";
import muktiNarayanImage from "@/assets/Mukti Narayan.jpg";
import muktiVaibhavImage from "@/assets/Mukti Vaibhav.jpg";
import namaskarImage from "@/assets/Namaskar.jpg";
import underConstructionImage from "@/assets/under construction.jpg";

interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  members: string;
  image: string;
  status: string[];
}

const ProjectCard = memo(
  ({
    project,
    index,
    expandedProject,
    onToggleExpand,
  }: {
    project: Project;
    index: number;
    expandedProject: number | null;
    onToggleExpand: (id: number) => void;
  }) => {
    const { ref: cardRef, hasBeenInView: cardInView } = useIntersectionObserver({
      threshold: 0.1,
    });

    return (
      <Card
        ref={cardRef}
        key={project.id}
        className={`overflow-hidden border-2 border-transparent
                  hover:border-primary hover:scale-105
                  transition-opacity duration-700 ease-out
                  transition-transform duration-700 ease-out
                  hover:transition-all hover:duration-200 hover:ease-in-out ${
                    cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                  }`}
        style={{ transitionDelay: `${index * 50}ms` }}
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
            onClick={() => onToggleExpand(project.id)}
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
                    <span className="font-semibold text-foreground">
                      {idx + 1}.
                    </span>{" "}
                    {item}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </CardContent>
      </Card>
    );
  }
);

const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver();
  const { ref: filterRef, hasBeenInView: filterInView } = useIntersectionObserver();

  const { ref: pipelineRef, hasBeenInView: pipelineInView } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  const allProjectsData: Project[] = [
    // ==== PROJECTS WITH SPECIFIC IMAGES FIRST ====

    // Anand Park CHS LTD.
    {
      id: 3,
      title: "Anand Park CHS LTD.",
      location: "Nallasopara (West)",
      category: "Ongoing",
      members: "69",
      image: anandParkImage,
      status: [
        'Developer "M/S Dhanlaxmi Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "144668 Sq. Ft." "G + 21" In Received In The Name Of Society Yr 2023.',
        "Society Members Flats & Shops Allotment PAAA Completed.",
        "On-Site 22nd Slab Completed.",
        "Finishing Work In Process.",
      ],
    },

    // Namaskar CHS LTD.
    {
      id: 4,
      title: "Namaskar CHS LTD.",
      location: "Nallasopara (West)",
      category: "Ongoing",
      members: "27",
      image: namaskarImage,
      status: [
        'Developer "M/S Dhanlaxmi Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 18" In Received In The Name Of Society Yr 2024.',
        "Society Members Flats Allotment PAAA Completed.",
        "On-Site 6th Slab Work In Process.",
      ],
    },

    // Jay Ganesh Kripa CHS LTD.
    {
      id: 7,
      title: "Jay Ganesh Kripa CHS LTD",
      location: "Vasai (West)",
      category: "Ongoing",
      members: "38",
      image: jayGaneshKripaImage,
      status: [
        'Developer "M/S Sai Kiran Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 15" In Received In The Name Of Society Yr 2024.',
        "Society Members Flats Allotment Completed & PAAA Ongoing.",
        "On-Site RCC Work Completed.",
        "Finishing Work In Process.",
      ],
    },

    // Ami Park D15 CHS LTD.
    {
      id: 8,
      title: "Ami Park D15 CHS LTD",
      location: "Nallasopara (West)",
      category: "Ongoing",
      members: "48 (Tenants)",
      image: amiParkImage,
      status: [
        'Developer "M/S Jivdani Krupa Builders & Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 7" In Received In The Name Of Society Yr 2025.',
        "On Site Piling Work In Process.",
      ],
    },

    // Mukti Vaibhav CHS LTD.
    {
      id: 9,
      title: "Mukti Vaibhav CHS LTD",
      location: "Nallasopara (West)",
      category: "Ongoing",
      members: "48",
      image: muktiVaibhavImage,
      status: [
        'Developer "M/S Jivdani Krupa Builders & Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 7" In Received In The Name Of Society Yr 2025.',
        "On Site Pile Cap Work In Process.",
      ],
    },

    // Gokhiware Balaji / Shri Krish Niwas CHS LTD.
    {
      id: 12,
      title: "Gokhiware Balaji CHS LTD",
      location: "Bhandup (East)",
      category: "Ongoing",
      members: "9",
      image: gokhivBalajiImage,
      status: [
        'Developer "M/S Guru Krupa Developers" Selected Through Tender Process.',
        "Section 79a In Process.",
      ],
    },

    // Mukti Narayan CHS LTD.
    {
      id: 13,
      title: "Mukti Narayan CHS LTD",
      location: "Nallasopara (West)",
      category: "Ongoing",
      members: "27",
      image: muktiNarayanImage,
      status: [
        "Plot Area : 981 Sq. Mtr.",
        'Developer "M/S Jivdani Krupa Builders & Developers" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 12" In Received In The Name Of Society Yr 2025.',
        "On Site 1st Slab Work In Process.",
      ],
    },

    // Beas Sadan CHS LTD.
    {
      id: 15,
      title: "Beas Sadan CHS LTD.",
      location: "Nallasopara (East)",
      category: "Ongoing",
      members: "53",
      image: beasSadanImage,
      status: [
        'Developer "M/S Ashoka Reality" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 21" In The Name Of Society Received Yr 2024.',
        "Society Members Flats Allotment & PAAA Ongoing.",
        "1st Slab Work In Progress.",
      ],
    },

    // ==== PROJECTS WITH GENERIC UNDER-CONSTRUCTION IMAGE AFTER ====

    // Chandresh Vaibhav CHS LTD. (Completed)
    {
      id: 1,
      title: "Chandresh Vaibhav CHS LTD.",
      location: "Nallasopara (East)",
      category: "Completed",
      members: "116",
      image: underConstructionImage,
      status: [
        'Developer "M/S Ashoka Buildcon" Selected Through Tender Process.',
        'Full FSI & TDR CC "2,04,645 Sq. Ft." "G + 14" In Received In The Name Of Society In Yr 2021-22.',
        "Society Members Flats & Shops Allotment PAAA Completed.",
        "OC Received Yr 2024.",
      ],
    },

    // Chitra Bhawan CHS LTD.
    {
      id: 6,
      title: "Chitra Bhawan CHS LTD",
      location: "Vasai (West)",
      category: "Ongoing",
      members: "15",
      image: underConstructionImage,
      status: [
        'Developer "M/S Mahashraman" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 18" In Received In The Name Of Society Yr 2023.',
        "Society Members Flats Allotment PAAA Completed.",
        "Awaiting For OC.",
      ],
    },

    // Sai Palace CHS LTD.
    {
      id: 11,
      title: "Sai Palace CHS LTD.",
      location: "Bhaynadar (East)",
      category: "Ongoing",
      members: "64",
      image: underConstructionImage,
      status: [
        'Developer "M/S Bhadrankar Enterprises LLP" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 21" In The Name Of Society In Process.',
      ],
    },

    // New Matruchhaya CHS LTD.
    {
      id: 14,
      title: "New Matruchhaya CHS LTD",
      location: "Nallasopara (East)",
      category: "Ongoing",
      members: "53",
      image: underConstructionImage,
      status: [
        'Developer "M/S Om Balaji" Selected Through Tender Process.',
        'Full FSI & TDR CC "G + 29" In The Name Of Society Received Yr 2024.',
        "Society Members Flats Allotment Completed & PAAA Ongoing.",
        "On-Site Piling Work In Process.",
      ],
    },

    // Paras CHS LTD.
    {
      id: 16,
      title: "Paras CHS LTD.",
      location: "Nallasopara (East)",
      category: "Ongoing",
      members: "64",
      image: underConstructionImage,
      status: [
        'Developer "M/S Deep Ramkala Developers" Selected Through Tender Process.',
        "DA POA Is Done.",
        'Full FSI & TDR CC "G + 22" In The Name Of Society Received Yr 2024.',
        "On Site Piling Work In Process.",
      ],
    },

    // Surykirti Old & New CHS LTD.
    {
      id: 17,
      title: "Surykirti Old & New CHS LTD",
      location: "Nallasopara (East)",
      category: "Ongoing",
      members: "126",
      image: underConstructionImage,
      status: [
        'Developer "M/S Sanskruti Builders & Developers" Selected Through Tender Process.',
        "DA POA Is Done.",
        "CC In Process.",
      ],
    },

    // Chandresh Vandan CHS LTD.
    {
      id: 18,
      title: "Chandresh Vandan CHS LTD",
      location: "Nallasopara (East)",
      category: "Ongoing",
      members: "86",
      image: underConstructionImage,
      status: [
        'Developer "M/S Ashoka Reality" Selected Through Tender Process.',
        "DA POA Is Done.",
        "CC In Process.",
      ],
    },

    // Sneha Deep CHS LTD.
    {
      id: 19,
      title: "Sneha Deep CHS LTD.",
      location: "Vasai (West)",
      category: "Ongoing",
      members: "24",
      image: underConstructionImage,
      status: [
        'Developer "M/S Parag Construction" Selected Through Tender Process.',
        "DA POA Is Done.",
        "TILR & PLAN In Process.",
      ],
    },

    // New Lotus CHS LTD.
    {
      id: 20,
      title: "New Lotus CHS LTD.",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "40",
      image: underConstructionImage,
      status: [
        'Developer "M/S Vinayak Builders & Developers" Selected Through Tender Process.',
        "DA POA Is Done.",
        "CC In Process.",
      ],
    },

    // New Matruashish CHS LTD.
    {
      id: 21,
      title: "New Matruashish CHS LTD.",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "53",
      image: underConstructionImage,
      status: [
        'Developer "M/S Vinayak Builders & Developers" Selected Through Tender Process.',
        "DA POA Is Done.",
        "CC In Process.",
      ],
    },

    // Sham CHS LTD.
    {
      id: 22,
      title: "Sham CHS LTD",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "22",
      image: underConstructionImage,
      status: [
        'Developer "M/S Shree Shakti Infra" Selected Through Tender Process.',
        "DA POA Is Done.",
        "CC In Process.",
      ],
    },

    // Guru Smruti CHS LTD.
    {
      id: 23,
      title: "Guru Smruti CHS LTD",
      location: "Vasai (West)",
      category: "Ongoing",
      members: "18",
      image: underConstructionImage,
      status: ["Tendering In Process."],
    },

    // Chandramukhi CHS LTD.
    {
      id: 24,
      title: "Chandramukhi CHS LTD",
      location: "Vasai (West)",
      category: "Ongoing",
      members: "37",
      image: underConstructionImage,
      status: ["Tendering In Process."],
    },

    // Rajniketan CHS LTD.
    {
      id: 25,
      title: "Rajniketan CHS LTD",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "74",
      image: underConstructionImage,
      status: ["Tendering In Process."],
    },

    // Bhakti Pooja CHS LTD.
    {
      id: 26,
      title: "Bhakti Pooja CHS LTD",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "45",
      image: underConstructionImage,
      status: ["Tendering In Process."],
    },

    // Neminath CHS LTD.
    {
      id: 27,
      title: "Neminath CHS LTD",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "128",
      image: underConstructionImage,
      status: [
        'Developer "M/S Dhanraj Infra" Selected Through Tender Process.',
        "DA POA In Process.",
      ],
    },

    // Festival CHS LTD (Type A, C & E)
    {
      id: 28,
      title: "Festival CHS LTD (Type A, C & E)",
      location: "Nalasopara (East)",
      category: "Ongoing",
      members: "96",
      image: underConstructionImage,
      status: [
        'Developer "M/S Realtech Infra" Selected Through Tender Process.',
        "DA POA In Process.",
      ],
    },
  ];

  const projects = allProjectsData;

  const categories = ["All", "Completed", "Ongoing"];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const toggleExpand = (id: number) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

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
              Our Projects
            </h1>
            <p className="text-xl text-muted-foreground">
              Explore our portfolio of exceptional developments
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section ref={filterRef} className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div
            className={`flex flex-wrap justify-center gap-4 transition-all duration-1000 ${
              filterInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            }`}
          >
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
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                expandedProject={expandedProject}
                onToggleExpand={toggleExpand}
              />
            ))}

            {/* +12 Projects In Pipeline Card */}
            {(filter === "All" || filter === "Ongoing") && (
              <Card
                ref={pipelineRef}
                className={`
                  overflow-hidden border-2 border-transparent
                  hover:border-primary hover:scale-105
                  transition-opacity duration-700 ease-out
                  transition-transform duration-700 ease-out
                  hover:transition-all hover:duration-200 hover:ease-in-out 
                  ${
                    pipelineInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }
                `}
                style={{
                  transitionDelay: `${(filteredProjects.length % 3) * 50}ms`,
                }}
              >
                <div className="relative h-64 overflow-hidden bg-secondary flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-muted-foreground text-center px-4">
                    +12 Projects
                    <br />
                    In Pipeline
                  </h3>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 opacity-0">
                    <MapPin size={16} />
                    <p className="text-sm">Location</p>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground mb-4 opacity-0">
                    <Users size={16} />
                    <p className="text-sm">Members</p>
                  </div>
                  <div className="w-full mb-4"></div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
