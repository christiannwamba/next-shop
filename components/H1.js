import React from 'react';

export const H1 = props => (
  <h1 {...props}>
    {props.children}
    <style jsx>{`
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 400;
      margin-top: 0;
      color: ${props.isbrand && '#FFFFFF'};
    `}</style>
  </h1>
);

export default H1;
