import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CircuitTransition from "@/components/CircuitTransition";
import { ArrowRight, Code2, Zap, Shield, Smartphone, Cloud, Cpu, Mail, Phone, MapPin } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <CircuitTransition />
      <Header />

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                  <span className="block text-foreground mb-2">Innovative</span>
                  <span className="gradient-text">Tech Solutions</span>
                </h1>
              </div>

              <p className="text-xl text-foreground/70 leading-relaxed max-w-lg">
                Build powerful websites, scalable applications, and robust systems with cutting-edge technology. We deliver solutions that drive your business forward.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#contact"
                  className="px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                >
                  Get Started
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#services"
                  className="px-8 py-4 rounded-lg border border-primary/30 text-primary font-semibold hover:border-primary/60 hover:bg-primary/5 transition-all duration-300"
                >
                  Learn More
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-foreground/60">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-foreground/60">Happy Clients</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">15+</div>
                  <div className="text-sm text-foreground/60">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Hero Image */}
            <div className="relative h-96 lg:h-[500px] animate-float flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl animate-glow"></div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9fa53359f2814191829516c56789fa75%2F217579972e3b4bc59c548aed24fe6131?format=webp&width=800"
                alt="CPU and Circuit Board"
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary/30"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F9fa53359f2814191829516c56789fa75%2Fd8b78d75ed3243e59f5c604738af1742?format=webp&width=800"
                alt="MatchWave Labs Logo"
                className="absolute w-16 h-16 lg:w-20 lg:h-20 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group">
              <div className="p-8 rounded-xl border border-border bg-background/50 hover:bg-card transition-all duration-300 hover:-translate-y-2 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/20 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/40 transition-colors">
                  <Code2 className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Web Development</h3>
                <p className="text-foreground/60 mb-6">
                  Modern, responsive websites built with the latest technologies and best practices. We create stunning digital experiences.
                </p>
              </div>
            </div>

            {/* App Development */}
            <div className="group">
              <div className="p-8 rounded-xl border border-border bg-background/50 hover:bg-card transition-all duration-300 hover:-translate-y-2 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/20 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center mb-6 group-hover:from-secondary/40 transition-colors">
                  <Smartphone className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">App Development</h3>
                <p className="text-foreground/60 mb-6">
                  Native and cross-platform mobile applications for iOS, Android, and web. Performance and user experience first.
                </p>
              </div>
            </div>

            {/* Systems Design */}
            <div className="group">
              <div className="p-8 rounded-xl border border-border bg-background/50 hover:bg-card transition-all duration-300 hover:-translate-y-2 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/20 h-full">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center mb-6 group-hover:from-accent/40 transition-colors">
                  <Cpu className="text-accent" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Systems Design</h3>
                <p className="text-foreground/60 mb-6">
                  Scalable, secure, and efficient system architecture for enterprise needs. Built for growth and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-foreground">
            Why Choose <span className="gradient-text">MatchWave Labs?</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature 1 */}
            <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all">
              <Zap className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">Lightning Fast</h3>
              <p className="text-foreground/60 text-sm">
                Performance-optimized solutions that exceed industry standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-secondary/30 transition-all">
              <Shield className="text-secondary mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">Secure</h3>
              <p className="text-foreground/60 text-sm">
                Enterprise-grade security with encryption and compliance standards.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-accent/30 transition-all">
              <Cloud className="text-accent mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">Cloud Native</h3>
              <p className="text-foreground/60 text-sm">
                Scalable cloud infrastructure for growth and reliability.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-lg border border-border bg-card/50 hover:border-primary/30 transition-all">
              <Code2 className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-bold text-foreground mb-2">Clean Code</h3>
              <p className="text-foreground/60 text-sm">
                Maintainable, well-documented code following best practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              About <span className="gradient-text">MatchWave Labs</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Leading innovators in digital transformation and IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                At MatchWave Labs, we're passionate about delivering cutting-edge IT solutions that drive real business value. With over 15 years of experience, we've helped 100+ clients transform their digital presence and streamline their operations.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our team of expert developers, designers, and architects work collaboratively with clients to understand their unique challenges and deliver tailored solutions. We believe in transparent communication, agile methodologies, and continuous improvement.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span className="text-foreground">500+ Projects Successfully Delivered</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-secondary"></div>
                  <span className="text-foreground">100+ Satisfied Clients Worldwide</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span className="text-foreground">15+ Years Industry Experience</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border border-border bg-background/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <p className="text-foreground/60">Projects Completed</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background/50 text-center">
                <div className="text-3xl font-bold text-secondary mb-2">100+</div>
                <p className="text-foreground/60">Happy Clients</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background/50 text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <p className="text-foreground/60">Years in Business</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-background/50 text-center">
                <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                <p className="text-foreground/60">Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Ready to start your next project? Reach out to us today and let's discuss your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <div className="p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-all text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                  <Phone className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Phone</h3>
              <a href="tel:+27634515975" className="text-foreground/80 hover:text-primary transition-colors text-lg">
                +27 63 451 5975
              </a>
            </div>

            {/* Email */}
            <div className="p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-all text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                  <Mail className="text-secondary" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Email</h3>
              <a href="mailto:info@matchwavelabs.com" className="text-foreground/80 hover:text-secondary transition-colors text-lg">
                info@matchwavelabs.com
              </a>
            </div>

            {/* Location */}
            <div className="p-8 rounded-xl border border-border bg-card hover:bg-card/80 transition-all text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <MapPin className="text-accent" size={24} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Location</h3>
              <p className="text-foreground/80">
                South Africa
              </p>
            </div>
          </div>

          <div className="text-center">
            <a
              href="tel:+27634515975"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1"
            >
              Call Us Today
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
