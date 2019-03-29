import React, {Component} from "react";
import VenueImg from "../../../assets/img/meeting-room.jpg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendarAlt, faClock, faHotel, faUserFriends, faTag} from "@fortawesome/free-solid-svg-icons";
import "./Booking.scss";

class Booking extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Venue Luna House</h4>
          <div className="img-wrapper">
            <img className="card-img-top venue-img" src={VenueImg} alt="venue img" />
          </div>

          <table className="booking-info">
            <tbody>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faCalendarAlt} style={{marginRight: 0.5 + "em"}} color="#1C63AD" />
                  Date
                </td>
                <td>Friday, February 19, 2019</td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <FontAwesomeIcon icon={faClock} style={{marginRight: 0.5 + "em"}} color="#1C63AD" />
                  Duration
                </td>
                <td>9:00 - 17:00</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faHotel} style={{marginRight: 0.5 + "em"}} color="#1C63AD" />
                  Room
                </td>
                <td>Lounge</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faUserFriends} style={{marginRight: 0.5 + "em"}} color="#1C63AD" />
                  Delegates
                </td>
                <td>10</td>
              </tr>
              <tr>
                <td>
                  <FontAwesomeIcon icon={faTag} style={{marginRight: 0.5 + "em"}} color="#1C63AD" />
                  Price per delegate
                </td>
                <td>55 EUR</td>
              </tr>
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
