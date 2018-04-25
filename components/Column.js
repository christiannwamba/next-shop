import React from 'react';

export const Column = props => (
  <div {...props}>
    {props.children}
    <style jsx>{`
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: 0.5rem;
      padding-left: 0.5rem;
      flex-grow: ${props.flexGrow || 1};
      max-width: ${props.width || 'auto'};
      flex-basis: ${props.width || 'auto'};
      ${props.debug &&
        `
          background: palevioletred;
          border: 1px dashed #802342;
          padding: 16px;
        `};
    `}</style>
  </div>
);

export default Column;
