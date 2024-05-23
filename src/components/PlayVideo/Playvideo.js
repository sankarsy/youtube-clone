import React, { useEffect, useState } from 'react'
import '../PlayVideo/PlayVideo.css'
import { API_KEY, value_converter } from '../../Data';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { BiSolidLike } from "react-icons/bi";
import { BiSolidDislike } from "react-icons/bi";
import { IoIosShareAlt } from "react-icons/io";
import { HiSave } from "react-icons/hi";






// import Video from '../../image/samplevideo.mp4'


function Playvideo() {
    const { videoId } = useParams();

    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([]);

    const fetchVideoData = async () => {
        //fetching video data
        const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
        await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
    }

    const fetchOtherData = async () => {
        if (apiData && apiData.snippet) {
            try {
                const channelData_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
                const channelResponse = await fetch(channelData_url);
                const channelData = await channelResponse.json();
                if (channelData.items && channelData.items.length > 0) {
                    setChannelData(channelData.items[0]);
                }

                const comment_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`;
                const commentResponse = await fetch(comment_url);
                const commentData = await commentResponse.json();
                if (commentData.items) {
                    setCommentData(commentData.items);
                }
            } catch (error) {
                console.error('Error fetching other data:', error);
            }
        }
    };



    useEffect(() => {
        fetchVideoData();
    }, [videoId])

    useEffect(() => {
        fetchOtherData();
    }, [apiData])



    return (
        <div className='play-video'>
            {/* <video src={Video} controls autoPlay muted></video> */}
            <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3>{apiData ? apiData.snippet.title : 'Title Here'}</h3>
            <div className="play-video-info">
                <p>{apiData ? value_converter(apiData.statistics.viewCount) : '16k'} views &bull ; {apiData ? moment(apiData.snippet.publishedAt).fromNow() : 'Puplished date'}</p>
                <div>
                    <span><i><BiSolidLike size={22} color='#898989'/></i>{apiData ? value_converter(apiData.statistics.likeCount) : '155'}</span>
                    <span><i><BiSolidDislike size={22} color='#898989'/></i>6</span>
                    <span><i><IoIosShareAlt size={22} color='#898989'/></i>76</span>
                    <span><i><HiSave size={22} color='#898989'/></i></span>
                </div>
            </div>
            <hr />
            <div className="publisher">
                <img src={channelData ? channelData.snippet.thumbnails.default.url : 'logo'} alt="Dp" />
                <div>
                    <p>{apiData ? apiData.snippet.channelTitle : 'channel name'}</p>
                    <span>{channelData ? value_converter(channelData.statistics.subscriberCount) : ''} Subscriber</span>
                </div>
                <button>Subscribe</button>
            </div>
            <div className="vid-discription">
                <p>{apiData ? apiData.snippet.description.slice(0, 250) : 'vid-description'}</p>

                <hr />
                <h4>{apiData ? value_converter(apiData.statistics.commentCount) : 'vid-comment'} Comments</h4>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comments">
                            <img src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="User" />
                            <div>
                                <h3>{item.snippet.topLevelComment.snippet.authorDisplayName}<span>1 day ago</span></h3>
                                <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <div className='comment-action'>
                                    {/* <img src="" alt="like" /> */}
                                    <i><BiSolidLike size={22} color='#898989'/></i>
                                    <span>{value_converter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    {/* <img src="" alt="d-like" /> */}
                                    <i><BiSolidDislike size={22} color='#898989'/></i>

                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>

    )
}

export default Playvideo