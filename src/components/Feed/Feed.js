import React, { useEffect, useState } from 'react'
import '../Feed/Feed.css'
import { Link } from 'react-router-dom'
// import thumbnail1 from '../../image/thumbnail1.jpeg'
// import thumbnail2 from '../../image/thumbnail2.jpeg'
import { API_KEY ,value_converter} from '../../Data'
import moment from 'moment/moment'




function Feed({ category }) {

    const [data, setData] = useState([]);

    const fetchdata = async () => {
        const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response => response.json()).then(data => setData(data.items))
    }

    useEffect(() => {
        fetchdata();
    }, [category])

    return (
        <div className="feed">
            {data.map((item, index) => {
                return (
                    <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
                        <img src={item.snippet.thumbnails.medium.url} alt="No" />
                        <h2>{item.snippet.title}</h2>
                        <h3>{item.snippet.channelTitle}</h3>
                        <p>{value_converter(item.statistics.viewCount)} views $bull ; {moment(item.snippet.publishedAt).fromNow()}</p>

                    </Link >
                )
            })}

        </div>

    )
}

export default Feed