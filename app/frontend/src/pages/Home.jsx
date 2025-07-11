import React from "react";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { mockData } from "../data/mockData";

const Home = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Dark Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black"></div>
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8">
        
        {/* Minimalistic SP Logo */}
        <div className="mb-12">
          <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
            <div className="w-full h-full bg-white text-black flex items-center justify-center text-2xl md:text-3xl font-light tracking-wider">
              SP
            </div>
          </div>
        </div>
        
        {/* Minimal Line */}
        <div className="w-32 md:w-48 h-px bg-white/30 mb-12 md:mb-16"></div>
        
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-4 md:mb-6 tracking-[0.2em] text-center">
          SARTHAK PANWAR
        </h1>
        
        {/* Subtitle */}
        <p className="text-sm md:text-lg lg:text-xl text-gray-300 mb-2 font-light tracking-widest text-center max-w-3xl">
          COMPUTER ENGINEERING STUDENT WITH PASSION FOR INNOVATION
        </p>
        
        {/* Professional Tags */}
        <div className="text-xs md:text-sm lg:text-base text-gray-400 mb-8 md:mb-12 font-light tracking-widest text-center">
          SOFTWARE DEVELOPER | AI/ML ENTHUSIAST | RESEARCHER
        </div>
        
        {/* Minimalistic About Section */}
        <div className="max-w-2xl lg:max-w-4xl mx-auto text-center mb-8 md:mb-12 px-4">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 p-6 md:p-8 rounded-lg">
            <h2 className="text-lg md:text-xl font-light text-white mb-4 md:mb-6 tracking-wider">ABOUT</h2>
            <div className="text-gray-400 leading-relaxed space-y-3 md:space-y-4 text-sm md:text-base">
              <p className="font-light">
                Fourth-year Computer and Communication Engineering student at Manipal University Jaipur, specializing in software development, iOS development, and AI/ML with focus on deep learning and neural networks.
              </p>
              <p className="font-light">
                Passionate about building impactful solutions and exploring emerging technologies. Strong interest in business strategy and fintech innovation.
              </p>
              <p className="font-light">
                Seeking opportunities for growth through internships, research, or collaborative projects with innovative tech teams.
              </p>
            </div>
          </div>
        </div>
        
        {/* Portfolio Link */}
        <div className="text-xs md:text-sm text-white/60 mb-4 font-light tracking-widest text-center">
          EXPLORE PORTFOLIO
        </div>
        
        <div className="flex items-center gap-4 md:gap-6 mb-12 md:mb-16">
          <a
            href={`mailto:${mockData.personalInfo.email}`}
            className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            title="Email"
          >
            <Mail className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a
            href={`tel:${mockData.personalInfo.phone}`}
            className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            title="Phone"
          >
            <Phone className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a
            href={mockData.personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            title="GitHub"
          >
            <Github className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <a
            href={mockData.personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 flex items-center justify-center text-gray-400 hover:text-white hover:border-white transition-all duration-300"
            title="LinkedIn"
          >
            <Linkedin className="h-4 w-4 md:h-5 md:w-5" />
          </a>
          <div
            className="w-10 h-10 md:w-12 md:h-12 border border-gray-600 flex items-center justify-center text-gray-400"
            title="New Delhi, India"
          >
            <MapPin className="h-4 w-4 md:h-5 md:w-5" />
          </div>
        </div>
        
        {/* Minimal Line */}
        <div className="w-32 md:w-48 h-px bg-white/30 mb-8 md:mb-12"></div>
        
        {/* Minimalistic Navigation Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-0 w-full max-w-sm sm:max-w-2xl lg:max-w-4xl">
          <Link
            to="/projects"
            className="border border-gray-700/50 py-4 md:py-6 px-4 md:px-8 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-widest text-xs md:text-sm text-center"
          >
            PROJECTS
          </Link>
          <Link
            to="/work-experience"
            className="border border-gray-700/50 py-4 md:py-6 px-4 md:px-8 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-widest text-xs md:text-sm text-center"
          >
            EXPERIENCE
          </Link>
          <Link
            to="/technical-skills"
            className="border border-gray-700/50 py-4 md:py-6 px-4 md:px-8 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-widest text-xs md:text-sm text-center"
          >
            SKILLS
          </Link>
          <Link
            to="/positions"
            className="border border-gray-700/50 py-4 md:py-6 px-4 md:px-8 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-widest text-xs md:text-sm text-center"
          >
            LEADERSHIP
          </Link>
          <Link
            to="/certifications"
            className="border border-gray-700/50 py-4 md:py-6 px-4 md:px-8 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-widest text-xs md:text-sm text-center"
          >
            CERTIFICATIONS
          </Link>
        </div>
        
        {/* Minimal Footer */}
        <div className="mt-8 md:mt-16 text-xs text-gray-600 font-light tracking-wider text-center">
          © 2024 SARTHAKPANWAR.
        </div>
      </div>
    </div>
  );
};

export default Home;