import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import WorkExperience from '@/components/WorkExperience';
import FeaturedProjects from '@/components/FeaturedProjects';
import BlogPosts from '@/components/BlogPosts';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Spotlight } from '@/components/Spotlight';

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Global Fixed Spotlight — Visible during whole scroll, now at z-5 */}
      <Spotlight
        className="fixed -top-40 left-0 md:left-60 md:-top-20 z-[5] opacity-100"
        fill="white"
      />
      
      <div className="relative z-10 w-full min-h-screen">
        <Navbar />
        <Hero />
        <WorkExperience />
        <FeaturedProjects />
        <BlogPosts />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
