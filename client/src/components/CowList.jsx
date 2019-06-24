import React from 'react';
import Cow from './Cow.jsx';

const CowList = ({ cows, changeHighlighted }) => {
  return (
    <React.Fragment>
      <ul>
        {cows.map(cow => {
          return (
            <Cow
              key={cow.id}
              name={cow.name}
              description={cow.description}
              changeHighlighted={changeHighlighted}
            />
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default CowList;
