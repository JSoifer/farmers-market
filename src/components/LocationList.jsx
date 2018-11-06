import React from 'react';
import Location from './Location';

const masterLocationList = [
  {
   day: "Sunday",
   location: "Lents International",
   hours: "9:00am - 2:00pm",
   booth: "4A"
  },
  {
     day: "Monday",
     location: "Pioneer Courthouse Square",
     hours: "10:00am - 2:00pm",
     booth: "7C"
  },
  {
     day: "Tuesday",
     location: "Hillsboro",
     hours: "5:00pm - 8:30pm",
     booth: "1F"
  },
  {
     day: "Wednesday",
     location: "Shemanski Park",
     hours: "10:00am - 2:00pm",
     booth: "3E"
  },
  {
     day: "Thursday",
     location: "Northwest Portland",
     hours: "2:00pm - 6:00pm",
     booth: "6D"
  },
  {
     day: "Saturday",
     location: "Beaverton",
     hours: "10:00am - 1:30pm",
     booth: "9G"
  }
];

function LocationList(){

  function currentDay() {
    let today = new Date();
    return today.getDay()
  };
  const day = currentDay();
  const locations = {
    width: 'calc(93vw/7)',
    marginLeft: '1vw',
    border: '2px solid #000',
    paddingLeft: "10px",
    marginBottom: "20px",
    borderRadius: "4px",
    backgroundColor: "rgba(215, 235, 242, 0.8)"
  }
  const LocationListStyles = {
    display: "flex"
  }

  const currentDayStyle = {
    backgroundColor: "rgba(67, 99, 109, 0.8)"
  }
  return (
    <div style={LocationListStyles}>
      {masterLocationList.map((location, index) => {
        if(index == day) {
          return(
            <div style={Object.assign({}, locations, currentDayStyle)}>
              <Location day={location.day}
                location={location.location}
                hours={location.hours}
                booth={location.booth}
                key={index}/>
            </div>
          )
        } else {
          return(
            <div style={locations}>
              <Location day={location.day}
                location={location.location}
                hours={location.hours}
                booth={location.booth}
                key={index}/>
            </div>

          )

        }

      }

      )}
    </div>
  );
}

export default LocationList;
