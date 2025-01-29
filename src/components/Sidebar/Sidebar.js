import React, { useState } from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({isOpen}) => {
  return (
    <div className={`${styles.dashboard_main} ${isOpen ? styles.open : ""}`}>
      <div className={styles.top_panel}>
        <h1>Dashboard</h1>
        <div className={styles.profile}>
          <ul>
            <li>My Profile</li>
            <li>Edit Profile</li>
          </ul>
        </div>
      </div>
      <div className={styles.bottom_panel}>
        <ul>
          <li>Dashboard</li>
          <li>Pricing</li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

