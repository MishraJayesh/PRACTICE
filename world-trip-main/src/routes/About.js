import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";
function About() {
  return (
    <>
      <Navbar />
      <Journey
        cName="journey-about"
        journeyImage="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmVsJTIwYWJvdXQlMjBpbWFnZXN8ZW58MHx8MHx8&w=1000&q=80"
        title="About"
        url="/about"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
