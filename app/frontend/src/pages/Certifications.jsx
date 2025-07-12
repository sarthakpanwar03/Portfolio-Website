import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Award, Calendar, GraduationCap, Trophy, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const Certifications = () => {
  const getCertificationIcon = (issuer) => {
    if (issuer.includes('IIT')) return <GraduationCap className="h-4 w-4 md:h-5 md:w-5" />;
    if (issuer.includes('CISCO')) return <Trophy className="h-4 w-4 md:h-5 md:w-5" />;
    if (issuer.includes('Manipal')) return <Award className="h-4 w-4 md:h-5 md:w-5" />;
    return <Award className="h-4 w-4 md:h-5 md:w-5" />;
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">

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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">CERTIFICATIONS</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-widest">PROFESSIONAL ACHIEVEMENTS</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {mockData.certifications.map((certification, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 md:p-3 bg-gray-800/50 text-gray-400">
                      {getCertificationIcon(certification.issuer)}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg md:text-xl font-light text-white mb-2 leading-tight tracking-wider">
                        {certification.title.toUpperCase()}
                      </CardTitle>
                      <p className="text-gray-400 font-light mb-2 tracking-wider text-sm md:text-base">{certification.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3 md:h-4 md:w-4 text-gray-500" />
                        <Badge variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                          {certification.date}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Certification Categories */}
          <div className="mb-12 md:mb-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white flex items-center gap-3 tracking-wider">
                  <Trophy className="h-5 w-5 md:h-6 md:w-6 text-gray-400" />
                  CERTIFICATION CATEGORIES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">ACADEMIC EXCELLENCE</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">Dean's List Recognition</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">TECHNICAL CERTIFICATIONS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">IIT SWAYAM, CISCO Networking</p>
                  </div>
                  <div className="text-center p-4 md:p-6 bg-gray-800/30 rounded-lg">
                    <h3 className="font-light text-sm md:text-lg mb-2 text-white tracking-wider">PROFESSIONAL SKILLS</h3>
                    <p className="text-xs md:text-sm text-gray-400 font-light">SAP, Database Management</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Skills Category */}
          <div className="mb-12 md:mb-16">
            <Card className="bg-gray-900/30 border-gray-800/50">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl font-light text-white tracking-wider">SKILLS ACQUIRED</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Database Management",
                    "Algorithm Design",
                    "Network Configuration",
                    "Routing & Switching",
                    "Wireless Technologies",
                    "SAP Systems",
                    "Academic Excellence",
                    "Problem Solving"
                  ].map((skill, index) => (
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

export default Certifications;