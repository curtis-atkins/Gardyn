import React from "react";
import {Link} from "react-router-dom";
import "./PlantCard.css";

const PlantCard = (props) => {

    var plantCardBackground = {
        backgroundImage: `url(${props.item.imageURL})`
    }

    if (props.item.skillLevel === "Beginner") { 
        var easyDif = "easyDifficulty";
        var medDif = "mediumDifficulty hidden";
        var hardDif = "hardDifficulty hidden";
    } else if (props.item.skillLevel === "Expert") { 
        var easyDif = "easyDifficulty hidden";
        var medDif = "mediumDifficulty hidden";
        var hardDif = "hardDifficulty";
    } else {
        var easyDif = "easyDifficulty hidden";
        var medDif = "mediumDifficulty";
        var hardDif = "hardDifficulty hidden";
    }

    return (  
        <Link to={{
            pathname: `/plants/${props.item.title}`,
            state: {props}
        }}>
            <div className="plantCard" style={plantCardBackground}>
                <div className={easyDif}></div>
                <div className={medDif}></div>
                <div className={hardDif}></div>
                <h2 className="plantCardName">{props.item.title}</h2>
            </div>
        </Link>
    );
}

export default PlantCard;
