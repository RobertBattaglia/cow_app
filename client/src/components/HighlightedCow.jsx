import React from 'react';

const HighlightedCow = ({ highlighted }) => {
  return !highlighted ? (
    <div />
  ) : (
    <React.Fragment>
      <h3>{highlighted.name}</h3>
      <p>{highlighted.description}</p>
    </React.Fragment>
  );
};

export default HighlightedCow;
