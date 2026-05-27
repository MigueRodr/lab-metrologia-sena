import Button from "../common/Button";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 bg-gradient-to-br from-white to-sena-graybg">
      <div className="container-custom text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-sena-dark mb-6">Laboratorio de <span className="text-sena-green">Metrología</span> CPIC</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">Acreditamos precisión y calidad para la industria colombiana. Calibraciones, ensayos y asesoría con trazabilidad internacional.</p>
        <Button href="#quotation" variant="primary">Solicitar cotización</Button>
      </div>
    </section>
  );
};

export default Hero;