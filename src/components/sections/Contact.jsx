import { useState } from "react";
import Input from "../common/Input";
import Button from "../common/Button";
import { useEmailJS } from "../../hooks/useEmailJS";
import { useToast } from "../../context/ToastContext";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const { sendEmail } = useEmailJS();
  const { showToast } = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Añadimos type fijo "Contacto" al enviar
    const templateParams = {
      ...form,
      type: "Contacto",  // ← esto diferencia el mensaje
    };
    const result = await sendEmail(
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID_PQRS, // ← usa la misma que PQRS
      templateParams
    );
    if (result.success) {
      showToast("Mensaje enviado correctamente", "success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } else {
      showToast("Error al enviar", "error");
    }
  };

  return (
    <section id="contact" className="py-20 bg-sena-graybg">
      <div className="container-custom max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Contacto</h2>
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm">
          <Input label="Nombre" name="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          <Input label="Email" type="email" name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          <Input label="Asunto" name="subject" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} required />
          <Input label="Mensaje" textarea name="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required />
          <Button type="submit" variant="primary" className="w-full">Enviar mensaje</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;