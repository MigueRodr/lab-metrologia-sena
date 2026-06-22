import emailjs from "@emailjs/browser";

// ⚠️ La inicialización DEBE estar fuera del hook
emailjs.init({
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
});

export const useEmailJS = () => {
  const sendEmail = async (templateId, templateParams) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;

    try {
      // ⚠️ El método send SOLO recibe 3 parámetros
      const response = await emailjs.send(serviceId, templateId, templateParams);
      return { success: true, response };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { success: false, error };
    }
  };

  return { sendEmail };
  // En useEmailJS.js, temporalmente:


};