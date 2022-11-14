import { MdDateRange } from "react-icons/md";
import { BiTime } from "react-icons/bi";

const UpComingAppointments = () => {
  return (
    <section>
      <h2>Upcoming Appointment</h2>
      <div className="up-coming-appointments-container1">
        <img
          src="https://t3.ftcdn.net/jpg/02/60/04/08/360_F_260040863_fYxB1SnrzgJ9AOkcT0hoe7IEFtsPiHAD.jpg"
          className="upcoming-appointment-image"
          alt="upcoming-appointment"
        />
        <div className="up-coming-appointments-container2">
          <h2> Dr.Albert Flores </h2>
          <p>Cardiologist</p>
          <div>
            
            <div className="date-container">
              <p>
            <MdDateRange />
               17Aug
          
            </p>
            </div>
            <div className="date-container">
          <p>
              <BiTime />
              17Aug
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default UpComingAppointments;
