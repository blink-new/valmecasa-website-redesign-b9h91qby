import React from 'react';
import { MapPin, Phone, Mail, Truck } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      location: "Amnéville",
      type: "Mécanique grandes dimensions",
      capacity: "Ensemble 40 Tonnes unitaire",
      speciality: "Matériels pour laminoirs et coulée continue",
      address: "BP 40009 - Rue de la Cimenterie",
      postal: "57360 AMNÉVILLE",
      phone: "+33 (0)3 87 67 44 45",
      fax: "+33 (0)3 87 58 23 59",
      email: "amneville@valmeca.fr"
    },
    {
      location: "Vaucouleurs",
      type: "Mécanique de précision",
      capacity: "Laminage - Tuberie - Profilage",
      speciality: "Matériels pour tuberie & profilage",
      address: "BP 37031 - Z.I. de Tusey",
      postal: "55140 VAUCOULEURS",
      phone: "+33 (0)3 29 89 26 33",
      fax: "+33 (0)3 29 89 50 00",
      email: "vaucouleurs@valmecasa.fr"
    }
  ];

  return (
    <section id="facilities" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Installations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deux sites de production modernes équipés des dernières technologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {facilities.map((facility, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-2" />
                  <h3 className="text-2xl font-bold">{facility.location}</h3>
                </div>
                <p className="text-blue-100 text-lg">{facility.type}</p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Truck className="w-5 h-5 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Capacité</h4>
                      <p className="text-gray-600">{facility.capacity}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-5 h-5 bg-blue-600 rounded-full mr-3 mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Spécialité</h4>
                      <p className="text-gray-600">{facility.speciality}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Coordonnées</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700">{facility.address}</p>
                        <p className="text-gray-700">{facility.postal}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                      <p className="text-gray-700">{facility.phone}</p>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                      <a href={`mailto:${facility.email}`} className="text-blue-600 hover:text-blue-700">
                        {facility.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Parc Machines Moderne
            </h3>
            <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
              Nos installations sont équipées de machines modernes de grandes capacités : 
              de quelques kg à 40 tonnes, de 3 à 7 axes dont 5 axes continus.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">40T</div>
                <p className="text-gray-600">Capacité maximale</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
                <p className="text-gray-600">Axes maximum</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-600">Axes continus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;