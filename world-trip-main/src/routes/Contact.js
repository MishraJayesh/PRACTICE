import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Journey
        cName="journey-about"
        journeyImage="https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNvbnRhY3R8ZW58MHx8MHx8&w=1000&q=80"
        title="Contact"
        url="/contact"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
