import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContact } from "../hooks/useQueries";

const CONTACT_LINKS = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/alexjohnson",
    href: "#",
    color: "bg-blue-600/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    value: "alex.johnson@email.com",
    href: "mailto:alex.johnson@email.com",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/alexjohnson",
    href: "#",
    color: "bg-foreground/10 text-foreground",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { mutate: submitContact, isPending } = useSubmitContact();

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    submitContact(form, {
      onSuccess: () => {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Failed to send message. Please try again.");
      },
    });
  };

  return (
    <section id="contact" className="py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">
            Get in touch
          </p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold">
            Let's Connect
          </h2>
          <p className="text-muted-foreground mt-3 max-w-md mx-auto">
            Open to data analyst roles, freelance projects, and collaboration
            opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <h3 className="font-display font-bold text-xl mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {CONTACT_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:shadow-card hover:-translate-y-0.5 transition-all duration-200"
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center ${link.color}`}
                  >
                    <link.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{link.label}</p>
                    <p className="text-xs text-muted-foreground">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
              <p className="font-display font-semibold mb-2">
                Open to opportunities
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Currently seeking full-time Data Analyst positions. Also
                available for freelance data projects and consulting. Response
                time: within 24 hours.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.25 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-2xl p-8 shadow-card"
            >
              <h3 className="font-display font-bold text-xl mb-6">
                Send a Message
              </h3>

              <div className="space-y-4">
                <div>
                  <Label
                    htmlFor="name"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, name: e.target.value }))
                    }
                    data-ocid="contact.input"
                    className="bg-background"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="email"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, email: e.target.value }))
                    }
                    data-ocid="contact.email_input"
                    className="bg-background"
                  />
                </div>

                <div>
                  <Label
                    htmlFor="message"
                    className="text-sm font-medium mb-1.5 block"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    value={form.message}
                    onChange={(e) =>
                      setForm((p) => ({ ...p, message: e.target.value }))
                    }
                    data-ocid="contact.textarea"
                    rows={5}
                    className="bg-background resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2 font-semibold"
                  disabled={isPending}
                  data-ocid="contact.submit_button"
                >
                  {isPending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
