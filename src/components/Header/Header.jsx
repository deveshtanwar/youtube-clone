import React from 'react'
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles['header']}>
            <div className={styles['logo-container']}>
                <div className={styles['menu']}>
                    <i className="ri-menu-line"></i>
                </div>
                <div className={styles['logo']}>
                    <div className={styles['logo-image']}>
                        <img src='/images/logo.png' alt="youtube-logo" />
                    </div>
                    <div className={styles['logo-text']}>
                        YouTube
                    </div>
                </div>
            </div>

            <div className={styles['search-container']}>
                <div className={styles['search-box']}>
                    <form>
                        <input type='text' placeholder='Search' />
                    </form>
                    <button className={styles['search']}><i className="ri-search-line"></i></button>
                </div>
                <button className={styles['mic']}><i className="ri-mic-fill"></i></button>
            </div>

            <div className={styles['profile-container']}>
                <i className="ri-video-add-line"></i>
                <i className="ri-notification-2-fill"></i>
                <div className={styles['profile-box']}>
                    <img src="https://www.silcharmunicipality.in/wp-content/uploads/2021/02/male-face-768x768.jpg" alt="profile-logo" />
                </div>
            </div>
        </div>
    )
}

export default Header;