import React from 'react'
export const MatchMenuComponent = (props) => {
  return(
    <div className="column">
        
        <button
          onClick={() => {
            props.setIndex(1);
          }}
          className="button"
        >
          Score Board
        </button>
        <button
          onClick={() => {
            props.setIndex(2);
          }}
          className="button"
        >
          Graphs
        </button>
      </div>
  )
}

export default MatchMenuComponent
// Maybe in the future there will be an items page
// <button
//           onClick={() => {
//             props.setIndex(0);
//           }}
//           className="button"
//         >
//           Items
//         </button>