import React, { useState } from 'react'
import styles from './navbar.module.css';
import Link from 'next/link';

function Navbar() {

    const [nav, setnav] = useState(false);
    const changeBackground = () => {
        if (window.scrollY >= 50) {
            setnav(true);
        }
        else {
            setnav(false);
        }
    }
    // window.addEventListener('scroll', changeBackground);


    return (
        // <nav id={styles.navbarBox} className={nav ? "nav active" : "nav"}>
        <nav id={styles.navbarBox} className={nav ? "active" : "nav"}>
            {/* <Link to="#" className='logo'>
                <img src={logo} alt=''></img>
            </Link> */}
            <input className={styles.menuBtn} type='checkbox' id={styles.menuBtn} />
            <label className={styles.menuIcon} htmlFor={styles.menuBtn}>
                <span className={styles.navIcon}></span>
            </label>
            <ul className={styles.menu}>
                <li><Link href='main'>Home</Link></li>
                <li><Link href='#'>Sports</Link></li>
                <li><Link href='#'>Auction</Link></li>
                <li><Link href='#'>Fantasy</Link></li>
                <li className={styles.end}><Link href='login'>Login</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
