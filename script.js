window.addEventListener("DOMContentLoaded",()=>{
    
    const form=document.getElementById("form-1");
    form.addEventListener("submit",(e)=>{
        e.pr
        const location = document.querySelector(".location-input input").value;
      const checkIn = document.querySelector(".check-in input").value;
      const checkOut = document.querySelector(".check-out input").value;
      const guest = document.querySelector(".geust-no input").value;
      localStorage.clear()
      localStorage.setItem("Location",JSON.stringify(location));
      localStorage.setItem("CheckIn",checkIn);
      localStorage.setItem("CheckOut",checkOut);
      localStorage.setItem("Guest",JSON.stringify(guest));
      window.location.href='search-details.html'
    })
})
