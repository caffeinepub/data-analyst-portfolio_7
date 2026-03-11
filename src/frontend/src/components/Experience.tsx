import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const EXPERIENCES = [
  {
    id: 1,
    role: "Data Science Intern",
    company: "Evostra Ventures",
    duration: "Feb 2026 – Present",
    period: "Ongoing",
    location: "India",
    contributions: [
      "Working on real-world data science problems using Python and Machine Learning",
      "Building and analyzing datasets to generate actionable business insights",
      "Applying data preprocessing, EDA, and model building techniques",
    ],
    tools: ["Python", "Machine Learning", "SQL", "Power BI"],
    color: "bg-primary",
  },
  {
    id: 2,
    role: "Business Analyst Intern",
    company: "CareerPhi",
    duration: "Sep 2025 – Nov 2025",
    period: "3 months",
    location: "India",
    contributions: [
      "Analyzed business data to identify trends and support decision-making",
      "Prepared reports and dashboards to track key performance indicators",
      "Collaborated with teams to translate data insights into business strategies",
    ],
    tools: ["Excel", "SQL", "Power BI"],
    color: "bg-chart-2",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Career journey
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Experience
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-0.5" />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              data-ocid={`experience.item.${exp.id}`}
              className={`relative flex items-start gap-6 mb-12 md:w-1/2 ${
                i % 2 === 0
                  ? "md:ml-auto md:pl-10"
                  : "md:pr-10 md:text-right md:flex-row-reverse"
              } pl-16 md:pl-0`}
            >
              <div
                className={`absolute left-4 md:left-auto ${
                  i % 2 === 0 ? "md:-left-5" : "md:-right-5"
                } top-4 w-4 h-4 rounded-full border-2 border-background ${exp.color} z-10 shadow-sm`}
              />

              <div className="flex-1 bg-card border border-border rounded-2xl p-6 shadow-xs hover:shadow-card transition-shadow">
                <div
                  className={`flex flex-wrap gap-2 mb-3 ${i % 2 !== 0 ? "md:justify-end" : ""}`}
                >
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <MapPin className="w-3 h-3" />
                    {exp.location}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg">{exp.role}</h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {exp.company}
                </p>

                <ul className="space-y-1.5 mb-4">
                  {exp.contributions.map((c) => (
                    <li
                      key={c}
                      className={`text-sm text-muted-foreground flex gap-2 ${i % 2 !== 0 ? "md:justify-end" : ""}`}
                    >
                      <span className="text-primary mt-1">›</span>
                      {c}
                    </li>
                  ))}
                </ul>

                <div
                  className={`flex flex-wrap gap-1.5 ${i % 2 !== 0 ? "md:justify-end" : ""}`}
                >
                  {exp.tools.map((tool) => (
                    <Badge key={tool} variant="secondary" className="text-xs">
                      {tool}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
