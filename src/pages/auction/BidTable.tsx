import React, { useEffect, useState } from 'react'
import styles from './auction.module.css'
import '../types'


function BidTable() {

    const [bidData, setBidData] = useState([]);

    useEffect(() => {
        // async function getData() {

        const getData = async () => {
            try {
                const h = await fetch('https://api.jikan.moe/v4/top/anime?limit=7');
                const hj = await h.json();
                setBidData(hj.data);

            } catch (e) {
                console.log("ERROR: ", e);
            }
        }

        // if (bidData.length == 0)
        getData();

    }, []);

    return (

        <div className={styles.boardContainer}>
            <table className={styles.board}>
                <thead><tr>
                    <th className={styles.thead}>Bid Count</th>
                    <th className={styles.thead}>Bidder</th>
                    <th className={styles.thead}>Bid Amount</th>
                </tr>
                </thead>
                <tbody className={styles.tbody}>
                    {/* <tr >
                        <td className={styles.tdata}>1</td>
                        <td className={styles.tdata}>Ankush Raj</td>
                        <td className={styles.tdata}>5678</td>
                    </tr> */}
                    {
                        bidData.map((val, key) =>
                            <tr key={key}>
                                <td className={styles.tdata}>{val['mal_id']}</td>
                                <td className={styles.tdata}>{val['title_english']}</td>
                                <td className={styles.tdata}>{val['score']}</td>
                            </tr>

                        )
                    }
                </tbody>

            </table>
            <button className={styles.bidBtn} type='submit'>BID</button>
        </div>

    )
}

export default BidTable
