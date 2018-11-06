import React from 'react';
import LocationList from './LocationList';
import SeasonalProduceList from './SeasonalProduceList';

function Homeview(){
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    locations: {
      width: '60vw',
      border: '2px solid #000'

    }


  }
  return (
    <div style={styles.container}>
      <h1>Avery's Organics</h1>
      <div className='homeview'>
        <style jsx>{`
            .homeview {
              display: flex;

            }
            `}</style>
          <div style={styles.locations}>
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
