import React from 'react';
import styles from "./Header.module.css";
import { FaBars } from 'react-icons/fa';

const Header = ({ontoggleSideBar}) => {
  return (
    <div className={styles.header}>
      <div className={styles.left_panel}>
        <button onClick={ontoggleSideBar}><FaBars size={24} color="#FFFFFF" /></button>
        <h1>Dashboard</h1>
      </div>
      <div className={styles.right_panel}>
        <p>About</p>
        <p>Notifications</p>
      </div>
    </div>
  )
}

export default Header
