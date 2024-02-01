function VideoPlayer({props}) {
    console.log(props)
    const [ id, title, url, views, date ] = props
    console.log(url)
    return (
        <div key="id">
            <iframe
                width="919"
                height="525"
                src={url}
                frameBorder="0"
                allowFullScreen
                title={title}
            />
            <h1>{title}</h1>
            <p>{views} views | Uploaded {date}</p>
        </div>
    )
}

export default VideoPlayer;