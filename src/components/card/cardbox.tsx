import React from "react";
import styles from './card.module.css'
import Link from "next/link";

function CardBox(props: any) {
    return (
        <div className={styles.sportBox}>
            <Link href="">{props.route}</Link>
            <div className={styles.sBImg}>
                <img src={props.image} alt=''></img>
            </div>
            <div className={styles.sBText}>
                <h2>{props.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Nobis, non!</p>
            </div>
        </div>
    );
}

export default CardBox;
