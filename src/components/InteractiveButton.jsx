import { useState } from "react";

export default function InteractiveButton() {
    const [liked, setLiked] = useState(false);
    const toggleLike = () => {
        setLiked(prev => !prev);
    };
    return(
        <button className={`interactive-button${liked ? " liked" : ""}`} onClick={toggleLike}>
            <span className="heart">{liked ? "\u2764\uFE0F" : "\u{1F90D}"}</span> Me gusta
        </button>
    );
}