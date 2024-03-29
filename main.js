import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div class="homepage-container">
    <div class="view-card-parent">
      <div class='card-details-container'>
        <div class='card-back card-general-size'>
          <p class="cvv2">000</p>
        </div>
        <div class='card-front card-general-size'>
          <div class="circle-container">
            <div class="big-circle"></div>
            <div class="small-circle"></div>
          </div>

          <p class="card-number">0000 0000 0000 0000</p>

          <div class="card-name-expiry-container">
          <p class="cardholder-name">JANE APPLESEED</p>
          
          <p class="expiry-date">00/00</p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;
