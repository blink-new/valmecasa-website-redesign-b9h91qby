import React from 'react';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certification ISO 9001",
      description: "Notre engagement qualité est reconnu et régulièrement audité selon la norme ISO 9001:2008"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expertise Technique",
      description: "Plus de 40 ans d'expérience dans l'usinage de pièces de petites, moyennes et grandes dimensions"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Approche Processus",
      description: "Orientation client et amélioration continue au cœur de notre démarche qualité"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Innovation Continue",
      description: "Investissement constant dans les technologies et les compétences pour rester à la pointe"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Engagement
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Le sérieux et l'engagement de VALMECA SA est récompensé par la certification norme ISO 9001, 
              et vous garantit ainsi la qualité des services et produits apportés.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Certification ISO 9001:2008
                  </h3>
                  <p className="text-gray-600">
                    Validée le 03-04-2015, notre certification témoigne de notre engagement 
                    pour la qualité et la satisfaction client.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Approche Processus
                  </h3>
                  <p className="text-gray-600">
                    Notre démarche s'appuie sur l'orientation client, l'approche processus 
                    et l'amélioration continue.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg mb-4 text-white">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Forte d'une expérience de plus de 40 ans
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Dans l'usinage de pièces de petites, moyennes et grandes dimensions, 
            nous disposons d'un parc machines important équipé des dernières technologies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">40+</div>
              <p className="text-gray-300">Années d'expérience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">2</div>
              <p className="text-gray-300">Sites de production</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
              <p className="text-gray-300">Secteurs industriels</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">40T</div>
              <p className="text-gray-300">Capacité maximale</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;