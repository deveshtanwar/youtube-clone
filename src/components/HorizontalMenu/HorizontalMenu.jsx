import React from 'react';
import styles from './Horizontal.module.css';
import { categories } from '../../utils/Horizontal-Menu.json';

const HorizontalMenu = () => {

    return (
        <div className={styles['horizontal-menu']}>
            <div className={styles['wrapper']}>
                {categories.map((category,index) =>
                    <div className={styles['chips']} key={index}>{category}</div>
                )}
            </div>
        </div>
    )
}

export default HorizontalMenu;