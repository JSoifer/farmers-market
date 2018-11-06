import React from 'react';
import PropTypes from 'prop-types';

function Location(props){
  const locations = {
    borderBottom: "2px solid gray",
    paddingLeft: "10px"
  }
  return (
    <div style={locations} className='locationDiv'>
      <style jsx>{`
          .locationDiv {
            display: flex;
            flex-direction: column;
          }
      `}</style>
      <h2>{props.day}</h2>
      <h3>{props.location}</h3>
      <p>{props.hours}</p>
      <p>{props.booth}</p>
      <hr/>

    </div>
  );
}

Location.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Location;
