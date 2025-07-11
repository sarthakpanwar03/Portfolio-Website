import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Github, ExternalLink, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const Projects = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Subtle Dark Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-black"></div>
      
      <div className="relative z-10 py-8 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
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
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">PROJECTS</h1>
            <p className="text-sm md:text-lg lg:text-xl text-gray-400 font-light tracking-widest">FEATURED WORK AND INNOVATIONS</p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            {mockData.projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg md:text-xl font-light text-white tracking-wider">
                    {project.title.toUpperCase()}
                  </CardTitle>
                  <CardDescription className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="border-gray-700 text-gray-400 font-light text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-wider text-xs md:text-sm"
                    onClick={() => window.open(project.githubLink, '_blank')}
                  >
                    <Github className="mr-2 h-4 w-4" />
                    VIEW ON GITHUB
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Research Papers Section */}
          <div className="mb-12 md:mb-16">
            <div className="text-center mb-8 md:mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-2 md:mb-4 tracking-[0.2em]">RESEARCH PAPERS</h2>
              <div className="flex justify-center">
                <div className="w-12 md:w-16 h-px bg-white/30"></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {mockData.researchPapers.map((paper, index) => (
                <Card key={index} className="bg-gray-900/30 border-gray-800/50 hover:bg-gray-900/50 transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-light text-white tracking-wider leading-tight">
                      {paper.title.toUpperCase()}
                    </CardTitle>
                    <CardDescription className="text-gray-400 font-light leading-relaxed text-sm md:text-base">
                      {paper.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3 mb-4 md:mb-6">
                      <Badge variant={paper.status === 'Published' ? 'default' : 'secondary'} className="font-light bg-gray-800 text-gray-300 text-xs">
                        {paper.status.toUpperCase()}
                      </Badge>
                      <span className="text-xs md:text-sm text-gray-400 font-light">{paper.year}</span>
                    </div>
                    {paper.link && (
                      <Button
                        variant="outline"
                        className="w-full border-gray-700 text-gray-400 hover:text-white hover:bg-gray-900/20 transition-all duration-300 font-light tracking-wider text-xs md:text-sm"
                        onClick={() => window.open(paper.link, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        READ PAPER
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;