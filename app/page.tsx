import About from "@/components/About";
import Hero from "@/components/Hero";
import Process from "@/components/Process";
import Work from "@/components/Work";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="min-h-screen size-full overflow-hidden bg-background">
      <Hero />
      <Process/>      
      <About />
      <Work />
    </main>
  );
}
