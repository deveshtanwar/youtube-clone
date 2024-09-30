import React from 'react'
import styles from './Home.module.css';
import VideoCard from '../components/VideoCard/VideoCard';
import videoData from '../utils/VideoData.json';

const Home = () => {
    return (
        <div className={styles['video-container']}>
            <div className={styles['video-items']}>
                <VideoCard data={videoData} />
            </div>
        </div>
    )
}

export default Home;