import "./TripStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h2> Trips</h2>
      <p> you can discover unique destinations using google maps. </p>

      <div className="tripcard">
        <TripData
          src="https://images.unsplash.com/photo-1507699622108-4be3abd695ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmV3JTIwemVhbGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80"
          heading="South Island, New Zealand"
          text="New Zealand's South Island brims with majestic landscapes at every turn, from dramatic mountains to spectacular fjords. Here, you can admire the mountains of Fiordland National Park, a UNESCO World Heritage Site, from hiking trails or a boat on Milford Sound. At night, journey to the University of Canterbury's Mount John Observatory to gaze at the starry skies..."
        />
        <TripData
          src="https://plus.unsplash.com/premium_photo-1661963282607-4c4a07f4266b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          heading="Rome"
          text="When you visit the Eternal City, prepare to cross a few must-see attractions – including the Colosseum, the Trevi Fountain and the Pantheon – off of your bucket list. Travelers can see additional treasures, such as St. Peter's Basilica and the Sistine Chapel, in nearby Vatican City. Escape the tourist crowds by taking a twilight stroll along the cobblestone streets of Trastevere...."
        />
        <TripData
          src="https://images.unsplash.com/photo-1604928141064-207cea6f571f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          heading="Tokyo"
          text="Simply setting foot in Japan's cosmopolitan capital is an experience within itself. A city known for its bustling streets and flashing neon signs, Tokyo has an electric energy and plenty of attractions to discover. Foodies won't be let down by the city's fresh sushi and hearty ramen. Budding photographers and adrenaline junkies will love  panoramas from the top of the Tokyo Skytree...."
        />
      </div>
    </div>
  );
}
export default Trip;
