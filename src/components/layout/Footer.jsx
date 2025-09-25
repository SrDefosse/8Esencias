import React from 'react';
import { Link } from 'react-router-dom';
import { FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#AC8658]/20 via-transparent to-neutral-900"></div>
      
      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-1 md:col-span-2">
              <div className="mb-6">
                <Link to="/" className="inline-block">
                  <img 
                    src="/logos/logo_8esencias_white.png" 
                    alt="8 Esencias" 
                    className="h-16 w-auto"
                  />
                </Link>
              </div>
              <p className="text-neutral-300 mb-6 text-sm leading-relaxed">
                Tradición familiar en la elaboración de mezcal artesanal mexicano. 
                Cada botella cuenta la historia de generaciones de maestros mezcaleros.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <SocialLink href="https://instagram.com" icon={<FiInstagram />} label="Instagram" />
                <SocialLink href="https://facebook.com" icon={<FiFacebook />} label="Facebook" />
                <SocialLink href="https://twitter.com" icon={<FiTwitter />} label="Twitter" />
                <SocialLink href="https://youtube.com" icon={<FiYoutube />} label="YouTube" />
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#AC8658]">Links Rápidos</h3>
              <ul className="space-y-3">
                <FooterLink to="/" text="Inicio" />
                <FooterLink to="/about" text="Nosotros" />
                <FooterLink to="/mezcal" text="Mezcal" />
                <FooterLink to="/process" text="Proceso" />
                <FooterLink to="/where-to-buy" text="Dónde Comprar" />
                <FooterLink to="/contact" text="Contacto" />
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-[#AC8658]">Contacto</h3>
              <div className="space-y-4">
                <ContactItem 
                  icon={<FiMapPin />}
                  text="Oaxaca, México"
                />
                <ContactItem 
                  icon={<FiPhone />}
                  text="+52 951 123 4567"
                  href="tel:+529511234567"
                />
                <ContactItem 
                  icon={<FiMail />}
                  text="info@8esencias.com"
                  href="mailto:info@8esencias.com"
                />
              </div>

            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-neutral-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-sm text-neutral-400">
                © 2024 8 Esencias. Todos los derechos reservados.
              </div>
              <div className="flex space-x-6 text-sm text-neutral-400">
                <Link to="/privacy" className="hover:text-[#AC8658] transition-colors duration-200">
                  Política de Privacidad
                </Link>
                <Link to="/terms" className="hover:text-[#AC8658] transition-colors duration-200">
                  Términos de Uso
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Component for footer links
const FooterLink = ({ to, text }) => (
  <li>
    <Link 
      to={to} 
      className="text-neutral-300 hover:text-[#AC8658] transition-colors duration-200 text-sm"
    >
      {text}
    </Link>
  </li>
);

// Component for social media links
const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 bg-neutral-800 hover:bg-[#AC8658] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
    aria-label={label}
  >
    <span className="text-neutral-300 group-hover:text-white transition-colors duration-200">
      {icon}
    </span>
  </a>
);

// Component for contact information
const ContactItem = ({ icon, text, href }) => {
  const content = (
    <div className="flex items-center space-x-3 text-sm">
      <div className="text-[#AC8658] flex-shrink-0">
        {icon}
      </div>
      <span className="text-neutral-300">{text}</span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="hover:text-[#AC8658] transition-colors duration-200">
        {content}
      </a>
    );
  }

  return content;
};

export default Footer;
