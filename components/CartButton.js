import React from 'react';

export const CartButton = props => (
  <div>
    <button>
      <svg width="20px" height="18px" viewBox="0 0 20 18">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-1111.000000, -119.000000)">
            <g transform="translate(1099.000000, 101.000000)">
              <g transform="translate(14.000000, 20.000000)">
                <polyline
                  id="Path-367"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  points="0 0 2.05128205 0 4.92307692 8.8 13.9487179 8.8 16 2.4 2.87179487 2.4"
                />
                <g>
                  <use fillOpacity="0" fill="#FFFFFF" fillRule="evenodd" />
                  <ellipse
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    cx="6.97435897"
                    cy="13.2"
                    rx="1.82051282"
                    ry="1.8"
                  />
                </g>
                <g>
                  <use fillOpacity="0" fill="#FFFFFF" fillRule="evenodd" />
                  <ellipse
                    stroke="#FFFFFF"
                    strokeWidth="2"
                    cx="11.8974359"
                    cy="13.2"
                    rx="1.82051282"
                    ry="1.8"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>{` `}
      My cart
    </button>
    <span>12</span>
    <style jsx>{`
      span,
      button {
        display: inline-block;
      }
      button {
        background: #6364d8;
        border: none;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        color: #fff;
        padding: 10px 17px;
        height: 40px;
      }
      span {
        background: #393AB1;
        height: 29px;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        padding: 0 15px;
        color: #fff;
        padding-top: 11px;
      }
    `}</style>
  </div>
);

export default CartButton;
