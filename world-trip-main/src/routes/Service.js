import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Journey
        cName="journey-about"
        journeyImage="https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c2VydmljZXN8ZW58MHx8MHx8&w=1000&q=80"
        url="/service"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
