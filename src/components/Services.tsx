import React from 'react';
import { Cog, Precision, Factory, Settings } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "Mécanique grandes dimensions",
      description: "Usinage de pièces jusqu'à 40 tonnes avec une précision exceptionnelle",
      features: ["Capacité jusqu'à 40T", "Machines modernes", "Contrôle qualité rigoureux"]
    },
    {
      icon: <Precision className="w-8 h-8" />,
      title: "Mécanique de précision",
      description: "Fabrication de composants haute précision pour les industries exigeantes",
      features: ["Tolérances serrées", "Finitions parfaites", "Expertise technique"]
    },
    {
      icon: <Cog className="w-8 h-8" />,
      title: "Outillages spécialisés",
      description: "Conception et fabrication d'outillages sur mesure",
      features: ["Outillages de forge", "Galets de formage", "Outils de laminage"]
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Bureau d'étude",
      description: "Accompagnement de la conception à la réalisation",
      features: ["Étude technique", "Conception 3D", "Optimisation process"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une expertise complète au service de vos projets industriels les plus complexes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;