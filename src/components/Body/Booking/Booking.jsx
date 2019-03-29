import React, {Component} from "react";
import VenueImg from "../../../assets/img/meeting-room.jpg";

class Booking extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <img className="card-img-top" src={VenueImg} alt="venue img" />
          <div className="card-img-overlay">
            <h5 className="card-tile">Luna House</h5>
          </div>
          <table className="table">
            <tbody>
              <tr>
                <td>Date</td>
                <td>Friday, February 19, 2019</td>
              </tr>
              <tr>
                <td>Duration</td>
                <td>9:00 - 17:00</td>
              </tr>
              <tr>
                <td>Room</td>
                <td>Lounge</td>
              </tr>
              <tr>
                <td>Delegates</td>
                <td>10</td>
              </tr>
              <tr>
                <td>Price per delegate</td>
                <td>55 EUR</td>
              </tr>
              <hr />
              <tr>
                <td>TOTAL PRICE</td>
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
