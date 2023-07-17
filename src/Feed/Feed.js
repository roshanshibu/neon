import { LemmyHttp, GetPosts } from 'lemmy-js-client';
import { useContext, useState } from 'react';
import { JwtContext } from '../App';
import ImagePost from '../ImagePost/ImagePost';

const Feed = (props) => {
    const jwtContext = useContext(JwtContext)

    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
        let baseUrl = 'https://lemm.ee';
        let client = new LemmyHttp(baseUrl, LemmyHttp.headers);
        let params = {
            auth: jwtContext.Jwt,
        };
        client.getPosts(params).then(
            (resp) => { 
                let fPosts = resp.posts.map((p) => {
                    p["key"] = p.post.id
                    return p
                })
                fPosts.map((x)=>{
                    console.log(x)
                })

                setPosts([
                    ...posts,
                    ...fPosts
                ])
            },
            (error) => { console.log(error) }
        );
    }
    return(
        <div>
            <p>Fetch Posts</p>
            <button onClick={fetchPosts}>fetch</button>
            {posts.map((post) => {
                let domain
                if(post.post.url){
                    domain = (new URL(post.post.url));
                }
                return (<ImagePost  key={post.key}
                                    score={post.counts.score}
                                    username={post.creator.name}
                                    community={post.community.name}
                                    title={post.post.name}
                                    thumbnail={post.post.thumbnail_url}
                                    commentCount={post.counts.comments}
                                    shortUrl={domain? domain.hostname : ''} />)
            })}
        </div>
    )
}

export default Feed