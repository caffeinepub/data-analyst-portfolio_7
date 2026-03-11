import { Award, ExternalLink } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const CERTS = [
  {
    id: 1,
    name: "Google Data Analytics Professional Certificate",
    issuer: "Google / Coursera",
    category: "analytics",
    color: "from-blue-500/20 to-cyan-500/20",
    accent: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: 2,
    name: "IBM Data Analyst Professional Certificate",
    issuer: "IBM / Coursera",
    category: "analytics",
    color: "from-indigo-500/20 to-blue-500/20",
    accent: "text-indigo-400",
    bg: "bg-indigo-500/10",
  },
  {
    id: 3,
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Deloitte / Forage",
    category: "simulation",
    color: "from-green-500/20 to-emerald-500/20",
    accent: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
];

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="certifications" className="py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Credentials
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Certifications
          </h2>
          <p className="text-muted-foreground mt-3">
            Industry-recognized credentials validating expertise
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {CERTS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              data-ocid={`certs.item.${cert.id}`}
              className="group relative bg-background rounded-2xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative">
                <div
                  className={`w-12 h-12 rounded-xl ${cert.bg} flex items-center justify-center mb-4`}
                >
                  <Award className={`w-6 h-6 ${cert.accent}`} />
                </div>

                <h3 className="font-display font-bold text-base mb-1 leading-snug">
                  {cert.name}
                </h3>
                <p className={`text-sm font-medium ${cert.accent} mb-4`}>
                  {cert.issuer}
                </p>

                <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <ExternalLink className="w-3 h-3" />
                  View Credential
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
