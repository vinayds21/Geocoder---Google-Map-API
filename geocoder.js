navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const latlng = new google.maps.LatLng(lat, lng);
    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ latLng: latlng }, (results, status) => {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          const rtnArr = results.filter((val) => val.types[0] === 'postal_code');
          console.log(rtnArr[0].address_components[0].long_name);
        }
      } else {
        alert(`Geocoder failed due to: ${ status}`);
      }
    });
  });
