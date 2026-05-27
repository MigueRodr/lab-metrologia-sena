const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Sobre el laboratorio</h2>
        <div className="w-20 h-1 bg-sena-green mx-auto mb-8"></div>
        <div className="max-w-3xl mx-auto text-center text-gray-600 space-y-4">
          <p>El Centro de la Industria, la Empresa y los Servicios (CPIC) del SENA cuenta con un laboratorio de metrología de vanguardia, comprometido con la excelencia técnica y el apoyo a la productividad nacional.</p>
          <p>Ofrecemos servicios de calibración acreditados, asesoría metrológica y formación especializada para la industria colombiana.</p>
        </div>
      </div>
    </section>
  );
};

export default About;