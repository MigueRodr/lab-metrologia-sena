import { services } from "../../utils/constants";
import Card from "../common/Card";

const Services = () => {
  return (
    <section id="services" className="py-20 bg-sena-graybg">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nuestros servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(s => (
            <Card key={s.id} className="p-6">
              <div className="text-4xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;