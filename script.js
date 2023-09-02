window.addEventListener("DOMContentLoaded",()=>{
    async function getDetails(localInput) {
        const url = `https://airbnb13.p.rapidapi.com/search-location?location=${localInput}&checkin=2023-09-16&checkout=2023-09-17&adults=1&children=0&infants=0&pets=0&page=1&currency=USD`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "03a6b388f4mshbfbc2c725990a1ep1461fejsn1f4e8e15d43d",
            "X-RapidAPI-Host": "airbnb13.p.rapidapi.com",
          },
        };
      
        try {
          const response = await fetch(url, options);
          const result = await response.json();
          datas = result.results;
        //   console.log(datas)
        } catch (error) {
          console.error(error);
        }
        
      }
    const form=document.getElementById("form-1");
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const location = document.querySelector(".location-input input").value;
      const checkIn = document.querySelector(".check-in input").value;
      const checkOut = document.querySelector(".check-out input").value;
      const guest = document.querySelector(".geust-no input").value;
      
    })
   
      getDetails("hospete")
})