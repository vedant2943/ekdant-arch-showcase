import { Target, Eye, Award, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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

  return (
    <main className="pt-20">
      {/* Header Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6">About Ekdant Associates</h1>
            <p className="text-xl text-muted-foreground">
              Building excellence since 2008, creating landmarks that define modern living
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Founded in 2008, Ekdant Associates has grown from a small construction firm to one of the region's 
                most respected real estate and construction companies. Our journey has been marked by unwavering 
                commitment to excellence, innovation, and customer satisfaction.
              </p>
              <p className="text-lg">
                With over 150 successfully completed projects and 500+ satisfied clients, we have established 
                ourselves as industry leaders. Our portfolio spans residential complexes, commercial towers, 
                infrastructure projects, and luxury developments.
              </p>
              <p className="text-lg">
                What sets us apart is our holistic approach to every project. From initial design concepts to final 
                execution, we maintain rigorous quality standards and transparent communication. Our team of experienced 
                architects, engineers, and construction professionals work together to bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-colors">
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-8 text-center">Why Choose Ekdant Associates?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
              <div className="flex gap-4">
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
