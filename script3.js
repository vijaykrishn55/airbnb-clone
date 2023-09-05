const data=JSON.parse(localStorage.getItem("room-data"));
window.addEventListener("DOMContentLoaded",()=>{
    const id=JSON.parse(localStorage.getItem("id"));
    const container=document.querySelector(".container");
      const house_header=document.createElement("div");
      house_header.setAttribute("class","house-title");
      house_header.innerHTML=`
      <h1>${data[id].type}</h1>
      <div class="row">
          <div>
              <span><i class="ri-star-fill"></i> ${data[id].rating}</span>
              <span> &middot; ${data[id].reviewsCount} Reviews</span>
          </div>
          <div>
              <p>Location: ${data[id].address}</p>
              <p><img src="images/share.png" alt="">Share  <img src="images/heart.png" alt=""> Like</p>
          </div>
      </div>
      `;
      container?.appendChild(house_header);
      const gallery=document.createElement("div");
      gallery.setAttribute("class", "gallery");
      gallery.innerHTML=`
      <div class="gallery-img-1"><img src="${data[id].images[0]}"></div>
                <div><img src="${data[id].images[1]}"></div>
                <div><img src="${data[id].images[2]}"></div>
                <div><img src="${data[id].images[3]}"></div>
                <div><img src="${data[id].images[4]}"></div>
      `;
      container?.appendChild(gallery);
      const house_room=document.createElement("div");
      house_room.setAttribute("class","house-room-details");
      let service_fee,taxes_fee;
        if(data[id].price.priceItems[1]){
            service_fee=data[id].price.priceItems[1].amount;
        }else{
            service_fee='none';
        }if(data[id].price.priceItems[2]){
            taxes_fee=data[id].price.priceItems[2].amount;
        }else{
            taxes_fee='none';
        }

      house_room.innerHTML=`
      <div class="room-details">
                    <div class="house-fdetails">
                        <div>
                        <h1 id="room-host-d">Entire rental unit hosted by</h1>
                        <p id="room-has">${data[id].persons} guest &nbsp; &nbsp; ${data[id].beds} beds &nbsp; &nbsp; ${data.bathrooms} bathroom</p>
                        </div>
                        <img src="${data[id].hostThumbnail}" id="house-host"alt="">
                    </div>
                    <hr>
                    <div class="house-policies">
                        <h2>${data[id].name}</h2>
                        <p class="about-room">${data[id].type}</p>
                        <h2 id="room-policy">${data[id].cancelPolicy}</h2>
                    </div>
                    <div class="wt-this-f">
                        <h1>what this place offers</h1>
                        <p>air</p>
                        <p>wifi</p>
                        <p>sdfs</p>
                    </div>
                </div>
                <div class="room-pay">
                    <div class="rp-review">
                        <p>${data[id].price.currency} ${data[id].price.rate}/night</p>
                        <p>${data[id].rating} <i class="ri-star-fill"></i> (${data[id].reviewsCount}Reviews)</p>
                    </div>
                    <form>
                        <label for="checkin">check in</label>
                        <input type="date">
                        <label for="checkout">check out</label>
                        <input type="date">
                        <label for="guest">Guests</label>
                        <input type="text" placeholder="ex: '2' Guests">
                        <button >Reserve</button>
                    </form>
                    <div class="room-pay-fees">
                        <div class="cleaning-fee">
                            <p>Rate</p>
                            <p id="clean-fee">${data[id].price.priceItems[0].amount}</p>
                        </div>
                        <div class="service-fees">
                            <p>Service fee</p>
                            <p id="service-fee">${service_fee}</p>
                        </div>
                        <div class="taxes">
                            <p>Occupancy taxes and fees</p>
                            <p id="tax-fee">${taxes_fee}</p>
                        </div>
                        <hr>
                        <div class="total-pay">
                            <p>Total</p>
                            <p id="total-fee">${data[id].price.total}</p>
                        </div>
                    </div>
                </div>
      `;
      container?.appendChild(house_room);
})

  