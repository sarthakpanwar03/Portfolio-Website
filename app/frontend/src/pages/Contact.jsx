import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Diamond, ArrowLeft } from "lucide-react";
import { mockData } from "../data/mockData";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: mockData.personalInfo.email,
      link: `mailto:${mockData.personalInfo.email}`,
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: mockData.personalInfo.phone,
      link: `tel:${mockData.personalInfo.phone}`,
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: mockData.personalInfo.location,
      link: null,
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      username: "sarthakpanwar03",
      link: mockData.personalInfo.github,
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      username: "sarthak-panwar",
      link: mockData.personalInfo.linkedin,
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1510754468059-2ed44e286946?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzl8MHwxfHNlYXJjaHwyfHxkYXJrJTIwbW91bnRhaW5zfGVufDB8fHxibGFja3wxNzUyMjA1MDcyfDA&ixlib=rb-4.1.0&q=85')"
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/90"></div>
      
      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Back Button */}
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-light tracking-widest">
              <ArrowLeft className="h-4 w-4 mr-2" />
              BACK TO HOME
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center">
              <div className="w-16 h-16 border-2 border-white rounded-full flex items-center justify-center">
                <Diamond className="h-6 w-6 text-white" />
              </div>
            </div>
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-px bg-white"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-light text-white mb-4 tracking-[0.3em]">CONTACT</h1>
            <p className="text-xl text-white/80 font-light tracking-widest">LET'S CONNECT AND EXPLORE OPPORTUNITIES TOGETHER</p>
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((item, index) => (
              <Card key={index} className="bg-gray-800/50 border-white/20 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-4 rounded-full bg-white/10 text-white mb-4">
                      {item.icon}
                    </div>
                    <h3 className="font-light text-white mb-2 tracking-widest">{item.label.toUpperCase()}</h3>
                    <p className="text-gray-300 mb-4 font-light">{item.value}</p>
                    {item.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(item.link, '_blank')}
                        className="border-white/30 text-white hover:text-gray-900 hover:bg-white transition-all duration-300 font-light tracking-widest"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        {item.label === 'Email' ? 'SEND EMAIL' : 'CALL NOW'}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <div className="mb-16">
            <h2 className="text-2xl font-light text-white mb-8 text-center tracking-[0.3em]">CONNECT WITH ME</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {socialLinks.map((social, index) => (
                <Card key={index} className="bg-gray-800/50 border-white/20 hover:bg-gray-800/70 transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white/10 text-white">
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-light text-white mb-1 tracking-widest">{social.label.toUpperCase()}</h3>
                        <p className="text-gray-300 mb-3 font-light">@{social.username}</p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(social.link, '_blank')}
                          className="border-white/30 text-white hover:text-gray-900 hover:bg-white transition-all duration-300 font-light tracking-widest"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          VISIT PROFILE
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <Card className="bg-gray-800/50 border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-light text-white text-center tracking-[0.3em]">READY TO COLLABORATE?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center">
                <p className="text-lg mb-8 text-gray-300 font-light leading-relaxed">
                  I'm currently seeking opportunities for growth through internships, research, or collaborative projects. 
                  Let's connect and explore how we can work together!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(`mailto:${mockData.personalInfo.email}`, '_blank')}
                    className="border-white/30 text-white hover:text-gray-900 hover:bg-white transition-all duration-300 font-light tracking-widest"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    SEND EMAIL
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => window.open(mockData.personalInfo.linkedin, '_blank')}
                    className="border-white/30 text-white hover:text-gray-900 hover:bg-white transition-all duration-300 font-light tracking-widest"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    CONNECT ON LINKEDIN
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;