import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Code, Database, Monitor, Wrench, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const TechnicalSkills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-5 w-5 md:h-6 md:w-6" />,
      skills: mockData.technicalSkills.programmingLanguages,
    },
    {
      title: "Database Systems",
      icon: <Database className="h-5 w-5 md:h-6 md:w-6" />,
      skills: mockData.technicalSkills.databaseSystems,
    },
    {
      title: "Operating Systems",
      icon: <Monitor className="h-5 w-5 md:h-6 md:w-6" />,
      skills: mockData.technicalSkills.operatingSystems,
    },
    {
      title: "Tools & Technologies",
      icon: <Wrench className="h-5 w-5 md:h-6 md:w-6" />,
      skills: mockData.technicalSkills.toolsAndTechnologies,
    }
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black"></div>
      
      <div className="relative z-10 py-8 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-6 md:mb-8">
            <Link to="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors font-light tracking-widest text-sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              BACK TO HOME
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-white text-black flex items-center justify-center text-lg md:text-xl font-light tracking-wider">
                SP
              </div>
            </div>
            <div className="mb-6 md:mb-8 flex justify-center">
              <div className="w-16 md:w-24 h-px bg-white/30"></div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">TECHNICAL SKILLS</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-widest">TECHNOLOGIES & TOOLS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-lg md:text-xl font-light text-white tracking-wider">
                    <div className="p-2 md:p-3 bg-gray-800/50 text-gray-400">
                      {category.icon}
                    </div>
                    <span className="text-sm md:text-lg">{category.title.toUpperCase()}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="outline" 
                        className="border-gray-700 text-gray-400 hover:text-white hover:border-gray-500 transition-colors font-light text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Proficiency Level Section */}
          <div className="mb-12 md:mb-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white tracking-wider">PROFICIENCY HIGHLIGHTS</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">FRONTEND DEVELOPMENT</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">ReactJS, HTML, CSS, JavaScript</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">BACKEND DEVELOPMENT</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Python, C++, Database Management</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">DEVELOPMENT TOOLS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Git, GitHub, Figma, LaTeX</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalSkills;