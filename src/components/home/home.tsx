import styles from './home.module.css'

function Dashboard() {
    return (
        <div id={styles.main}>
            <div className={styles.name}>
                <h2>STEP UP YOUR</h2>
                <h1><span>FANTASY </span>WITH US</h1>
                <p className={styles.details}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus voluptates iure unde sit, alias quis, placeat et sunt odit deserunt dolor ab laudantium libero nulla aliquid at nihil cum consequuntur.</p>
            </div>
        </div>
    )
}

export default Dashboard
