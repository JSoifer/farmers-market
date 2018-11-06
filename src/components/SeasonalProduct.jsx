import React from 'react';
import PropTypes from 'prop-types';

function SeasonalProduct(props){
  const listStyle = {
    height: "30vh",
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    paddingLeft: "10px",
  }
  const itemStyle = {
    marginLeft: "15px"
  }
  const listHeading = {
    display: "flex",
    justifyContent: "center"
  }

  return (
    <div>
      <h2 style={listHeading}>{props.month}</h2>
      <ul style={listStyle}>
        {props.selection.map((select, index) =>
          <li style={itemStyle} key={index}>{select}</li>
        )}
      </ul>
    </div>
  );
}

SeasonalProduct.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.array
}
export default SeasonalProduct;
