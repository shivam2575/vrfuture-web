import { MessageCircle } from "lucide-react";
export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/917208978248?text=Hi,%20I'd%20like%20to%20know%20about%20VRFuture%20programs"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-whatsapp p-4 shadow-lg rounded-full hover:bg-green-600 transition-colors"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}
