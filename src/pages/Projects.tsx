import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Luxury Residences",
      location: "Downtown District",
      category: "Residential",
      status: "Completed",
      units: "120 Apartments",
      year: "2023",
      image: project1,
      description: "Premium residential complex featuring modern amenities and sustainable design.",
    },
    {
      id: 2,
      title: "Corporate Tower",
      location: "Business Hub",
      category: "Commercial",
      status: "Completed",
      units: "15 Floors",
      year: "2023",
      image: project2,
      description: "State-of-the-art commercial space with cutting-edge infrastructure.",
    },
    {
      id: 3,
      title: "Premium Villas",
      location: "Green Valley",
      category: "Residential",
      status: "Ongoing",
      units: "50 Villas",
      year: "2024",
      image: project3,
      description: "Luxurious villas surrounded by nature with world-class amenities.",
    },
    {
      id: 4,
      title: "Shopping Complex",
      location: "City Center",
      category: "Commercial",
      status: "Completed",
      units: "200 Stores",
      year: "2022",
      image: project1,
      description: "Modern retail destination with entertainment and dining options.",
    },
    {
      id: 5,
      title: "Riverside Apartments",
      location: "Riverside Drive",
      category: "Residential",
      status: "Completed",
      units: "80 Units",
      year: "2022",
      image: project2,
      description: "Contemporary apartments with stunning river views and premium facilities.",
    },
    {
      id: 6,
      title: "Tech Park",
      location: "IT Corridor",
      category: "Commercial",
      status: "Ongoing",
      units: "10 Blocks",
      year: "2024",
      image: project3,
      description: "Modern technology park designed for innovation and collaboration.",
    },
  ];

  const categories = ["All", "Residential", "Commercial"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

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
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                  <div className="absolute top-4 right-4 bg-white text-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">{project.location}</p>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Units:</span> {project.units}
                    </div>
                    <div>
                      <span className="font-semibold">Year:</span> {project.year}
                    </div>
                  </div>
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
