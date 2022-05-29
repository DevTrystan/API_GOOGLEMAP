


const getLocation = document.getElementById("getlocation");
//recuperation de l'element DOM pour la carte

  

  
 

getLocation.addEventListener('click', (e) => {
    e.preventDefault();


    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let googleMapURL = `https://maps.googleapis.com/maps/api/staticmap?center=${latitude},${longitude}&zoom=11&size=400x400&key=AIzaSyAgyReIPDrTibbDFnO48LSr-bU4OL-Mt0Y&callback=initMap&v=weekly`;
            const map = document.getElementById('map');
            map.src = googleMapURL;

                console.log(latitude, longitude);
            }, error => {
                conole.log(error.code);
            });

        }else {
            console.log(" le format n'est pas supporter")
        }
});

    










