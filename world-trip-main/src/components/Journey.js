import "./JourneyStyles.css";

function Journey(props) {
  return (
    <>
      <div className={props.cName}>
        <img alt="journeyImage" src={props.journeyImage} />
        <div className="journey-text">
          <h1>{props.title}</h1>
          <p>{props.text}</p>
          
        </div>
      </div>
    </>
  );
}
export default Journey;
