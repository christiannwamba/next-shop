import React from 'react';

export const H3 = props => (
  <h3 {...props}>
    {props.children}
    <style jsx>{`
      font-size: 2rem;
      line-height: 1.2;
      font-weight: 400;
      letter-spacing: -0.1rem;
      margin-top: 0;
    `}</style>
  </h3>
);

export default H3;
