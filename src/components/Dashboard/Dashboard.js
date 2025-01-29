import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  const [dataList, setdataList] = useState([]);
  const[isSideBarOpen,setisSideBarOpen]=useState(true);
  const toggleSideBar=()=>{
    setisSideBarOpen(!isSideBarOpen);
  }
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/dashboard")
      .then((res) => setdataList(res.data))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div className={styles.dashboard_main_wrapper}>
      <div className={styles.left_panel}>
        <Sidebar isOpen={isSideBarOpen}/>
      </div>
      <div className={styles.right_panel}>
        <Header ontoggleSideBar={toggleSideBar}/>
        {dataList.map((item) => (
          <div key={item.id}>
            {item.title}
            {item.value}
            {item.profit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
