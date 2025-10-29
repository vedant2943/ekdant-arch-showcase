import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
// Import Accordion components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Building2, FileCheck, Scale, HardHat, LineChart, Shield, Users, TrendingUp } from "lucide-react"; // Removed Award, added CheckCircle2
import { useCountAnimation } from "@/hooks/useCountAnimation";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import heroImage from "@/assets/hero-building.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const Home = () => {
  const stats = [
    { icon: Building2, label: "Projects Completed", value: 25, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
    { icon: TrendingUp, label: "Years Experience", value: 7, suffix: "+" },
  ];

  const { ref: statsRef, hasBeenInView: statsInView } = useIntersectionObserver();
  const { ref: aboutRef, hasBeenInView: aboutInView } = useIntersectionObserver();
  const { ref: servicesRef, hasBeenInView: servicesInView } = useIntersectionObserver();
  const { ref: projectsRef, hasBeenInView: projectsInView } = useIntersectionObserver();

  // --- NEW STRUCTURED SERVICES DATA ---
  const servicesData = [
    {
      icon: Building2, // Reused icon
      title: "Redevelopment PMC",
      phases: [
        {
          phaseTitle: "Phase I – Pre-Tendering Stage (Feasibility & Documentation)",
          phaseDescription: "We begin with a detailed feasibility analysis to evaluate the development potential as per prevailing government policies on FSI and TDR. Our team verifies all legal and technical documentation, including conveyance deeds, approved plans, title reports, and survey data. This phase ensures that every project starts on a solid foundation of legal clarity and development feasibility.",
        },
        {
          phaseTitle: "Phase II – Pre-Tendering Stage (Tender Preparation & Evaluation)",
          phaseDescription: "In this phase, we prepare comprehensive tender documents and finalize them in coordination with the society’s managing committee. We invite tenders from reputed and experienced developers, conduct detailed technical and financial evaluations, and prepare comparative reports for transparent selection and approval by the society.",
        },
        {
          phaseTitle: "Phase III – Before Construction Stage (Developer Finalization, Agreements & Planning)",
          phaseDescription: "After evaluation, we organize joint meetings with shortlisted developers to help the society finalize the most suitable partner. We assist in issuing the Letter of Intent (LOI) and oversee the preparation and execution of the Permanent Alternate Accommodation Agreement (PAAA) and Development Agreement (DA). Plans are finalized strictly in accordance with the society’s requirements, ensuring all architectural, structural, and service drawings are approved. We also develop detailed project schedules and bar charts to guarantee smooth and timely execution.",
        },
        {
          phaseTitle: "Phase IV – Construction Stage (Execution, Supervision & Coordination)",
          phaseDescription: "During this stage, our team manages complete technical and administrative coordination between the society, developer, architects, and consultants. We ensure continuous quality control, material testing, and progress monitoring through regular site visits and monthly reports. Our active supervision ensures adherence to project timelines, design intent, and safety standards throughout construction.",
        },
        {
          phaseTitle: "Phase V – End of Construction Stage (Completion & Handover)",
          phaseDescription: "In the final stage, we ensure the timely acquisition of all statutory approvals and completion certificates from authorities. We supervise the preparation of as-built drawings, permanent utility connections, and obtain the Occupancy Certificate (OC/BCC). The project concludes with a detailed completion report and seamless handover to the society.",
        },
      ],
    },
    {
      icon: HardHat, // Reused icon (Repair related)
      title: "Repair Project Management Consultancy (PMC)",
      phases: [
        {
          phaseTitle: "Phase I – Inspection & Assessment",
          phaseDescription: "Our process begins with a comprehensive structural inspection of the existing building to assess its present condition. We identify structural defects, leakages, corrosion, and deterioration through visual surveys and non-destructive testing. A detailed condition assessment report is then prepared, outlining the required repair methodology and estimated costs for society approval.",
        },
        {
          phaseTitle: "Phase II – Estimation & Tendering",
          phaseDescription: "Once the scope of work is defined, we prepare a detailed cost estimate and bill of quantities (BOQ) based on the recommended repair techniques. We then draft tender documents and invite quotations from experienced and qualified contractors. After thorough technical and commercial evaluation, we present a comparative report to the society to help select the most suitable contractor.",
        },
        {
          phaseTitle: "Phase III – Contractor Finalization & Work Planning",
          phaseDescription: "After the contractor is finalized, we assist in preparing and executing the Work Order or Agreement with clearly defined terms, timelines, and quality standards. A detailed repair schedule and methodology is finalized in consultation with the society, contractor, and structural consultant. We ensure the repair plan aligns with the safety, budget, and convenience of society members.",
        },
        {
          phaseTitle: "Phase IV – Execution & Supervision",
          phaseDescription: "During execution, our project management team provides regular on-site supervision, ensuring that all repair work is carried out in line with the approved specifications and structural consultant’s directions. We monitor material quality, workmanship, and progress, issuing weekly reports and maintaining coordination between the contractor, society, and consultants to ensure timely and quality completion.",
        },
        {
          phaseTitle: "Phase V – Completion & Handover",
          phaseDescription: "Once all repair activities are completed, we conduct a final inspection to verify that the work meets the approved quality standards and safety parameters. We ensure final billing, documentation, and defect rectification, followed by submission of a completion certificate and a detailed final report to the society. This marks the successful and safe handover of the repaired building.",
        },
      ],
    },
    {
      icon: FileCheck, // Reused icon (Documentation related)
      title: "Revenue Works",
      phases: [
        {
          phaseTitle: "Phase I – Data Collection & Documentation",
          phaseDescription: "We begin with thorough collection and verification of land-related documents such as 7/12 extracts, property cards, mutation entries, survey plans, TILR maps, and title certificates. Our team ensures the accuracy and completeness of all records, identifying discrepancies and preparing a clear legal and technical base for further action.",
        },
        {
          phaseTitle: "Phase II – Survey & Demarcation",
          phaseDescription: "Our experts coordinate with Revenue and TILR departments to carry out land surveys, boundary verification, and demarcation in accordance with government norms. We ensure precise measurement and mapping of property boundaries using advanced survey methods, resolving any overlap or encroachment issues effectively.",
        },
        {
          phaseTitle: "Phase III – Liaison & Approvals",
          phaseDescription: "We handle end-to-end liaisoning with government authorities including the Talathi, Circle Officer, Tahsildar, and City Survey Office for updating and correcting revenue records. This includes facilitating mutation entries, subdivision or amalgamation of plots, and title correction or change of land use (NA conversion, if required), ensuring compliance with the Maharashtra Land Revenue Code.",
        },
        {
          phaseTitle: "Phase IV – Compliance & Verification",
          phaseDescription: "In this phase, we ensure that all revenue and ownership records are digitally updated and verified across official systems. Our team assists in obtaining updated 7/12 extracts, property cards, and certified survey maps, confirming that all changes are legally recognized and properly reflected in the government records.",
        },
        {
          phaseTitle: "Phase V – Final Reporting & Handover",
          phaseDescription: "Upon completion, we prepare a comprehensive project report including all updated documents, approvals, and compliance records. The final documentation ensures clear ownership, legal transparency, and readiness for redevelopment, sale, or future planning. The project concludes with complete handover of verified and authenticated land records to the client.",
        },
      ],
    },
    {
      icon: HardHat, // Reused icon (Structural related)
      title: "Structural Audit Consultancy (PMC)",
      phases: [
        {
          phaseTitle: "Phase I – Preliminary Inspection & Data Collection",
          phaseDescription: "We begin with a comprehensive visual inspection of the entire building structure to assess its overall condition, identify visible defects, and record signs of distress such as cracks, corrosion, leakages, or settlement. All architectural, RCC, and service drawings (if available) are collected and reviewed to understand the existing structural system before further testing.",
        },
        {
          phaseTitle: "Phase II – Non-Destructive Testing (NDT) & Investigation",
          phaseDescription: "Our team conducts non-destructive and semi-destructive tests using advanced equipment to evaluate the in-situ strength and health of structural components. Typical tests include rebound hammer, ultrasonic pulse velocity, carbonation depth, core cutting, rebar scanning, and chemical analysis of concrete. The collected data helps determine the extent of deterioration and load-bearing capacity of the structure.",
        },
        {
          phaseTitle: "Phase III – Structural Analysis & Assessment",
          phaseDescription: "Using the results of field inspection and NDT testing, we carry out detailed structural analysis to evaluate the building’s stability, safety, and residual life. The analysis identifies critical areas requiring strengthening or repair, and establishes whether the structure is fit for continued occupancy or needs urgent rehabilitation.",
        },
        {
          phaseTitle: "Phase IV – Reporting & Recommendations",
          phaseDescription: "After completing the assessment, we prepare a comprehensive Structural Audit Report as per Municipal and Government norms (e.g., VVCMC guidelines). The report includes observations, test results, analysis, photographs, and professional recommendations such as repair methods, retrofitting solutions, or reconstruction advice, depending on the building’s condition.",
        },
        {
          phaseTitle: "Phase V – Certification & Follow-up Support",
          phaseDescription: "Once the audit is complete, we issue a Structural Stability Certificate signed by our licensed structural engineer, certifying the building’s condition and safety status. We also assist societies and clients in implementing the recommended repair or strengthening measures, coordinating with contractors and consultants to ensure quality, safety, and compliance with local authority requirements.",
        },
      ],
    },
    {
      icon: Shield, // Reused icon (Society related)
      title: "Society Affairs Project Management Consultancy (PMC)",
      phases: [
        {
          phaseTitle: "Phase I – Documentation & Legal Review",
          phaseDescription: "We begin by assisting the housing society with document verification and legal compliance. This includes reviewing registration certificates, conveyance deeds, property cards, resolutions, and all relevant government records. Our team ensures the society’s documentation is updated and in order before undertaking any redevelopment, repair, or revenue-related activity.",
        },
        {
          phaseTitle: "Phase II – Member Coordination & Resolution Support",
          phaseDescription: "We guide the society in conducting General Body Meetings (AGM, SGBM) and help in drafting resolutions, notices, and circulars related to redevelopment, repair, or major financial decisions. Our experts ensure that every decision is made in accordance with the Maharashtra Cooperative Societies Act and DCPR guidelines, maintaining complete transparency and legal validity.",
        },
        {
          phaseTitle: "Phase III – Liaison & Government Compliance",
          phaseDescription: "Our team handles liaisoning with Cooperative Department, Registrar of Societies, and local municipal authorities to process necessary approvals, NOCs, and registrations. We assist in preparing official submissions, audit reports, and compliance statements, ensuring the society remains in good standing with all statutory bodies.",
        },
        {
          phaseTitle: "Phase IV – Financial & Administrative Management",
          phaseDescription: "We assist societies in preparing budget estimates, managing contractor payments, and maintaining project-related accounts. Our consultancy helps in proper allocation of maintenance funds, managing member contributions, and ensuring that all financial transactions comply with society bylaws and cooperative regulations.",
        },
        {
          phaseTitle: "Phase V – Dispute Resolution & Member Support",
          phaseDescription: "We provide expert guidance in resolving internal member disputes, communication gaps, or redevelopment-related concerns through lawful and cooperative means. Our team supports societies in maintaining harmony, transparency, and compliance throughout the process — ensuring smooth functioning and timely completion of all administrative and project activities.",
        },
      ],
    },
    {
      icon: Scale, // Reused icon (Legal related)
      title: "Legal Consultancy in Property Matters",
      phases: [
        {
          phaseTitle: "Phase I – Title Verification & Due Diligence",
          phaseDescription: "We begin with comprehensive title verification and legal due diligence of the property. Our experts examine all ownership documents, sale deeds, 7/12 extracts, property cards, mutation entries, and encumbrance certificates to confirm clear and marketable title. We identify any disputes, encroachments, or legal risks before any transaction or redevelopment activity.",
        },
        {
          phaseTitle: "Phase II – Documentation & Drafting",
          phaseDescription: "Our legal team prepares and reviews all necessary agreements, contracts, and legal documents including Sale Deeds, Development Agreements (DA), Power of Attorney, Permanent Alternate Accommodation Agreements (PAAA), Lease Deeds, and MOU drafts. Each document is carefully structured to safeguard our client’s interests and comply with Maharashtra property and cooperative housing laws.",
        },
        {
          phaseTitle: "Phase III – Liaison & Legal Coordination",
          phaseDescription: "We coordinate with advocates, solicitors, government departments, and municipal authorities to ensure smooth legal processing. This includes assistance with stamp duty registration, title clearance, mutation updates, non-agricultural (NA) conversion, and land record corrections. Our goal is to provide complete legal clarity and compliance throughout the project cycle.",
        },
        {
          phaseTitle: "Phase IV – Dispute Resolution & Litigation Support",
          phaseDescription: "We offer expert advice and representation in property-related disputes such as ownership conflicts, boundary issues, redevelopment disagreements, and cooperative housing matters. Our legal associates handle cases before Revenue Authorities, Cooperative Courts, Civil Courts, and the Registrar of Societies, ensuring timely and lawful resolution.",
        },
        {
          phaseTitle: "Phase V – Legal Advisory & Compliance Management",
          phaseDescription: "Our consultancy extends to ongoing legal advisory services, helping clients maintain compliance with local, state, and central laws governing property transactions, redevelopment, and construction. We provide continuous legal support to societies, builders, and individual clients to ensure their property dealings remain transparent, valid, and secure.",
        },
      ],
    },
  ];
  // ------------------------------------

  const recentProjects = [ // Kept this data as is
    { id: 1, title: "Luxury Residences", location: "Downtown District", image: project1, category: "Residential" },
    { id: 2, title: "Corporate Tower", location: "Business Hub", image: project2, category: "Commercial" },
    { id: 3, title: "Premium Villas", location: "Green Valley", image: project3, category: "Residential" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="h-screen w-full pt-20 flex items-center justify-center">
        <img
          src={heroImage}
          alt="Ekdant Associates - Active Projects"
          className="w-full h-full object-contain"
        />
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
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

      {/* --- Services Offered - UPDATED WITH ACCORDION --- */}
      <section ref={servicesRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-display font-bold mb-4 text-primary">
              Services Offered
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our Core Processes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over the new servicesData */}
            {servicesData.map((service, index) => (
              <Card
                key={index}
                className={`border-2 border-transparent hover:border-primary hover:scale-105
                            transition-opacity duration-700 ease-out
                            transition-transform duration-700 ease-out
                            hover:transition-transform hover:duration-300 hover:ease-in-out
                            hover:transition-colors hover:duration-300 hover:ease-in-out ${
                  servicesInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-6">
                  <service.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>

                  {/* Accordion for Phases */}
                  <Accordion type="single" collapsible className="w-full">
                    {service.phases.map((phase, phaseIndex) => (
                      <AccordionItem value={`item-${index}-${phaseIndex}`} key={phaseIndex}>
                        <AccordionTrigger className="text-sm font-semibold text-left">
                          {phase.phaseTitle}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground whitespace-pre-line">
                          {phase.phaseDescription}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>

                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* ------------------------------------ */}


      {/* Recent Projects */}
      <section ref={projectsRef} className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className={`text-center mb-12 transition-all duration-1000 ${
            projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-4xl font-display font-bold mb-4 text-primary">
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
                className={`overflow-hidden border-2 border-transparent hover:border-primary hover:scale-105
                            transition-opacity duration-700 ease-out
                            transition-transform duration-700 ease-out
                            hover:transition-transform hover:duration-300 hover:ease-in-out
                            hover:transition-colors hover:duration-300 hover:ease-in-out ${
                  projectsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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

