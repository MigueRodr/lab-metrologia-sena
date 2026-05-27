const Footer = () => {
  return (
    <footer className="bg-sena-dark text-white pt-12 pb-6">
      <div className="container-custom">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Laboratorio de Metrología CPIC</h3>
            <p className="text-gray-300">SENA - Centro de Procesos Industriales y Construcción</p>
            <p className="text-gray-300 mt-2">Manizales, Colombia</p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Enlaces rápidos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#home" className="hover:text-sena-green transition">Inicio</a></li>
              <li><a href="#services" className="hover:text-sena-green transition">Servicios</a></li>
              <li><a href="#quotation" className="hover:text-sena-green transition">Cotizaciones</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Contacto</h4>
            <p className="text-gray-300">Email: labmetrologia@sena.edu.co</p>
            <p className="text-gray-300">Tel: +57 (1) 123 4567</p>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} SENA CPIC - Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;