import React, {useState} from "react";

function LikeDislikeBtns({props}) {
    const [upvotes, downvotes] = props;
    const [likes, setLikes] = useState(upvotes);
    const [dislikes, setDislikes] = useState(downvotes);

    function handleClick(e) {
        if (e.target.id === "likeBtn") {
            setLikes(likes + 1);
        } else if (e.target.id === "dislikeBtn") {
            setDislikes(dislikes + 1);
        }
    }

    return (
        <div class="LikeDislikeBtns">
            <button onClick={(e => handleClick(e))} id="likeBtn">{likes} 👍</button>
            <button onClick={(e => handleClick(e))} id="dislikeBtn">{dislikes} 👎</button>
        </div>
    )
}

export default LikeDislikeBtns;