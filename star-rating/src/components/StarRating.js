import { useState } from "react";
import { FaStar } from "react-icons/fa";

function StarRating({starAmount = 8}){
    const [rating,setRating] = useState(0);
    const [hoverRating,setHoverRating] = useState(0);

    const handleClick = (currentIndex)=>{
        setRating(currentIndex);
        setHoverRating(0);
    };
    const handleMouseEnter = (currentIndex)=>{
        setHoverRating(currentIndex);
    }
    const handleMouseLeave = ()=>{
        setHoverRating(rating);
    }
    const renderedStars = [...Array(starAmount)].map((_,index)=>{
        const currentIndex = index + 1;
        const starClass = ((currentIndex <= ( hoverRating ||  rating )) ? "active" : "inactive");
        return(
                <FaStar
                    key={currentIndex}
                    size={50}
                    className={starClass}
                    onClick={()=>handleClick(currentIndex)}
                    onMouseEnter={()=>handleMouseEnter(currentIndex)}
                    onMouseLeave={()=>handleMouseLeave()}
                />
        )
    });
    return(
        <div className="w-screen flex flex-nowrap justify-center items-center">
            {
                renderedStars
            }
        </div>
    )
}

export default StarRating;