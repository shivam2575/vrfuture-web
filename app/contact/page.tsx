import { EnquiryForm } from "../components/contact/EnquiryForm";

export const metadata = {
  title: "Contact & Enquiry | VRFuture Coaching Institute, Daman",
  description:
    "Enquire about VR-powered coaching for Classes 5–12, JEE & NEET in Daman. Get a callback from VRFuture.",
};

export default function ContactPage() {
  return (
    <div className="">
      <EnquiryForm />
    </div>
  );
}
