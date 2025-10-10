import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, FileCheck, Scale, HardHat, LineChart, Shield, CheckCircle2, Users, Award, TrendingUp } from "lucide-react";
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
    { icon: TrendingUp, label: "Years Experience", value: 7, suffix: "+" },
  ];

  const { ref: statsRef, hasBeenInView: statsInView } = useIntersectionObserver();
  const { ref: aboutRef, hasBeenInView: aboutInView } = useIntersectionObserver();
  const { ref: servicesRef, hasBeenInView: servicesInView } = useIntersectionObserver();
  const { ref: projectsRef, hasBeenInView: projectsInView } = useIntersectionObserver();

  const services = [
    {
      icon: Building2,
      title: "Redevelopment PMC (Project Management Consultancy)",
      description: "Ekdant Associates provides complete end-to-end PMC services for housing society redevelopment projects — from feasibility analysis to project handover.",
      points: [
        "Selecting the right developer through a transparent tendering process.",
        "Conducting FSI, TDR, and cost-benefit calculations as per UDCPR.",
        "Drafting and reviewing legal agreements (MoU, DA, POA, etc.).",
        "Monitoring construction quality, timelines, and financial compliance."
      ]
    },
    {
      icon: FileCheck,
      title: "Repair PMC",
      description: "We provide technical guidance and project management for building repair and rehabilitation works.",
      points: [
        "Structural assessment and repair estimation.",
        "Tendering, contractor selection, and supervision.",
        "Quality control of materials and workmanship.",
        "Periodic progress reporting and budget management."
      ]
    },
    {
      icon: CheckCircle2,
      title: "Revenue Works",
      description: "Ekdant Associates specializes in revenue and property documentation services, ensuring that all land and property records are accurate and legally compliant.",
      points: [
        "Property measurement and demarcation.",
        "Mutation entries, 7/12 extracts, and PR Card updates.",
        "Conversion and amalgamation of land parcels.",
        "Coordination with revenue authorities and local bodies."
      ]
    },
    {
      icon: HardHat,
      title: "Structural Services",
      description: "Our structural division focuses on safety, stability, and sustainability.",
      points: [
        "Structural audits for old buildings as per VVCMC & UDCPR norms.",
        "Non-destructive testing (NDT) and detailed technical reporting.",
        "Structural design for new and existing buildings.",
        "Certification for building safety and occupancy."
      ]
    },
    {
      icon: LineChart,
      title: "Architectural Services",
      description: "We offer comprehensive architectural design and planning solutions that balance functionality, aesthetics, and compliance.",
      points: [
        "Concept planning and layout design.",
        "2D & 3D visualizations.",
        "Liaison with municipal authorities for plan approvals.",
        "Coordination with structural and MEP teams."
      ]
    },
    {
      icon: Shield,
      title: "Society Efforts",
      description: "We actively assist housing societies in all administrative and procedural efforts related to redevelopment or repair.",
      points: [
        "Preparing and maintaining society documentation.",
        "Conducting member awareness meetings.",
        "Coordinating with legal, financial, and technical teams.",
        "Guiding society committees through decision-making and execution."
      ]
    },
    {
      icon: Scale,
      title: "Legal Consultancy in Property",
      description: "Our legal wing provides professional legal consultation and documentation services related to property and redevelopment.",
      points: [
        "Drafting and vetting redevelopment agreements.",
        "Title verification and due diligence.",
        "Legal NOCs, approvals, and compliance under cooperative laws.",
        "Resolving property disputes and guiding societies through legal formalities."
      ]
    }
  ];

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
             Ekdant Associates, founded in 2018 by Mr. Shekhar Dhuri, Mr. Ajit Palav, and Mr. Chinmay Shinde, is a multidisciplinary firm delivering professional engineering, project management, and consultancy services. We offer end-to-end solutions in redevelopment, structural and architectural design, legal consultation, and revenue works. Our focus on technical excellence, transparency, and client satisfaction ensures every project is executed efficiently and with trust.
            </p>
            <Button asChild variant="default" size="lg">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Offered */}
      <section ref={servicesRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-display font-bold mb-4">
              Services Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Core Services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`hover:shadow-xl transition-all duration-700 ${
                  servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
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