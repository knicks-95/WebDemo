import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 pt-20 pb-20">
        <div className="text-center space-y-8 max-w-lg">
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl font-bold">
              <span className="gradient-text">Get in Touch</span>
            </h1>
            <p className="text-xl text-foreground/70">
              We'd love to hear from you. Let's start a conversation.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 space-y-4">
            <p className="text-foreground/60">
              Our Contact page is coming soon! We're preparing the best way to connect with us.
            </p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
            >
              <ArrowLeft size={20} />
              Back to Home
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
