import React from 'react'
import styles from './VideoCard.module.css';

const VideoCard = ({ data }) => {

    console.log('data ==>', data)
    return (
        <>
            {data?.map((video, index) =>
                <div className={styles['card']} key={index}>
                    <div className={styles['video-box']}>
                        <img src={video.videoThumbnailUrl} alt="video-image" />
                        <div className={styles['time-stamp']}>{video.timeStamp}</div>
                        <div className={styles['hidden-content']}>
                            <div className={styles['watch-later']}>
                                <i className='ri-time-line' id={styles['i-watch-later']}></i>
                                <div className={styles['text-watch-later']}>Watch later</div>
                            </div>
                            <div className={styles['add-queue']}>
                                <i className='ri-play-list-2-line' id={styles['i-add-queue']}></i>
                                <div className={styles['text-add-queue']}>Add Queue</div>
                            </div>
                        </div>
                    </div>
                    <div className={styles['video-details']}>
                        <div className={styles['title-details']}>
                            <div className={styles['channel-image']}>
                                <img src={video.channelImage} alt="channel-image" />
                                <div className={styles['title']}>{video.videoTitle}</div>
                            </div>
                            <div className={styles['dots']}><i className="ri-more-2-line"></i></div>
                        </div>
                        <div className={styles['channel-details']}>
                            <div style={{ display: "flex", alignItems: 'center', gap: '5px' }}>
                                <div>{video.channelName}</div>
                                <i className="ri-verified-badge-fill" style={{ fontSize: '17px', color: 'gray' }}></i>
                            </div>
                            <div className={styles['desc']}>
                                <div>{video.views}</div>
                                <div><sup style={{ fontWeight: 900 }}>.</sup></div>
                                <div>{video.uploadedDate}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* <div className={styles['card']}>
                <div className={styles['video-box']}>
                    <img src="https://i.ytimg.com/vi/xMhxaSt1UDw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD15t9Zsigdsh1xZm8ONTHLVZHXzw" alt="video-image" />
                    <div className={styles['time-stamp']}>10:50</div>
                    <div className={styles['hidden-content']}>
                        <div className={styles['watch-later']}>
                            <i className='ri-time-line' id={styles['i-watch-later']}></i>
                            <div className={styles['text-watch-later']}>Watch later</div>
                        </div>
                        <div className={styles['add-queue']}>
                            <i className='ri-play-list-2-line' id={styles['i-add-queue']}></i>
                            <div className={styles['text-add-queue']}>Add Queue</div>
                        </div>
                    </div>
                </div>
                <div className={styles['video-details']}>
                    <div className={styles['title-details']}>
                        <div className={styles['channel-image']}>
                            <img src="https://yt3.ggpht.com/ytc/AIdro_lWPxIlzgSj_ZBHrtdkhBAxo5_WpUPvRs2Zxo8G8DdOloE=s68-c-k-c0x00ffffff-no-rj" alt="channel-image" />
                        </div>
                        <div className={styles['title']}>Intense Trash Talk Game Between Two Chess Masters</div>
                        <div className={styles['dots']}><i className="ri-more-2-line"></i></div>
                    </div>
                    <div className={styles['channel-details']}>
                        <div style={{ display: "flex", alignItems: 'center', gap: '5px' }}>
                            <div>BotezLive</div>
                            <i className="ri-verified-badge-fill" style={{ fontSize: '17px', color: 'gray' }}></i>
                        </div>
                        <div className={styles['desc']}>
                            <div>428k views</div>
                            <div><sup style={{ fontWeight: 900 }}>.</sup></div>
                            <div>2 years ago</div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

export default VideoCard;