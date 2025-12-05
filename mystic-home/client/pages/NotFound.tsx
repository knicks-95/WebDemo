import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card flex flex-col">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 pt-20">
        <div className="text-center space-y-8 max-w-lg">
          <div className="space-y-2">
            <h1 className="text-7xl sm:text-8xl font-bold">
              <span className="gradient-text">404</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Page Not Found
            </h2>
          </div>

          <p className="text-xl text-foreground/70">
            Sorry, the page you're looking for doesn't exist. Let's get you back to building something great.
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/40 transition-all duration-300"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
