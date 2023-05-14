import React, { useEffect, useState } from 'react'
import styles from './leaderboard.module.css'
import axios from 'axios'
import { log } from 'console';

function Leaderboard() {
    const [leaderData, setLeaderData] = useState([]);

    useEffect(() => {
        // async function getData() {

        const getData = async () => {
            try {
                // const h = await axios.get('https://api.jikan.moe/v4/top/anime?limit=5');
                const h = await fetch('https://api.jikan.moe/v4/top/anime?limit=11');
                // const h = await fetch('http://localhost:3003/getData');
                const hj = await h.json();

                console.log("h: ", hj.data)
                setLeaderData(hj.data);
                console.log(leaderData);

            } catch (e) {
                console.log(e);
            }
        }

        // if (!leaderData)
        getData();

    }, []);


    return (
        <div className={styles.boardContainer}>
            <table className={styles.board}>
                <thead>
                    <tr>
                        <th className={styles.thead}>Rank</th>
                        <th className={styles.thead}>Name</th>
                        <th className={styles.thead}>Point</th>
                    </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {
                        leaderData && leaderData.map((val, key) => {
                            return (
                                <tr key={val['mal_id']}>
                                    <td className={styles.tdata}>{val['mal_id']}</td>
                                    <td className={styles.tdata}>{val['title_english']}</td>
                                    <td className={styles.tdata}>{val['score']}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard
