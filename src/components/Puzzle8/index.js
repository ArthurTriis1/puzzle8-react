import './Puzzle8.css'
import React from 'react';

function Puzzle8({puzzleData}) {
  return (
    <div className="puzzleWrap">
        {
            puzzleData.map(cell => (
                <div className="cell" key={cell} style={cell > 0 ? {backgroundColor: "rgb(21, 89, 144)"} : {backgroundColor: "#FFF"} }>{cell}</div>
            ))
        }
    </div>
  )
}

export default Puzzle8;