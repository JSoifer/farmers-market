import React from 'react';
import LocationList from './LocationList';
import SeasonalProduceList from './SeasonalProduceList';

function Homeview(){
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: "center",
      backgroundImage: "url('https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')"
    },
    mainTitleStyles: {
      marginBottom: "35px",
      fontSize: "3em",
      color: "white",
      padding: "50px",
      textShadow: "2px 2px black"

    }


  }
  return (
    <div style={styles.container}>
      <h1 style={styles.mainTitleStyles}>Avery's Organics</h1>
      <div>
          <div>
          <LocationList/>
        </div>
        <div>
          <SeasonalProduceList/>
        </div>
      </div>
  </div>
  );
}

export default Homeview;
