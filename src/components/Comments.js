import React, {useState} from "react";
import SingleComment from "./SingleComment";

function Comments({comments}) {

    const [commentsVisibility, setCommentsVisibility] = useState(true);
    const btnText = (commentsVisibility) ? "Hide Comments" : "Show Comments";

    function handleClick() {
        setCommentsVisibility(!commentsVisibility);
    }

    const commentList = comments.map(comment => <SingleComment commentObj={comment} />)

    return(
        <div>
            <button onClick={() => handleClick()}>{btnText}</button>
            {commentsVisibility ? commentList : null}
        </div>
    )
}

export default Comments;