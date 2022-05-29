import React from "react";

const Card = (props) => {
  return (
    <div className={`container ${props.bgcolor}`}>
      <div className="topDiv">
        <p>{props.date}</p>
        <p>{props.logo}</p>
      </div>
      <div>
        <div className="title"><p>{props.title}</p></div>
        
        <p className="comptitle">{props.compTitle}</p>
        <p className="pay">{props.pay}</p>
        <p className="mode">{props.mode}</p>
      </div>
    </div>
  )
}
export default Card