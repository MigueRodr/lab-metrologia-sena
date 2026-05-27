import emailjs from "@emailjs/browser";

export const useEmailJS = () => {
  const sendEmail = async (templateId, templateParams) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      const response = await emailjs.send(serviceId, templateId, templateParams, {
        publicKey: publicKey,
      });
      return { success: true, response };
    } catch (error) {
      console.error("EmailJS Error:", error);
      return { success: false, error };
    }
  };

  return { sendEmail };
};