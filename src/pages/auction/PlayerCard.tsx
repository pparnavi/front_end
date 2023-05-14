import React, { useEffect, useState } from 'react'
import styles from './auction.module.css'
import axios from 'axios';
import { log } from 'console';


function PlayerCard() {

    const playerDetails = {
        id: 1,
        name: "Mahendra Singh Dhoni",
        born: "7 July 1981",
        country: "India",
        height: "1.75",
        role: ["Wicket-keeper", "batsman"],
        batting: "Right-handed",
        bowling: "Right-arm medium",
        runs: 5074,
        wickets: 1000,
        catches: 2000,
        image: 'https://i.pinimg.com/originals/9a/97/07/9a97075acc01469c7a8034475da369e2.jpg'
    };

    const [players, setPlayers] = useState([]);

    const getPlayers = async () => {
        try {
            var response = await fetch("http://localhost:3003/getPlayers");
            const resData = await response.json();
            setPlayers(resData.data);
        }
        catch (e) {
            console.log(e);

        }
    }

    useEffect(() => {
        getPlayers();
    }, [])

    return (
        <div className={styles.card}>
            <div className={styles.cardItem} key={playerDetails.id}>
                <div className={styles.cardInner}>
                    <img className={styles.cImg} src={playerDetails.image} alt="" />
                    <div className={styles.userName}>
                        <h1>{playerDetails.name}</h1>
                    </div>
                    <div className={styles.detailBox}>
                        {/* {
                            players.map((val, key) => {
                                return (
                                    <div key={val['mal_id']} className={styles.playerDetail}>
                                        <p className={styles.userStatsValue}>{val['title_english']}</p>
                                    </div>
                                )
                            }
                            )
                        } */}

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Height: </span>
                            <span className={styles.userStatsValue}>{playerDetails.height} m</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Born: </span>
                            <span className={styles.userStatsValue}>{playerDetails.born}</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Country: </span>
                            <span className={styles.userStatsValue}>{playerDetails.country}</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Batting: </span>
                            <span className={styles.userStatsValue}>{playerDetails.batting}</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Bowling: </span>
                            <span className={styles.userStatsValue}>{playerDetails.bowling}</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Runs: </span>
                            <span className={styles.userStatsValue}>{playerDetails.runs} runs</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Wickets: </span>
                            <span className={styles.userStatsValue}>{playerDetails.wickets}</span>
                        </div>

                        <div className={styles.playerDetail}>
                            <span className={styles.userStats}>Catches: </span>
                            <span className={styles.userStatsValue}>{playerDetails.catches}</span>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlayerCard
