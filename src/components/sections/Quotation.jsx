import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEmailJS } from "../../hooks/useEmailJS";
import { useToast } from "../../context/ToastContext";

const Quotation = () => {
  const [form, setForm] = useState({ name: "", email: "", service: "", message: "" });
  const { sendEmail } = useEmailJS();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await sendEmail(
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_COTIZACION,
      form  // solo name, email, service, message
    );
    if (result.success) {
      showToast("Cotización enviada exitosamente", "success");
      setForm({ name: "", email: "", service: "", message: "" });
    } else {
      showToast("Error al enviar, intenta de nuevo", "error");
    }
  };

  return (
    <section id="quotation" className="py-20 bg-sena-graybg">
      <div className="container-custom max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Solicitar cotización</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
          <Input label="Nombre completo" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Correo electrónico" type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input label="Servicio de interés" name="service" value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} required />
          <Input label="Mensaje" textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
          <Button type="submit" variant="primary" className="w-full">Enviar cotización</Button>
        </form>
      </div>
    </section>
  );
};

export default Quotation;