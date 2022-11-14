import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1 className="heading">First Destination</h1>
      <p className="description">
        Tours Give the opportunity to see a lot with in a time frame
      </p>
      <DestinationData
        className="first-description"
        heading="Paris"
        text="The magnetic City of Light draws visitors 
      from around the globe who come to see iconic 
      attractions like the Eiffel Tower, the Louvre 
      and the Arc de Triomphe. But what travelers 
      really fall in love with are the city's
       quaint cafes, vibrant markets, trendy 
       shopping districts and unmistakable je 
       ne sais quoi. Get lost wandering along 
       the charming cobblestone streets, or grab 
       a croissant and relax on the banks of the 
       Seine for hours. If you're up for a quick 
       daytrip, head about 15 miles southwest of 
       the city center to the Palace of Versailles, 
       which offers guided and self-guided tours of
        the estate."
        src="https://images.unsplash.com/photo-1568684333877-4d39f2c871c9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFyaXMlMjBmcmFuY2V8ZW58MHx8MHx8&w=1000&q=80"
      />

      <DestinationData
        className="first-description-reverse"
        heading="London"
        text="London is a world unto itself. The eclectic neighborhoods, which are home to a blend of historical landmarks and modern-day attractions, can keep you occupied for days. If it's your first time in London, plan to see the top spots, such as the Tower of London, the Tate Modern art institution, Buckingham Palace, Borough Market and the British Museum, before sitting down to a classic afternoon tea or checking out a local pub. The best time to travel to London is during the warmer months, but be warned that this is also the busiest and most expensive time of year."
        src="https://images.unsplash.com/photo-1610390370064-4890cf703fd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bG9uZG9uJTIwYnJpZGdlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
      />

      <DestinationData
        className="first-description"
        heading="Maldives"
        text="It is not cheap or easy to reach, but this isolated paradise between the Arabian and Laccadive seas is the personification of a dreamy tropical vacation. In this South Asian destination, which is made up of more than 1,000 islands, thatched-roof bungalows sit above the bright aquamarine sea, providing easy water access and a romantic atmosphere. Fill your days with beach trips, spa treatments and snorkeling or scuba diving excursions. If cabin fever sets in, pay a visit to the capital, Malé, where you'll find historic mosques and open-air markets"
        src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />
      <DestinationData
        className="first-description-reverse"
        heading="Sydney"
        text="Sydney offers more than just a dizzying array of landmarks, such as the Sydney Opera House, Mrs. Macquarie's Chair and the Sydney Harbour Bridge. This Australian city boasts a warm, sunny climate that is ideal for relaxing or surfing at world-renowned beaches like Coogee, Bondi and Manly. Sydney also offers a long list of seasonal events, including concerts and food festivals. No visit would be complete without visiting museums like the Hyde Park Barracks and the Australian Museum to get an overview of the city's history and culture..."
        src="https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />

      <DestinationData
        className="first-description"
        heading="Dubai"
        text="Stunning Persian Gulf views, heart-pumping activities and historical landmarks await you in Dubai. This Middle Eastern city is filled with some of the world's most notable and unique attractions, including the Dubai Mall, indoor Ski Dubai and Burj Khalifa, the tallest building on the planet. But the city still holds onto its heritage, as seen in the Bastakiya Quarter and the traditional Gold and Spice souks. When you need a break from the hustle and bustle of the city, head to a sandy shore like Jumeirah Public Beach, Sunset Beach or Al Mamzar Beach Park..."
        src="https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />

      <DestinationData
        className="first-description-reverse"
        heading="New York"
        text="New York City hosts infinite urban adventures: You can wander through Central Park, tour art exhibits at the Met, catch a Broadway show or peruse SoHo's stylish boutiques. At night, admire Manhattan's glittering skyscrapers from the top of the Empire State Building or the rooftop bar of a trendy boutique hotel. Foodies will also appreciate the Big Apple's endless restaurant options. If you want to sample a bit of everything, sign up for a food tour..."
        src="https://images.unsplash.com/photo-1518391846015-55a9cc003b25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
      />
    </div>
  );
};
export default Destination;
