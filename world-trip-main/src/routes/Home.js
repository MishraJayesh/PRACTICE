import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Journey from "../components/Journey";
import Navbar from "../components/Navbar";
import Trip from "../components/Trip";
function Home() {
  return (
    <>
      <Navbar />
      <Journey
        cName="journey"
        journeyImage="https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjF8fHRyYXZlbHxlbnwwfHwwfHw%3D&w=1000&q=80"
        title="Start your journey"
        text="Choose your Destination"
        buttonText="plan"
        url="/"
        btnClass="show"
      />
      <Destination />

      <Trip />
      <Footer />
    </>
  );
}
export default Home;
