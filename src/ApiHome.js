import React, { useEffect, useState } from 'react'
import './ApiHome.css'

function ApiHome() {

    const [temp, settemp] = useState(32);
    const [humi, sethumi] = useState(33);

    useEffect(() => {
      let isMounted = true;
      if (isMounted){
        fetchApi()
      }
      return () =>{isMounted =false}
      }, []);

    const fetchApi = async () => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=da9632b074404234dd33c1ce53888bd8`;
        const response = await fetch(URL);
        const resJson = await response.json();
        settemp(Math.trunc(resJson.main.temp));  //Decimal Removal Fucntion
        sethumi(resJson.main.humidity)
      };

    return (
        <div className = "API_home">
        <h3>{temp} ℃</h3>
        
        <h3>{humi} %</h3>
        
        </div>
    )
}

export default ApiHome
