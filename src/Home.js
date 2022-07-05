import React, { useEffect, useState } from 'react';
import './Home.css';
import Card from './Card';
import humidity from './assets/humidity.gif';
import day from './assets/Day.gif';
import night from './assets/night.gif';
import sunny from './assets/BS.gif';
import cloudy from './assets/cloudsONLY.gif';
import sc from './assets/SwC.gif';
import firebase from './firebase';
import ApiHome from './ApiHome';

function Home() {

    var d = new Date();
    var n = d.getHours();
  
    const [StatusH, setStatusH] = useState([]);
    const [StatusT, setStatusT] = useState([]);

    useEffect(() => {
      const myitemsH = firebase.database().ref("Humidity");
        myitemsH.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusH(value);
      });

      const myitemsT = firebase.database().ref("Temperature");
      myitemsT.on("value", (snapshot) => {
        let value = snapshot.val();
        setStatusT(value);
      });

    }, []);

    return (
        <div className = 'home'>
            <div className="Data_Overiew">
                <Card Status__Pic={humidity}  Value={StatusH}  Unit = "%" title="Humidity" />
                  <div className="Current__Environment">
                      {n>= 6 && n<20 ? <img src={day} alt=""/> : <img src={night} alt=""/> }
                      <h3><ApiHome /></h3>
                      <p style={{color : "#000", "font-weight" : "bold" }}>New Delhi</p>
                  </div>

                <Card Status__Pic={
                    StatusH >=0 && StatusH <=35 ? cloudy
                    : StatusH >35 && StatusH <= 50?
                    sc
                    : StatusH >50 && StatusH <=100?
                    sunny
                    :false
                  }
                  
                Value={StatusT} 
                Unit = "℃"
                title="Temperature" />

            </div>
        </div>
    )
}

export default Home
