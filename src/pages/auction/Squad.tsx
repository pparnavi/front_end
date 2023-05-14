import React, { useEffect, useState } from 'react'
import styles from './auction.module.css'

function Squad() {
    const [squadData, setSquadData] = useState([]);

    useEffect(() => {

        const getData = async () => {
            try {
                const h = await fetch('https://api.jikan.moe/v4/top/anime?limit=13');
                const hj = await h.json();
                setSquadData(hj.data);

            } catch (e) {
                console.log("ERROR: ", e);
            }
        }

        // if (!squadData)
        getData();

    }, []);

    return (
        <div className={styles.teamContiner}>
            <h1 className={styles.team}>Your Squad</h1>
            <div className={styles.teamMemberList}>
                {
                    squadData.map((val, key) => {
                        return (
                            <div key={val['mal_id']} className={styles.teamNameList}>
                                <p className={styles.teamName}>{val['title_english']}</p>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}

export default Squad
