import React, { props } from 'react';
import './Trolley.css';

const getTrolleyItemsLength = trolleyItems => {
  if (trolleyItems.length) {
    return trolleyItems.length > 1 ? trolleyItems.length + ' items' : '1 item';
  } else {
    return '0 items';
  }
};

const displayTrolleyContents = trolleyItems => {
  // console.log(trolleyContents);
};

const Trolley = () => {
  const { trolleyItems, trolleyTotal } = props;
  return (
    <div className="trolley">
      <span className="innerTrolley">
        {getTrolleyItemsLength(trolleyItems)} in your Trolley, totalling:{' '}
        {trolleyTotal}
        <div>{displayTrolleyContents(trolleyItems)}</div>
      </span>
    </div>
  );
};

export default Trolley;
