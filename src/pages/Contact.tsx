import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"; // ADDED

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // --- ADDED: Hooks for scroll animations ---
  const { ref: headerRef, hasBeenInView: headerInView } = useIntersectionObserver();
  const { ref: infoRef, hasBeenInView: infoInView } = useIntersectionObserver();
  const { ref: formRef, hasBeenInView: formInView } = useIntersectionObserver();
  const { ref: mapRef, hasBeenInView: mapInView } = useIntersectionObserver();
  // ------------------------------------------

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // --- Netlify AJAX form submission setup ---
    const myForm = e.target as HTMLFormElement;
    const netlifyFormData = new FormData(myForm);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(netlifyFormData as any).toString(),
    })
      .then(() => {
        // --- Success: Show toast and clear form ---
        console.log("Form successfully submitted to Netlify");
        toast({
          title: "Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      })
      .catch((error) => {
        // --- Error Handling ---
        console.error("Error submitting form to Netlify:", error);
        toast({
          title: "Submission Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      });
    // --- End of Netlify AJAX setup ---
  };


  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "9270245553",
      link: "tel:+919270245553",
    },
    {
      icon: Mail,
      title: "Email",
      details: "ekdant_associates@hotmail.com",
      link: "mailto:ekdant_associates@hotmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details:
        "Shop no.3, Gangotri Apartment,\nSanyukta Nagar, Achole Cross Road,\nNallasopara East, 401209",
      link: "https://maps.app.goo.gl/Z4ifDZADmxprRjqN8", // UPDATED Share Link
    },
    {
      icon: Instagram,
      title: "Instagram",
      details: "@ekdant_associates",
      link: "https://www.instagram.com/ekdant_associates/",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sun (Fri closed):", "10:00 AM - 6:00 PM"],
      link: "#", // No link needed
    },
  ];

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
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              We'd love to hear from you. Send us a message and we'll respond as
              soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards & Form/Map */}
      <section ref={infoRef} className="pt-16">
        <div className="container mx-auto px-4">
          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              // Individual Card Animation Hook
              const { ref: cardRef, hasBeenInView: cardInView } = useIntersectionObserver();

              return (
              <Card
                ref={cardRef}
                key={index}
                className={`text-center border-2 border-transparent
                            hover:shadow-lg hover:scale-105 hover:border-primary
                            transition-opacity duration-700 ease-out
                            transition-transform duration-700 ease-out
                            hover:transition-transform hover:duration-300 hover:ease-in-out
                            hover:transition-shadow hover:duration-300 hover:ease-in-out
                            hover:transition-colors hover:duration-300 hover:ease-in-out ${
                  cardInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }} // Staggered delay
              >
                <CardContent className="p-6">
                  <info.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="font-bold mb-2">{info.title}</h3>
                  {Array.isArray(info.details) ? (
                    <div className="text-sm text-muted-foreground">
                      {info.details.map((line, i) => (
                        <span key={i} className="block">
                          {line}
                        </span>
                      ))}
                    </div>
                  ) : info.link.startsWith("#") ? (
                    <p className="text-sm text-muted-foreground break-words whitespace-pre-line">
                      {info.details}
                    </p>
                  ) : (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="text-sm text-muted-foreground hover:text-primary transition-colors break-words whitespace-pre-line"
                    >
                      {info.details}
                    </a>
                  )}
                </CardContent>
              </Card>
            )})}
          </div>

          {/* Form & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              ref={formRef}
              className={`transition-all duration-1000 ${
                formInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-primary">
                Send Us a Message
              </h2>
              {/* --- ADDED NETLIFY ATTRIBUTES TO FORM --- */}
             <form
  name="contact"
  method="POST"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
  onSubmit={handleSubmit}
  className="space-y-6"
>
  {/* Netlify hidden inputs */}
  <input type="hidden" name="form-name" value="contact" />
  <p className="hidden">
    <label>
      Don’t fill this out: <input name="bot-field" />
    </label>
  </p>

  <div>
    <label htmlFor="name" className="block text-sm font-medium mb-2">
      Full Name *
    </label>
    <Input
      id="name"
      name="name"
      value={formData.name}
      onChange={handleChange}
      required
      placeholder="John Doe"
    />
  </div>

  <div>
    <label htmlFor="email" className="block text-sm font-medium mb-2">
      Email Address *
    </label>
    <Input
      id="email"
      name="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
      placeholder="john@example.com"
    />
  </div>

  <div>
    <label htmlFor="phone" className="block text-sm font-medium mb-2">
      Phone Number
    </label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      placeholder="+91 1234567890"
    />
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium mb-2">
      Subject *
    </label>
    <Input
      id="subject"
      name="subject"
      value={formData.subject}
      onChange={handleChange}
      required
      placeholder="Project Inquiry"
    />
  </div>

  <div>
    <label htmlFor="message" className="block text-sm font-medium mb-2">
      Message *
    </label>
    <Textarea
      id="message"
      name="message"
      value={formData.message}
      onChange={handleChange}
      required
      placeholder="Tell us about your project..."
      rows={6}
    />
  </div>

  <Button type="submit" size="lg" className="w-full">
    Send Message
  </Button>
</form>

            </div>

            {/* Map */}
            <div
              ref={mapRef}
               className={`transition-all duration-1000 delay-200 ${
                mapInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
              }`}
            >
              <h2 className="text-3xl font-display font-bold mb-6 text-primary">
                Find Us
              </h2>
              <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3762.9697510070587!2d72.817431!3d19.4137129!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9458e012e1d%3A0xee6bced491b338a9!2sGangotri%20Apartment!5e0!3m2!1sen!2sin!4v1761489657680!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Gangotri Apartment Location"
                     />

              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

