import { useState, memo } from "react"; // Added memo
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

// Define Project type (optional but good practice)
interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  members: string;
  image: string;
  status: string[];
}

// --- START: ProjectCard Component ---
// Use React.memo to prevent unnecessary re-renders if props don't change
const ProjectCard = memo(({ project, index, expandedProject, onToggleExpand }: {
  project: Project;
  index: number;
  expandedProject: number | null;
  onToggleExpand: (id: number) => void;
}) => {
  const { ref: cardRef, hasBeenInView: cardInView } = useIntersectionObserver({
    threshold: 0.1, // Trigger animation when 10% of the card is visible
  });

  return (
    <Card
      ref={cardRef}
      key={project.id}
      className={`overflow-hidden border-2 border-transparent
                  hover:border-primary hover:scale-105
                  transition-opacity duration-700 ease-out
                  transition-transform duration-700 ease-out
                  hover:transition-all hover:duration-200 hover:ease-in-out ${ // Keep hover transition simple
        cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20" // Animate based on individual card visibility
      }`}
      style={{ transitionDelay: `${index * 50}ms` }} // Reduced stagger delay slightly
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
          <p className="text-sm">
            Number of Members: {project.members}
          </p>
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
            <h4 className="font-bold mb-3 text-primary">
              Status of the Project
            </h4>
            <ol className="space-y-2">
              {project.status.map((item, idx) => (
                <li
                  key={idx}
                  className="text-sm text-muted-foreground pl-4"
                >
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
});
// --- END: ProjectCard Component ---


const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  // Hooks for section animations
  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver();
  const { ref: filterRef, hasBeenInView: filterInView } = useIntersectionObserver();
  // Removed gridRef - handled by individual cards now

  const projects: Project[] = [ // Added type annotation
    {
      id: 1, title: "Chandresh Vaibhav CHS LTD.", location: "Nallasopara (East)", category: "Completed", members: "116", image: project1,
      status: [
        'Developer "M/s Ashoka Buildcon" selected through Tender Process.',
        'Full FSI & TDR CC "2,04,645 Sq. Ft." "G + 14" in received in the name of society in Yr 2021-22',
        "Society Members Flats & Shops Allotment PAAA Completed.",
        "OC Received Yr 2024.",
      ],
    },
    {
      id: 2, title: "Pancham Park CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "45", image: project2,
      status: [
        'Developer "M/s Jivdani Reality" selected through Tender Process.',
        'Full FSI & TDR CC "67,000 Sq. Ft." "G + 15" in received in the name of society Yr 2023.',
        "Society Members Flats Allotment Completed.",
        "Society Members PAAA ongoing.",
        "9th slab work in progress.",
      ],
    },
    {
      id: 3, title: "Anand Park CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "69", image: project3,
      status: [
        'Developer "M/s Dhanlaxmi Developers" selected through Tender Process.',
        'Full FSI & TDR CC "144668 Sq. Ft." "G + 21" in received in the name of society Yr 2023',
        "Society Members Flats & Shops Allotment PAAA Completed.",
        "On-site 23rd Slab in process.",
      ],
    },
    {
      id: 4, title: "Namaskar CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "27", image: project1,
      status: [
        'Developer "M/s Dhanlaxmi Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 18" in received in the name of society Yr 2024.',
        "Society Members Flats Allotment PAAA Completed.",
        "On-site 10th Slab work in process.",
      ],
    },
    {
      id: 5, title: "Garden CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "70", image: project2,
      status: [
        'Developer "M/s Shree Sai Realtor\'s" selected through Tender Process.',
        'Full FSI & TDR CC "G + 14" in received in the name of society Yr 2023.',
        "Society Members Flats Allotment PAAA Completed.",
        "On-site 6th slab work in process.",
      ],
    },
    {
      id: 6, title: "Chitra Bhawan CHS LTD.", location: "Vasai (West)", category: "Ongoing", members: "15", image: project3,
      status: [
        'Developer "M/s Mahashraman" selected through Tender Process.',
        'Full FSI & TDR CC "G + 18" in received in the name of society Yr 2023.',
        "Society Members Flats Allotment PAAA Completed.",
        "On-site 19th slab work in process.",
      ],
    },
    {
      id: 7, title: "Jay Ganesh Krupa CHS LTD.", location: "Vasai (West)", category: "Ongoing", members: "38", image: project1,
      status: [
        'Developer "M/s Sai Kiran Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 15" in received in the name of society Yr 2024.',
        "Society Members Flats Allotment Completed & PAAA ongoing.",
        "On-site 14th slab work in process.",
      ],
    },
    {
      id: 8, title: "Ami Park D15 CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "48 (Tenants)", image: project2,
      status: [
        'Developer "M/s Jivdani Krupa Builders & Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 7" in received in the name of society Yr 2025.',
        "On Site preparation of foundation in process.",
      ],
    },
    {
      id: 9, title: "Mukti Vaibhav CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "48", image: project3,
      status: [
        'Developer "M/s Jivdani Krupa Builders & Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 7" in received in the name of society Yr 2025.',
        "On Site preparation of foundation in process.",
      ],
    },
    {
      id: 10, title: "The Pancharatana Lodha CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "71", image: project1,
      status: [
        'Developer "M/s Radhe Builders & Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 14" in the name of society in received & "G + 18" in the name of society in process.',
        "On-site plinth work has been completed.",
      ],
    },
    {
      id: 11, title: "Sai Palace CHS LTD.", location: "Bhayandar (East)", category: "Ongoing", members: "64", image: project2,
      status: [
        'Developer "M/s Bhadrankar Enterprises LLP" selected through Tender Process.',
        'Full FSI & TDR CC "G + 21" in the name of society in process.',
      ],
    },
    {
      id: 12, title: "Shri Krish Niwas CHS LTD.", location: "Bhandup (East)", category: "Ongoing", members: "9", image: project3,
      status: [
        'Developer "M/s Guru Krupa Developers" selected through Tender Process.',
        "Section 79a in process.",
      ],
    },
    {
      id: 13, title: "Mukti Narayan CHS LTD.", location: "Nallasopara (West)", category: "Ongoing", members: "27", image: project1,
      status: [
        'Developer "M/s Jivdani Krupa Builders & Developers" selected through Tender Process.',
        'Full FSI & TDR CC "G + 12" in received in the name of society Yr 2025.',
        "On Site piling work in process.",
      ],
    },
    {
      id: 14, title: "New Matruchhaya CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "53", image: project2,
      status: [
        'Developer "M/s Om Balaji" selected through Tender Process.',
        'Full FSI & TDR CC "G + 29" in the name of society received Yr 2024.',
        "Society Members Flats Allotment Completed & PAAA ongoing.",
        "On-site piling work in process.",
      ],
    },
    {
      id: 15, title: "Beas Sadan & Beas Sadan C & D CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "53", image: project3,
      status: [
        'Developer "M/s Ashoka Reality" selected through Tender Process.',
        'Full FSI & TDR CC "G + 21" in the name of society received Yr 2024.',
        "Society Members Flats Allotment & PAAA ongoing.",
        "On-site piling work in process.",
      ],
    },
    {
      id: 16, title: "Paras CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "64", image: project1,
      status: [
        'Developer "M/s Deep Ramkala Developers" selected through Tender Process.',
        "DA POA is done.",
        "CC in process.",
      ],
    },
    {
      id: 17, title: "Surykirti Old & New CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "126", image: project2,
      status: [
        'Developer "M/s Sanskruti Builders & Developers" selected through Tender Process.',
        "DA POA is done.",
        "CC in process.",
      ],
    },
    {
      id: 18, title: "Chandresh Vandan CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "86", image: project3,
      status: [
        'Developer "M/s Ashoka Reality" selected through Tender Process.',
        "DA POA is done.",
        "CC in process.",
      ],
    },
    {
      id: 19, title: "Sneha Deep CHS LTD.", location: "Vasai (West)", category: "Ongoing", members: "24", image: project1,
      status: [
        'Developer "M/s Parag Construction" selected through Tender Process.',
        "DA POA & PLAN in process.",
      ],
    },
    {
      id: 20, title: "New Lotus CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "40", image: project2,
      status: [
        'Developer "M/s Vinayak Builders & Developers" selected through Tender Process.',
        "DA POA & PLAN in process.",
      ],
    },
    {
      id: 21, title: "New Matruashish CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "53", image: project3,
      status: [
        'Developer "M/s Vinayak Builders & Developers" selected through Tender Process.',
        "DA POA & PLAN in process.",
      ],
    },
    {
      id: 22, title: "Sham CHS LTD.", location: "Nallasopara (East)", category: "Ongoing", members: "22", image: project1,
      status: [
        'Developer "M/s Shree Shakti Infra" selected through Tender Process.',
        "DA POA & PLAN in process.",
      ],
    },
    {
      id: 23, title: "Guru Smruti CHS LTD.", location: "Vasai (West)", category: "Ongoing", members: "18", image: project2,
      status: ["Tendering In Process."],
    },
    {
      id: 24, title: "Chandramukhi CHS LTD.", location: "Vasai (West)", category: "Ongoing", members: "37", image: project3,
      status: ["Project Report In Process."],
    },
  ];

  const categories = ["All", "Completed", "Ongoing"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

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
      {/* Removed gridRef from section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over filteredProjects and render ProjectCard */}
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                expandedProject={expandedProject}
                onToggleExpand={toggleExpand}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;

