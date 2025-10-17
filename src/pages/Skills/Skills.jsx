import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  Code2,
  Database,
  Users,
  Brain,
  Layers3,
  Monitor,
  HeartHandshake,
  MessageSquare,
  GitBranch,
  Search,
  Bike,
  Activity,
  Lightbulb,
  Target,
  Rss,
  Shield,
  Terminal,
  FireExtinguisher,
  SquareCode,
  Sparkles,
  GripHorizontal,
  Palette,
  PenTool,
  Smile,
  GraduationCap,
  Footprints,
  Gamepad2,
  Computer,
  Layout,
} from "lucide-react";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <Card className="group relative overflow-hidden bg-gray-900/80 border-gray-700 hover:scale-[1.02] transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/20">
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(100,100,255,0.1)] to-transparent group-hover:via-[rgba(100,100,255,0.2)] animate-shimmer"></div>
    <CardContent className="p-6 relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div
          className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 transition-transform duration-300`}
        >
          <Icon className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge
            key={index}
            variant="outline"
            className="group/badge relative bg-gray-800/50 hover:bg-gray-700/80 text-gray-100 border-gray-600 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
          >
            <span className="transform group-hover/badge:scale-110 transition-transform duration-300">
              {skill.icon}
            </span>
            <span className="font-medium">{skill.name}</span>
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming & Development",
      color: "text-blue-400",
      skills: [
        { name: "HTML", icon: <SquareCode className="w-4 h-4 text-[#E34F26]" /> },
        { name: "CSS", icon: <Layout className="w-4 h-4 text-[#1572B6]" /> },
        { name: "Javascript", icon: <Sparkles className="w-4 h-4 text-[#F7DF1E]" /> },
        { name: "C++", icon: <GripHorizontal className="w-4 h-4 text-[#00599C]" /> },
        { name: "PHP", icon: <GripHorizontal className="w-4 h-4 text-[#777BB4]" /> },
        { name: "OOP", icon: <Layers3 className="w-4 h-4 text-[#9CA3AF]" /> },
      ],
    },
    {
      icon: Database,
      title: "Tools & Platform",
      color: "text-green-400",
      skills: [
        { name: "VS Code", icon: <Computer className="w-4 h-4 text-[#007ACC]" /> },
        { name: "Canva", icon: <Palette className="w-4 h-4 text-[#00C4CC]" /> },
        { name: "Figma", icon: <PenTool className="w-4 h-4 text-[#F24E1E]" /> },
        { name: "Command line", icon: <Terminal className="w-4 h-4 text-[#A8A8A8]" /> },
        { name: "Git & Github", icon: <GitBranch className="w-4 h-4 text-white" /> },
        { name: "Firebase", icon: <FireExtinguisher className="w-4 h-4 text-[#FFCA28]" /> },
      ],
    },
    {
      icon: Activity,
      title: "Sports & Physical Activity",
      color: "text-red-400",
      skills: [
        { name: "Esports", icon: <Monitor className="w-4 h-4 text-[#5BC0DE]" /> },
        { name: "Football", icon: <Footprints className="w-4 h-4 text-[#60A5FA]" /> },
        { name: "Online games", icon: <Gamepad2 className="w-4 h-4 text-[#EC4899]" /> },
        { name: "Badminton", icon: <Shield className="w-4 h-4 text-[#FBBF24]" /> },
        { name: "Cycling", icon: <Bike className="w-4 h-4 text-[#10B981]" /> },
      ],
    },
    {
      icon: Brain,
      title: "Mindset & Thinking",
      color: "text-purple-400",
      skills: [
        { name: "Problem Solving", icon: <Target className="w-4 h-4 text-[#9CA3AF]" /> },
        { name: "Logical thinking", icon: <Lightbulb className="w-4 h-4 text-[#F59E0B]" /> },
        { name: "Curiosity", icon: <Rss className="w-4 h-4 text-[#4ADE80]" /> },
        { name: "Observation", icon: <Search className="w-4 h-4 text-[#38B2AC]" /> },
        { name: "Researching", icon: <GraduationCap className="w-4 h-4 text-[#60A5FA]" /> },
      ],
    },
    {
      icon: Users,
      title: "Personality & Social",
      color: "text-yellow-400",
      skills: [
        { name: "Teamwork", icon: <Users className="w-4 h-4 text-[#FBBF24]" /> },
        { name: "Communication", icon: <MessageSquare className="w-4 h-4 text-[#34D399]" /> },
        { name: "Humor", icon: <Smile className="w-4 h-4 text-[#EC4899]" /> },
        { name: "Empathy", icon: <HeartHandshake className="w-4 h-4 text-[#F87171]" /> },
        { name: "Patience", icon: <Shield className="w-4 h-4 text-[#60A5FA]" /> },
      ],
    },
  ];

  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-[#04081A] relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
