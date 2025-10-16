import React from "react";
// Lucide icons are used for visual elements
import { Activity, Network, BookOpen } from "lucide-react";
import PropTypes from 'prop-types'; // Recommended for React components

// --- Experience Card Component ---
const ExperienceCard = ({
  title,
  company,
  period,
  description,
  icon: Icon, // Destructuring with rename for the Lucide icon component
}) => (
  <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
    {/* Glass morphism effect background */}
    <div className="absolute inset-0 backdrop-blur-lg bg-white/5 rounded-lg" />

    {/* Animated gradient border on hover */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 animate-gradient-xy transition-all duration-500" />

    <div className="relative bg-gray-900/90 rounded-lg p-8 h-full border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Floating icon with pulse effect on hover */}
      <div className="relative mb-6">
        {/* Pulsing light source */}
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
        <Icon className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
      </div>

      {/* Content block */}
      <div className="space-y-3">
        {/* Gradient text for the title */}
        <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
          {title}
        </h3>
        
        <div className="flex justify-between items-center text-gray-300">
          <span className="font-semibold text-blue-400">{company}</span>
          {/* Period/Time span tag */}
          <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full">
            {period}
          </span>
        </div>
        
        {/* Description with subtle border emphasis */}
        <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 mt-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-4 right-4 w-20 h-20">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4 w-20 h-20">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

// Add PropTypes for validation
ExperienceCard.propTypes = {
    title: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    period: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
};

// --- Experience Section Main Component ---
const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Creative Explorer",
      company: "Personal Highlights",
      period: "2025",
      description:
        "Always curious, trying new things, and pushing personal limits. Loves challenges that spark imagination and self-growth.",
    },
    {
      icon: Activity,
      title: "Football & eSports Enthusiast",
      company: "Sports & Physical Achievements",
      period: "2025",
      description:
        "Played in local football tournaments and online gaming competitions. Combines teamwork, strategy, and quick decision-making skills.",
    },
    {
      icon: BookOpen,
      title: "Lifelong Learner",
      company: "Learning & Growth",
      period: "2025",
      description:
        "Constantly exploring new knowledge in tech, philosophy, and life skills. Completed courses, workshops, and self-driven projects to improve personally and professionally.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b relative overflow-hidden pt-32 pb-20">
        {/* Base dark background color */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid pattern background effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles (floating dots) */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                // Interpolate variables directly in the style object using template literals
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                // Adding a custom animation duration for variety
                animationDuration: `${5 + Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Life Achievements
              </h2>
              {/* Subtle light glow behind the title */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              "Celebrating milestones, skills, and experiences beyond just work"
            </p>
          </div>

          {/* Experience grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Large, slow-pulsing background blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000 pointer-events-none" />
      </div>

      {/* --- Custom CSS for Animations --- */}
      <style global jsx>{`
        /* Animation for the gradient border */
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 6s ease infinite;
        }

        /* Animation for the floating particles */
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-5px) translateX(5px) scale(0.95);
          }
          50% {
            transform: translateY(0) translateX(0) scale(1.05);
          }
          75% {
            transform: translateY(5px) translateX(-5px) scale(0.98);
          }
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
        }
        .animate-float {
          animation: float var(--animation-duration, 8s) ease-in-out infinite;
        }

        /* Animation for background blobs (using Tailwind's default pulse for simplicity) */
      `}</style>
    </>
  );
};

export default ExperienceSection;

