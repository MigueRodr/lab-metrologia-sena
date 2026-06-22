import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEmailJS } from "../../hooks/useEmailJS";
import { useToast } from "../../context/ToastContext";

const Pqrs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    type: "Petición", // El usuario elige entre Petición, Queja, Reclamo, Sugerencia
    message: ""
  });

  const { sendEmail } = useEmailJS();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviamos el formulario tal cual, con el type elegido por el usuario.
    // Este mismo template se usará también para Contacto (enviando type: "Contacto").
    const result = await sendEmail(
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PQRS, // ← ID de la plantilla unificada
      form
    );

    if (result.success) {
      showToast("PQRS enviada correctamente", "success");
      setForm({ name: "", email: "", type: "Petición", message: "" });
    } else {
      showToast("Error al enviar, intenta de nuevo", "error");
    }
  };

  return (
    <section id="pqrs" className="py-20 bg-white">
      <div className="container-custom max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">PQRS</h2>
        <form onSubmit={handleSubmit} className="bg-sena-graybg p-8 rounded-2xl shadow-sm">
          <Input
            label="Nombre"
            name="name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
          <Input
            label="Email"
            type="email"
            name="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tipo
            </label>
            <select
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-sena-green focus:border-transparent outline-none transition"
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value })}
            >
              <option>Petición</option>
              <option>Queja</option>
              <option>Reclamo</option>
              <option>Sugerencia</option>
            </select>
          </div>
          <Input
            label="Mensaje"
            textarea
            name="message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            required
          />
          <Button type="submit" variant="primary" className="w-full">
            Enviar PQRS
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Pqrs;