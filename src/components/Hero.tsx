import React from 'react';
import { ArrowRight, Shield, Clock, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900">
        <div className="absolute inset-0 bg-opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              VALMECA SA
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Spécialiste en usinage grande dimension et mécanique de précision
          </p>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Plus de 40 ans d'expertise au service de l'industrie. 
            De la conception à la réalisation, nous donnons vie à vos projets les plus exigeants.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">40+</h3>
            <p className="text-blue-200">Années d'expérience</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">40T</h3>
            <p className="text-blue-200">Capacité maximale</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-4">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">ISO 9001</h3>
            <p className="text-blue-200">Certification qualité</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200 group"
          >
            Découvrir nos services
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-slate-900 transition-all duration-200"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;