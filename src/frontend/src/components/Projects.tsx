import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { AnimatePresence, motion, useInView } from "motion/react";
import { useRef, useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Sales Performance Dashboard",
    problem:
      "Built interactive BI dashboards to analyze sales trends, customer segmentation, and revenue KPIs.",
    tools: ["Power BI", "SQL", "DAX"],
    insight:
      "Wrote optimized SQL queries for data extraction; applied DAX for KPI tracking and automated reporting workflows to support data-driven decision-making.",
    tags: ["Power BI", "SQL"],
    color: "from-blue-500/10 to-cyan-500/10",
    github: "https://github.com/akhiii88",
  },
  {
    id: 2,
    title: "Stock Price Analysis",
    problem:
      "Conducted exploratory and statistical analysis on financial time-series datasets to understand market behavior.",
    tools: ["Python", "Matplotlib", "Pandas"],
    insight:
      "Applied regression models and moving averages to identify volatility patterns and market trends; designed visual reports using Matplotlib.",
    tags: ["Python"],
    color: "from-violet-500/10 to-purple-500/10",
    github: "https://github.com/akhiii88",
  },
  {
    id: 3,
    title: "E-Commerce Customer Feedback Analysis",
    problem:
      "Examined customer feedback from an online marketplace to understand product satisfaction and buying experience.",
    tools: ["SQL", "Python", "Power BI"],
    insight:
      "Explored rating distributions, word frequencies in reviews, and category-wise trends; suggested data-driven improvements for product listings and customer engagement.",
    tags: ["Python", "SQL"],
    color: "from-emerald-500/10 to-teal-500/10",
    github: "https://github.com/akhiii88",
  },
];

const FILTERS = ["All", "Power BI", "Python", "SQL"];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            My work
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
            Real-world data challenges solved with analytics, SQL, and
            visualization.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {FILTERS.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              data-ocid="projects.filter.tab"
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                filter === f
                  ? "bg-primary text-primary-foreground shadow-card"
                  : "bg-background border border-border text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                data-ocid={`projects.item.${project.id}`}
                className="group relative bg-background rounded-2xl border border-border p-6 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
              >
                {/* Color accent */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                <div className="relative">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.tools.map((tool) => (
                      <Badge
                        key={tool}
                        variant="secondary"
                        className="text-xs font-medium"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>

                  <h3 className="font-display font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    <span className="font-medium text-foreground">
                      Overview:{" "}
                    </span>
                    {project.problem}
                  </p>

                  <div className="p-3 bg-primary/5 border border-primary/15 rounded-lg mb-4">
                    <p className="text-xs font-semibold text-primary mb-1">
                      Key Work
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {project.insight}
                    </p>
                  </div>

                  <div className="flex gap-2 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1.5 text-xs"
                      onClick={() => window.open(project.github, "_blank")}
                      data-ocid={`projects.item.${project.id}.button`}
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="gap-1.5 text-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
