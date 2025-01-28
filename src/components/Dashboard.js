import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const[dataList,setdataList]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:5000/api/dashboard").then(res=>setdataList(res.data)).catch(error=>console.log("error",error));
    },[])

    return (
        <div>
            {dataList.map((item)=>(
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default Dashboard;
