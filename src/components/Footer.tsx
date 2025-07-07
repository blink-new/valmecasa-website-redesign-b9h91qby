import React from 'react';
import { Wrench, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <Wrench className="h-8 w-8 text-blue-400" />
              <div>
                <span className="text-xl font-bold">VALMECA</span>
                <span className="text-sm text-gray-400 ml-1">SA</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Spécialiste en usinage grande dimension et mécanique de précision depuis plus de 40 ans.
            </p>
            <div className="flex items-center text-sm text-gray-400">
              <span className="bg-green-500 w-2 h-2 rounded-full mr-2"></span>
              Certification ISO 9001:2008
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Mécanique grandes dimensions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Mécanique de précision
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Outillages spécialisés
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Bureau d'étude
                </a>
              </li>
            </ul>
          </div>

          {/* Amnéville */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Site d'Amnéville</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  BP 40009 - Rue de la Cimenterie<br />
                  57360 AMNÉVILLE
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <a href="tel:+33387674445" className="text-gray-400 hover:text-white transition-colors">
                  +33 (0)3 87 67 44 45
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:amneville@valmeca.fr" className="text-gray-400 hover:text-white transition-colors">
                  amneville@valmeca.fr
                </a>
              </div>
            </div>
          </div>

          {/* Vaucouleurs */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Site de Vaucouleurs</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  BP 37031 - Z.I. de Tusey<br />
                  55140 VAUCOULEURS
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <a href="tel:+33329892633" className="text-gray-400 hover:text-white transition-colors">
                  +33 (0)3 29 89 26 33
                </a>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
                <a href="mailto:vaucouleurs@valmecasa.fr" className="text-gray-400 hover:text-white transition-colors">
                  vaucouleurs@valmecasa.fr
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              © {currentYear} VALMECA SA. Tous droits réservés.
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Mentions légales
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Plan du site
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                Site par DSOFT
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;