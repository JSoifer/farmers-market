import React from 'react';
import PropTypes from 'prop-types';

function Location(props){

  const dayStyle = {
    fontSize: '1.3em'
  }
  const locationStyle = {
    fontSize: '1.1em'
  }
  return (
    <div>

      <h2 style={dayStyle}>{props.day}</h2>
      <h3 style={locationStyle}>Location: {props.location}</h3>
      <p>Hours: {props.hours}</p>
      <p>Booth: {props.booth}</p>

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
