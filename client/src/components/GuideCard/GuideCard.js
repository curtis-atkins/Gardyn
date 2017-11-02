import React from "react";
import {Link} from "react-router-dom";
import "./GuideCard.css";

function sluggify(string){
    if (string) {
      return string.replace(/ /g, "_").toLowerCase();  
    } else {
        return null;
    }
}

const GuideCard = (props) => { 

	return (
		<Link className="guideCard" to={{
	        pathname: `/guide/${ sluggify(props.item.title) }`,
	        state: {props}
	    }}>   
		    <div className="guideCardName">{props.item.title}</div>
		</Link> 
	);
}

export default GuideCard;
