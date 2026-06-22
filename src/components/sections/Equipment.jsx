import { equipmentList } from "../../utils/constants";
import Card from "../common/Card";

const Equipment = () => {
  return (
    <section id="equipment" className="py-20 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Equipos especializados</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {equipmentList.map(eq => (
            <Card key={eq.id} className="overflow-hidden">
              <img src={eq.image} alt={eq.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">{eq.name}</h3>
                <p className="text-gray-600 text-sm mt-1">{eq.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Equipment;