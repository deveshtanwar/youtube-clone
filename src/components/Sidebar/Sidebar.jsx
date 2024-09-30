import React from 'react'
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles['sidebar']}>
            <div className={styles['sidebar-items']}>
                <a href="/" className={styles['sidebar-item']}><i className="ri-home-line"></i>Home</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-compass-3-line"></i>Explore</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-wireless-charging-line"></i>Shorts</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-rss-line"></i>Subscription</a>

                <hr />

                <a href="/" className={styles['sidebar-item']}><i className="ri-links-line"></i>Library</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-history-line"></i>History</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-video-line"></i>Your videos</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-time-line"></i>Watch later</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-play-list-2-line"></i>All videos</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-arrow-down-s-line"></i>Show more</a>

                <hr />
                <div className={styles['more']} style={{marginBottom: '10px'}}>
                    <h4>More from YouTube</h4>
                </div>
                <a href="/" className={styles['sidebar-item']}><i className="ri-keyboard-box-line"></i>Gaming</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-live-line"></i>Live</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-award-line"></i>Sports</a>
                <hr />

                <a href="/" className={styles['sidebar-item']}><i className="ri-settings-5-line"></i>Settings</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-flag-line"></i>Report history</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-question-line"></i>Help</a>
                <a href="/" className={styles['sidebar-item']}><i className="ri-feedback-line"></i>Send feedback</a>
            </div>
        </div>
    )
}

export default Sidebar;