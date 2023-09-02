window.addEventListener("DOMContentLoaded",()=>{
    
    const form=document.getElementById("form-1");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const location = document.querySelector(".location-input input").value;
      const checkIn = document.querySelector(".check-in input").value;
      const checkOut = document.querySelector(".check-out input").value;
      const guest = document.querySelector(".geust-no input").value;
      localStorage.clear()
      localStorage.setItem("Location",JSON.stringify(location));
      localStorage.setItem("CheckIn",JSON.stringify(checkIn));
      localStorage.setItem("CheckOut",JSON.stringify(checkOut));
      localStorage.setItem("Guest",JSON.stringify(guest));
      window.location.href='search-details.html'
    })
})
