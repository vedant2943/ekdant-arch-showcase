import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"; 
import logo from "@/assets/logo.png"; 

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To deliver exceptional real estate and construction solutions that exceed client expectations while maintaining the highest standards of quality, integrity, and innovation.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "To be recognized as the most trusted and innovative real estate and construction firm, transforming skylines and communities through sustainable and beautiful developments.",
    },
    {
      icon: Award,
      title: "Quality Excellence",
      description: "We are committed to delivering projects that stand the test of time, using premium materials and employing best-in-class construction practices.",
    },
    {
      icon: Users,
      title: "Client Focus",
      description: "Your satisfaction is our priority. We work closely with clients throughout every phase, ensuring transparent communication and personalized service.",
    },
  ];

  // --- Hooks for scroll animations ---
  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver();
  const { ref: storyRef, hasBeenInView: storyInView } = useIntersectionObserver();
  const { ref: valuesRef, hasBeenInView: valuesInView } = useIntersectionObserver();
  const { ref: whyChooseUsRef, hasBeenInView: whyChooseUsInView } = useIntersectionObserver();
  // ------------------------------------------

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section ref={headerRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {/* ADDED: Animation classes */}
          <div className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
              headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            
            {/* --- MODIFIED: Wrapped logo and h1 in a flex container --- */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <img 
                src={logo} 
                alt="Ekdant Associates Logo" 
                className="w-20 h-20" // Removed mx-auto
              />
              <h1 className="text-5xl font-display font-bold"> {/* Removed mb-6 */}
                 <span className="text-primary">Ekdant Associates</span>
              </h1>
            </div>
            {/* --------------------------------------------------------- */}

            <p className="text-xl text-muted-foreground">
              Building excellence since 2018, creating landmarks that define modern living
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section ref={storyRef} className="py-20">
        <div className="container mx-auto px-4">
          {/* ADDED: Animation classes */}
          <div className={`max-w-4xl mx-auto transition-all duration-1000 ${
              storyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            {/* CHANGED: Added text-primary */}
            <h2 className="text-3xl font-display font-bold mb-6 text-primary">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Ekdant Associates was founded in 2018 by Mr. Shekhar Dhuri, Mr. Ajit Palav, and Mr. Chinmay Shinde with a clear vision — to deliver professional engineering, project management, and consultancy services that truly understand and fulfill every client’s unique needs.
              </p>
              <p className="text-lg">
                Since its inception, Ekdant Associates has grown into a multidisciplinary firm offering end-to-end solutions in Redevelopment Project Management, Structural and Architectural Design, Legal Consultation, and Revenue Works. Our goal is to combine technical excellence, transparency, and practical experience to ensure that every project — big or small — is executed with precision, efficiency, and trust.
              </p>
              <p className="text-lg">
                We believe in client satisfaction through clarity, commitment, and quality, ensuring that societies, developers, and property owners receive the best professional guidance at every stage of their project journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section ref={valuesRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          {/* ADDED: Animation classes */}
          <div className={`text-center mb-12 transition-all duration-1000 ${
              valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
            {/* CHANGED: Added text-primary */}
            <h2 className="text-4xl font-display font-bold mb-4 text-primary">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card 
                key={index} 
                // ADDED: Hover scale effect
                className={`border-2 hover:border-primary hover:scale-105 transition-all duration-700 ${
                  valuesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-8">
                  <value.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section ref={whyChooseUsRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* ADDED: Animation for title */}
            <div className={`transition-all duration-1000 ${
                whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
              {/* CHANGED: Added text-primary */}
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-primary">
                Why Choose Ekdant Associates?
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* ADDED: Animation + Stagger for all 6 items */}
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '0ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">
                    15+ years of excellence with over 150 successfully delivered projects
                  </p>
                </div>
              </div>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold mb-2">Expert Team</h3>
                  <p className="text-muted-foreground">
                    Highly qualified architects, engineers, and construction professionals
                  </p>
                </div>
              </div>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-bold mb-2">Quality Assurance</h3>
                  <p className="text-muted-foreground">
                    Rigorous quality control at every stage of construction
                  </p>
                </div>
              </div>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-bold mb-2">Timely Delivery</h3>
                  <p className="text-muted-foreground">
                    Committed to delivering projects on time, every time
                  </p>
                </div>
              </div>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '400ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  5
                </div>
                <div>
                  <h3 className="font-bold mb-2">Transparent Process</h3>
                  <p className="text-muted-foreground">
                    Clear communication and regular updates throughout the project
                  </p>
                </div>
              </div>
              <div 
                className={`flex gap-4 transition-all duration-700 ${
                  whyChooseUsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: '500ms' }}
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                  6
                </div>
                <div>
                  <h3 className="font-bold mb-2">Sustainable Practices</h3>
                  <p className="text-muted-foreground">
                    Environmentally conscious construction methods and materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;