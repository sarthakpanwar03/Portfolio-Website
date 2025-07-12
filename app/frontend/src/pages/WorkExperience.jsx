import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Building, Calendar, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const WorkExperience = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black"></div>
      
      <div className="relative z-10 py-8 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">WORK EXPERIENCE</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-widest">PROFESSIONAL JOURNEY</p>
          </div>

          <div className="space-y-6 md:space-y-8">
            {mockData.workExperience.map((experience, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-light text-white mb-2 tracking-wider">
                        {experience.title.toUpperCase()}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Building className="h-4 w-4" />
                        <span className="font-light tracking-wider text-sm md:text-base">{experience.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <Badge variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                        {experience.duration}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <h4 className="font-light text-white mb-3 md:mb-4 tracking-wider text-sm md:text-base">KEY RESPONSIBILITIES:</h4>
                    <ul className="space-y-2 md:space-y-3">
                      {experience.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-1.5 h-1.5 bg-white rounded-full mt-2"></span>
                          <span className="text-gray-400 font-light leading-relaxed text-sm md:text-base">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills learned section */}
          <div className="mt-12 md:mt-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white tracking-wider">SKILLS DEVELOPED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {["HTML", "CSS", "JavaScript", "ReactJS", "Tailwind CSS", "Git", "Version Control", "Team Collaboration", "Performance Optimization", "Debugging"].map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;