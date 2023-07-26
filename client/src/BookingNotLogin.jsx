/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const BookingNotLogin = ({ place }) => {
  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <h2 className="">You need to Login before Booking {place.title} </h2>

      <Link to="/login">
        <button className="primary mt-4">Login</button>
      </Link>
    </div>
  );
};

export default BookingNotLogin;
