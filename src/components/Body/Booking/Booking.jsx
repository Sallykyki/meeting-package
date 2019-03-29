import React, {Component} from "react";
import VenueImg from "../../../assets/img/meeting-room.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faClock, faHotel, faUserFriends, faTag} from "@fortawesome/free-solid-svg-icons";
import "./Booking.scss";

const iconColor = "#1C63AD";
const iconStyle = {marginRight: 0.5 + "em"};

const bookingDetails = [
  {title: "Date", icon: faCalendarAlt, info: "Friday, February 19, 2019"},
  {title: "Duration", icon: faClock, info: "9:00 - 17:00"},
  {title: "Room", icon: faHotel, info: "Lounge"},
  {title: "Delegates", icon: faUserFriends, info: "10"},
  {title: "Price per delegate", icon: faTag, info: "55 EUR"}
];
class Booking extends Component {
  render() {
    return (
      <div className="card h-100">
        <div className="card-body">
          <h4 className="card-title">Venue Luna House</h4>
          <div className="img-wrapper">
            <img className="card-img-top venue-img" src={VenueImg} alt="venue img" />
          </div>
          <table className="booking-info">
            <tbody>
              {bookingDetails.map((item, index) => (
                <tr key={index}>
                  <td>
                    <FontAwesomeIcon icon={item.icon} style={iconStyle} color={iconColor} />
                    {item.title}
                  </td>
                  <td>{item.info}</td>
                </tr>
              ))}
              <tr>
                <td colSpan="2">
                  <hr />
                </td>
              </tr>
              <tr>
                <td>
                  <strong>TOTAL PRICE</strong>
                </td>
                <td>550 EUR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Booking;
