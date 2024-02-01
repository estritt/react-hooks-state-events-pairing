function SingleComment({commentObj}) {

    const { id, user, comment } = commentObj;

    return (
        <div key={id}>
            <h3>{user}</h3>
            <p>{comment}</p>
        </div>
    )
}

export default SingleComment;