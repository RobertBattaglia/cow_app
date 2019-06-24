import React from 'react';
import Cow from './Cow.jsx';

const CowList = ({ cows }) => {
  return (
    <React.Fragment>
      <ul>
        {cows.map(cow => {
          return <Cow name={cow.name} description={cow.description} />;
        })}
      </ul>
    </React.Fragment>
  );
};

export default CowList;
