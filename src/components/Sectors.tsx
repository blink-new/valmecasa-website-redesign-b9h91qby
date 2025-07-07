import React from 'react';
import { Building, Zap, Plane, Factory, Atom } from 'lucide-react';

const Sectors = () => {
  const sectors = [
    {
      icon: <Building className="w-12 h-12" />,
      title: "Sidérurgie",
      description: "Équipements pour l'industrie sidérurgique : rouleaux de laminoir, coulée continue",
      color: "bg-orange-500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Énergie Hydraulique",
      description: "Composants pour centrales hydrauliques, turbines et infrastructures énergétiques",
      color: "bg-blue-500"
    },
    {
      icon: <Plane className="w-12 h-12" />,
      title: "Aéronautique",
      description: "Outillages et composants de précision pour l'industrie aéronautique",
      color: "bg-sky-500"
    },
    {
      icon: <Factory className="w-12 h-12" />,
      title: "Métallurgie",
      description: "Solutions complètes pour les processus métallurgiques et de transformation",
      color: "bg-gray-600"
    },
    {
      icon: <Atom className="w-12 h-12" />,
      title: "Énergie Nucléaire",
      description: "Composants haute sécurité pour l'industrie nucléaire civile",
      color: "bg-green-600"
    }
  ];

  return (
    <section id="sectors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Secteurs d'Activité
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Notre expertise s'étend à de nombreux secteurs industriels stratégiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="group cursor-pointer"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className={`inline-flex items-center justify-center w-20 h-20 ${sector.color} rounded-2xl mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {sector.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {sector.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {sector.description}
                </p>
                
                <div className="mt-6 flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>En savoir plus</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Un projet spécifique ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour étudier vos besoins
              et vous proposer des solutions sur mesure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Discuter de votre projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;