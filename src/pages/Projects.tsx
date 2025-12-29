import { useState, memo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, MapPin, Users } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// --------------------------------------
// IMAGE IMPORTS (KEEP YOUR ORIGINAL ONES)
// --------------------------------------
import anandParkImage from "@/assets/Anand park.jpg";
import amiParkImage from "@/assets/AMI Park.jpg";
import muktiVaibhavImage from "@/assets/Mukti Vaibhav.jpg";
import namaskarImage from "@/assets/Namaskar.jpg";
import jayGaneshKripaImage from "@/assets/Jay Ganesh Kripa.jpg";
import gokhivBalajiImage from "@/assets/Gokhiv Balaji.jpg";
import beasSadanImage from "@/assets/Beas Sadan.jpg";
import muktiNarayanImage from "@/assets/Mukti Narayan.jpg";
import AnandDham2Image from "@/assets/Ananddam 2.jpg";
import AmitPalaceImage from "@/assets/Amit Palace.png";
import NewMuktiImage from "@/assets/New Mukti.jpg";
import ChandreshVaibhavImage from "@/assets/Chandresh Vaibhav.jpg";
import ChitraBhavanImage from "@/assets/Chitra Bhavan.jpg";
import underConstructionImage from "@/assets/under construction.jpg";

// --------------------------------------
// PROJECT INTERFACE
// --------------------------------------
interface Project {
  id: number;
  title: string;
  location: string;
  category: string;
  members: string;
  image: string;
  status: string[];
}

// --------------------------------------
// PROJECT CARD WITH DIRECTION ANIMATION
// --------------------------------------
const ProjectCard = memo(
  ({
    project,
    index,
    direction,
    expandedProject,
    onToggleExpand,
  }: {
    project: Project;
    index: number;
    direction: "left" | "center" | "right";
    expandedProject: number | null;
    onToggleExpand: (id: number) => void;
  }) => {
    const { ref: cardRef, hasBeenInView: cardInView } = useIntersectionObserver({
      threshold: 0.2,
    });

    return (
      <Card
        ref={cardRef}
        key={project.id}
        className={`
          overflow-hidden border-2 border-transparent
          hover:border-primary hover:scale-105
          transition-all duration-700 ease-out
          ${
            !cardInView
              ? direction === "left"
                ? "opacity-0 -translate-x-20"
                : direction === "right"
                ? "opacity-0 translate-x-20"
                : "opacity-0 translate-y-20"
              : "opacity-100 translate-x-0 translate-y-0"
          }
        `}
        style={{ transitionDelay: `${index * 40}ms` }}
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

          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <MapPin size={16} />
            <p className="text-sm">{project.location}</p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground mb-4">
            <Users size={16} />
            <p className="text-sm">Number of Members: {project.members}</p>
          </div>

          <Button
            variant="outline"
            className="w-full"
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

// --------------------------------------
// PROJECTS PAGE
// --------------------------------------
const Projects = () => {
  const [filter, setFilter] = useState("Ongoing");
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver({
    threshold: 0.5,
  });
  const { ref: filterRef, hasBeenInView: filterInView } = useIntersectionObserver({
    threshold: 0.4,
  });

  const { ref: pipelineRef, hasBeenInView: pipelineInView } =
    useIntersectionObserver({
      threshold: 0.1,
    });

  // --------------------------------------
  // INSERT YOUR FULL PROJECT LIST HERE
  // --------------------------------------
  const allProjectsData: Project[] = [
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

{
id: 4,
title: "Namaskar CHS LTD.",
location: "Nallasopara (West)",
category: "Ongoing",
members: "27",
image: namaskarImage,
status: [
"Developer M/S Dhanlaxmi Developers Selected Through Tender Process.",
'Full FSI & TDR CC "G + 18" In Received In The Name Of Society Yr 2024.',
"Society Members Flats Allotment PAAA Completed.",
"On-Site 6th Slab Work In Process.",
],
},

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

{
id: 12,
title: "Gokhiware Balaji CHS LTD",
location: "Vasai (East)",
category: "Ongoing",
members: "9",
image: gokhivBalajiImage,
status: [
" Sky line reality  dévelopers.", 
" Full FSI & TDR CC G+7 received in year 2024.",
" PAAA completed.",
" On site RCC work in progress.",
],
},

{
id: 13,
title: "Mukti Narayan CHS LTD",
location: "Nallasopara (West)",
category: "Ongoing",
members: "27",
image: muktiNarayanImage,
status: [
'Developer "M/S Jivdani Krupa Builders & Developers" Selected Through Tender Process.',
'Full FSI & TDR CC "G + 12" In Received In The Name Of Society Yr 2025.',
"On Site 1st Slab Work In Process.",
],
},

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

// ===== 5 CARDS WITH THEIR OWN IMAGES =====

{
id: 29,
title: "Amit Palace CHS LTD.",
location: "Nallasopara (West)",
category: "Ongoing",
members: "32",
image: AmitPalaceImage,
status: [
"Developer name sai siddhi builders & developers.",
" Full FSI & TDR CC G+7 Received In Yr 2024.",
" PAAA Completed.",
" On-Site RCC Work Completed,"
],
},
{
id: 30,
title: "Anand dham 2 CHS LTD.",
location: "Vasai (West)",
category: "Ongoing",
members: "11",
image: AnandDham2Image,
status: [
" Developer \"M/S Dhanraj Nirman\" Selected Through Tender Process.",
" Full FSI & TDR CC G+6 Received.",
" PAAA Progress.",
" On - Site RCC Work In Progress."
],
},
{
id: 32,
title: "New Mukti CHS LTD.",
location: "Nallasopara (West)",
category: "Completed",
members: "12",
image: NewMuktiImage,
status: [
" Developer name sai siddhi builders & developers.",
" Full fsi tdr for g+7 received in year 2022.",
" Oc received year 2024.",
],
},

// ==== PROJECTS WITH GENERIC / OTHER IMAGES AFTER ====

{
id: 1,
title: "Chandresh Vaibhav CHS LTD.",
location: "Nallasopara (East)",
category: "Completed",
members: "116",
image: ChandreshVaibhavImage,
status: [
'Developer "M/S Ashoka Buildcon" Selected Through Tender Process.',
'Full FSI & TDR CC "2,04,645 Sq. Ft." "G + 14" In Received In The Name Of Society In Yr 2021-22.',
"Society Members Flats & Shops Allotment PAAA Completed.",
"OC Received Yr 2024.",
],
},

{
id: 6,
title: "Chitra Bhawan CHS LTD",
location: "Vasai (East)",
category: "Ongoing",
members: "15",
image: ChitraBhavanImage,
status: [
'Developer "M/S Mahashraman" Selected Through Tender Process.',
'Full FSI & TDR CC "G + 18" In Received In The Name Of Society Yr 2023.',
"Society Members Flats Allotment PAAA Completed.",
"Awaiting For OC.",
],
},

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

{
id: 17,
title: "Suryakirti Nagar CHS LTD",
location: "Nallasopara (East)",
category: "Ongoing",
members: "63",
image: underConstructionImage,
status: [
'Developer "M/S Sanskruti Builders & Developers" Selected Through Tender Process.',
"DA POA Is Done.",
"CC In Process.",
],
},

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

{
id: 23,
title: "Guru Smruti CHS LTD",
location: "Vasai (West)",
category: "Ongoing",
members: "18",
image: underConstructionImage,
status: ["Tendering In Process."],
},

{
id: 24,
title: "Chandramukhi CHS LTD",
location: "Vasai (West)",
category: "Ongoing",
members: "37",
image: underConstructionImage,
status: ["Tendering In Process."],
},

{
id: 25,
title: "Rajniketan CHS LTD",
location: "Nalasopara (East)",
category: "Ongoing",
members: "74",
image: underConstructionImage,
status: ["Tendering In Process."],
},

{
id: 26,
title: "Bhakti Pooja CHS LTD",
location: "Nalasopara (East)",
category: "Ongoing",
members: "45",
image: underConstructionImage,
status: ["Tendering In Process."],
},

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

// ===== ADDITIONAL NEW PROJECT CARDS =====

{
id: 33,
title: "Garden CHS LTD.",
location: "Nallasopara (East)",
category: "Ongoing",
members: "70",
image: underConstructionImage,
status: [" Developer name Shree sai realtors.", 
" Full fsi tdr cc received in 2024",
" On site 12th floor slab in process",
" Paaa in progress.",
],
},
{
id: 34,
title: "Cosmos Residency CHS LTD.",
location: "Nallasopara (East)",
category: "Ongoing",
members: "11",
image: underConstructionImage,
status: [
  " Developer \"M/S Tazain Construction LLP\" Selected Through Tender Process.",
  " Awaiting CC."],
},
{
id: 35,
title: "Souparnika CHS LTD.",
location: "Nallasopara (East)",
category: "Ongoing",
members: "28",
image: underConstructionImage,
status: ["Tender draft finalization in progress"],
},
{
id: 36,
title: "Achole Ashiyana CHS LTD.",
location: "Nallasopara (East)",
category: "Ongoing",
members: "38",
image: underConstructionImage,
status: ["Tendering in progress"],
},
{
id: 37,
title: "Mahendra Palace CHS LTD.",
location: "Vasai (West)",
category: "Ongoing",
members: "52",
image: underConstructionImage,
status: ["Survey work in progress."],
},
{
id: 38,
title: "New Suryakirti CHS LTD.",
location: "Nallasopara (East)",
category: "Ongoing",
members: "63",
image: underConstructionImage,
status: ['Developer "M/S Sanskruti Builders & Developers" Selected Through Tender Process.',
"DA POA Is Done.",
"CC In Process.",],
},

// ===== FESTIVAL (SPLIT INTO 3 SEPARATE CARDS) =====

{
id: 39,
title: "Festival A CHS LTD.",
location: "Nalasopara (East)",
category: "Ongoing",
members: "32",
image: underConstructionImage,
status: [
'Developer "M/S Realtech Infra" Selected Through Tender Process.',
"DA POA In Process.",
],
},
{
id: 40,
title: "Festival C CHS LTD.",
location: "Nalasopara (East)",
category: "Ongoing",
members: "32",
image: underConstructionImage,
status: [
'Developer "M/S Realtech Infra" Selected Through Tender Process.',
"DA POA In Process.",
],
},
{
id: 41,
title: "Festival E CHS LTD.",
location: "Nalasopara (East)",
category: "Ongoing",
members: "32",
image: underConstructionImage,
status: [
'Developer "M/S Realtech Infra" Selected Through Tender Process.',
"DA POA In Process.",
],
},
{
  id: 42, // use next available ID
  title: "Shri Krish Nivas CHS LTD",
  location: "Bhandup (East)",
  category: "Ongoing",
  members: "9",
  image: underConstructionImage, // keep same placeholder image
  status: [
    "Developer “M/s Guru Krupa Developers” selected through Tender Process",
    "Section 79A in process"
  ],
},
{
  id: 43,
  title: "Pancham Park CHS LTD",
  location: "Nallasopara (East)",
  category: "Ongoing",
  members: "45",
  image: underConstructionImage, // keep same placeholder image
  status: [
    "Developer “M/s Jivdani Reality” selected through Tender Process",
    "Full FSI & TDR CC “67,000 Sq. Ft.” “G + 15” received in the name of society (Yr 2023)",
    "Society Members Flats Allotment Completed",
    "Society Members PAAA ongoing",
    "10th slab work in progress"
  ],
},

  ];

  const projects = allProjectsData;

  const categories = ["Ongoing", "Completed"];

  const filteredProjects =
    projects.filter((p) => p.category === filter);


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
              headerInView ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
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

            {filteredProjects.map((project, index) => {
              const pos = index % 3;
              const direction: "left" | "center" | "right" =
                pos === 0 ? "left" : pos === 1 ? "center" : "right";

              return (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  direction={direction}
                  expandedProject={expandedProject}
                  onToggleExpand={toggleExpand}
                />
              );
            })}

            {/* Pipeline Box */}
            {filter === "Ongoing" && (
              <Card
                ref={pipelineRef}
                className={`
                  overflow-hidden border-2 border-transparent
                  hover:border-primary hover:scale-105
                  transition-all duration-700
                  ${
                    pipelineInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-20"
                  }
                `}
              >
                <div className="relative h-64 overflow-hidden bg-secondary flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-muted-foreground text-center px-4">
                    +12 Projects <br /> In Pipeline
                  </h3>
                </div>
              </Card>
            )}

          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
