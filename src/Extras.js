import React, {useEffect, useState} from 'react';
import './Extras.css';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import CloudIcon from '@material-ui/icons/Cloud';

function Extras() {
    const value = "Chennai";
    const [value_temp, setvalue_temp] = useState(33);
    const value2 = "Mumbai";
    const [value2_temp,setvalue2_temp] = useState(23);
    let Outside = "Willing to Go Outside???";
    let Suggest = "💥Stay Home, Stay Safe💥";
    
   useEffect(() => {
      let isMounted = true;
      if (isMounted){
        fetchApi();
        fetchMumbaiApi();
      }
      return () =>{isMounted =false};
      });
    

    const fetchApi = async () => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric&appid=da9632b074404234dd33c1ce53888bd8`;
        const response = await fetch(URL);
        const resJson = await response.json();
        setvalue_temp(Math.trunc(resJson.main.temp));  //Decimal Removal Fucntion
      };
    const fetchMumbaiApi = async () => {
        const URL = `http://api.openweathermap.org/data/2.5/weather?q=${value2}&units=metric&appid=da9632b074404234dd33c1ce53888bd8`;
        const response = await fetch(URL);
        const resJson = await response.json();
        setvalue2_temp(Math.trunc(resJson.main.temp));  //Decimal Removal Fucntion
      };

    return (
        <div className="extras">
            <div className="Info__Panal">
                <Brightness7Icon className="Sun__icon"/>
                <h3 className = "Status__report">{Outside}</h3>
                <p style={{color:"#5fd1e8"}}className="Suggestions"> {Suggest} </p>
            </div>
            <div className="location__panal">
                <p style={{color:"#5fd1e8" , fontWeight:'bold'}}>CITIES</p>
                <div className="Environment">
                    <div className="environment__status">
                        <CloudIcon/>    
                    </div>
                    <div className="city__details">
                        <p> {value} </p>
                        <p>{value_temp} ℃</p>
                    </div>

                </div>
                <div className="Environment">
                    <div className="environment__status">
                        <CloudIcon/>    
                    </div>
                    <div className="city__details">
                        <p>{value2} </p>
                        <p>{value2_temp} ℃</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Extras
