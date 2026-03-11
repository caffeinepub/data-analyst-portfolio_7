import { BarChart3, Github, Heart, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-md bg-primary flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display font-bold text-lg">
              Akhilesh Pratap Gautam
            </span>
          </div>

          {/* Tagline */}
          <p className="text-sm text-muted-foreground text-center">
            Built with passion for data
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {[
              {
                icon: Linkedin,
                href: "https://www.linkedin.com/in/akhilesh-pratap-gautam-633027250/",
                label: "LinkedIn",
              },
              {
                icon: Github,
                href: "https://github.com/akhiii88",
                label: "GitHub",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-background border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {year} Akhilesh Pratap Gautam. All rights reserved.</p>
          <a
            href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-foreground transition-colors"
          >
            Built with{" "}
            <Heart className="w-3 h-3 text-red-500 fill-red-500 mx-0.5" /> using
            caffeine.ai
          </a>
        </div>
      </div>
    </footer>
  );
}
