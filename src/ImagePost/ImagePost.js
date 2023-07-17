import './ImagePost.css'

const ImagePost = (props) => {
    return (
        <div className='imagePost'>
            <div className="topBar">
                <div className='topBarStats'>
                    <p className="score">{props.score}</p>
                    <p className="userName">{props.username}</p>
                    <p>in</p>
                    <p className="community">{props.community}</p>
                </div>
                <p>{props.title}</p>
            </div>
            <img src={props.thumbnail} className='postImage' />
            <div className="bottomBar">
                <div className="twoLineStats">
                    <p>{props.commentCount} Comments</p>
                    <p>{props.shortUrl}</p>
                </div>
                <div className='actionBar'>
                    <button>Up</button>
                    <button>Down</button>
                    <button>Save</button>
                    <button>More</button>
                </div>
            </div>
        </div>
    )
}

export default ImagePost