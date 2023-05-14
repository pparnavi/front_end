import React, { useEffect, useState } from "react";
import styles from "./auction.module.css";
import axios from "axios";
import Leaderboard from "@/components/leaderboard/leaderboard";
import PlayerCard from "./PlayerCard";
import BidTable from "./BidTable";
import Squad from "./Squad";

// import image from '/home/pparnavi/product_phase/public/images/'

export default function AuctionScreen() {


    const [bidStatus, setBidStatus] = useState([])
    useEffect(() => {
        async function getBidData() {
            var h = await axios.get('http://localhost:3003/getBidData',)
            console.log(h)
            setBidStatus(h.data)
        }
        if (bidStatus.length == 0) getBidData()
    })

    return (
        <div className={styles.body}>
            <header className={styles.header}>
                <h1> HashedIn Box Cricket League</h1>
            </header>

            <div className={styles.container}>

                <PlayerCard />

                <BidTable />

                <Squad />


            </div>

        </div>
    );
};
