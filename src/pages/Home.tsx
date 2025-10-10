import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Users, Award, TrendingUp } from "lucide-react";
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import heroImage from "@/assets/hero-building.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  const stats = [
    { icon: Building2, label: "Projects Completed", value: 150, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
    { icon: Award, label: "Awards Won", value: 25, suffix: "+" },
    { icon: TrendingUp, label: "Years Experience", value: 15, suffix: "+" },
  ];

  const { ref: statsRef, hasBeenInView: statsInView } = useIntersectionObserver();
  const { ref: aboutRef, hasBeenInView: aboutInView } = useIntersectionObserver();
  const { ref: projectsRef, hasBeenInView: projectsInView } = useIntersectionObserver();

  const recentProjects = [
    {
      id: 1,
      title: "Luxury Residences",
      location: "Downtown District",
      image: project1,
      category: "Residential",
    },
    {
      id: 2,
      title: "Corporate Tower",
      location: "Business Hub",
      image: project2,
      category: "Commercial",
    },
    {
      id: 3,
      title: "Premium Villas",
      location: "Green Valley",
      image: project3,
      category: "Residential",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Commit to <span className="text-primary">Care</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Building Tomorrow's Landmarks with Excellence and Dedication
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="default">
              <Link to="/projects">View Our Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-foreground">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const count = useCountAnimation(stat.value, 2000, statsInView);
              return (
                <div 
                  key={index} 
                  className={`text-center transition-all duration-700 ${
                    statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {statsInView ? count : 0}{stat.suffix}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section ref={aboutRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            aboutInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-display font-bold mb-6">
              Who We Are
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Ekdant Associates is a leading real estate and construction firm with over 15 years of experience. 
              We specialize in creating exceptional residential, commercial, and infrastructure projects that 
              stand the test of time. Our commitment to quality, innovation, and customer satisfaction sets us apart.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section ref={projectsRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-display font-bold mb-4">
              Recent Projects
            </h2>
            <p className="text-muted-foreground">
              Explore our latest completed developments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentProjects.map((project, index) => (
              <Card 
                key={project.id} 
                className={`overflow-hidden hover:shadow-xl transition-all duration-700 ${
                  projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss how we can bring your vision to life with our expertise and dedication.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link to="/contact">Get in Touch Today</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Home;
