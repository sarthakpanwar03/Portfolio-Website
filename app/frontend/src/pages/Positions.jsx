import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Users, Award, Calendar, Star, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const Positions = () => {
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">LEADERSHIP</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-widest">POSITIONS OF RESPONSIBILITY</p>
          </div>

          <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
            {mockData.positionsOfResponsibility.map((position, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl md:text-2xl font-light text-white mb-2 tracking-wider">
                        {position.role.toUpperCase()}
                      </CardTitle>
                      <div className="flex items-center gap-2 text-gray-400 mb-2">
                        <Users className="h-4 w-4" />
                        <span className="font-light tracking-wider text-sm md:text-base">{position.organization}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      <Badge variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                        {position.year}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Star className="h-4 w-4 md:h-5 md:w-5 text-gray-400 mt-0.5" />
                      <p className="text-gray-400 leading-relaxed font-light text-sm md:text-base">{position.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Leadership Skills Section */}
          <div className="mb-12 md:mb-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white flex items-center gap-3 tracking-wider">
                  <Award className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
                  LEADERSHIP SKILLS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Event Organization",
                    "Team Leadership",
                    "Project Management",
                    "Sponsorship Management",
                    "Marketing Strategy",
                    "Cross-functional Collaboration",
                    "Strategic Planning",
                    "Community Building"
                  ].map((skill, index) => (
                    <Badge key={index} variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Events Organized Section */}
          <div className="mb-12 md:mb-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white tracking-wider">MAJOR EVENTS ORGANIZED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="bg-gray-800/30 rounded-lg p-4 md:p-6">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">TECHNICAL EVENTS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Sigfest, Autobots, Velocity, Devcon</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 md:p-6">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">CAREER EVENTS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Job Junction, Elicit</p>
                  </div>
                  <div className="bg-gray-800/30 rounded-lg p-4 md:p-6">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">COMMUNITY EVENTS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Under25, Snap Shots</p>
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

export default Positions;