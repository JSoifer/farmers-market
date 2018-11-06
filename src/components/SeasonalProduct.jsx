import React from 'react';
import PropTypes from 'prop-types';

function SeasonalProduct(props){
  const product = {
    marginLeft: "30px",
    border: "2px solid #000",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "4px"
  }
  return (
    <div style={product}>
      <h2>{props.month}</h2>
      <ul>
        {props.selection.map((select, index) =>
          <li key={index}>{select}</li>
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
