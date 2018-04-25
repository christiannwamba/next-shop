import React from 'react';

export const Row = props => (
  <div className="row" {...props}>
    {props.children}
    <style jsx>{`
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      flex-wrap: wrap;
      margin-right: -0.5rem;
      margin-left: -0.5rem;
      justify-content: ${props.justifyContent || 'flex-start'};
      align-items: ${props.alignItems || 'stretch'};
    `}</style>
  </div>
);

export default Row;
