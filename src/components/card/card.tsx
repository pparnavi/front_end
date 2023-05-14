import React from 'react';
import Image from 'next/image';
import CardBox from './cardbox';
import styles from './card.module.css'
import i1 from '../../../public/images/1.svg';
import i2 from '../../../public/images/2.svg';
import i3 from '../../../public/images/3.svg';
import i4 from '../../../public/images/4.svg';

function Card() {
    return (
        <div id={styles.features}>
            <h1>FANTASY</h1>
            <div className={styles.sportsContainer}>
                <CardBox image={i1} title="Basketball" />
                <CardBox image={i2} title="Football" />
                <CardBox image={i3} title="Cricket" />
                <CardBox image={i4} title="Basketball" />
            </div>
        </div>
    )
}

export default Card;

