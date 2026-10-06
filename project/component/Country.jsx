import { use,useState } from "react";
import Countries from "./Countries";
import "../src/App.css";


const Country = ({countrypromise}) => {
    const countriesdata=use(countrypromise)
    const countries=countriesdata.countries
    const[visited,setVisted]=useState([])
    function visithandle(ccn3){
        setVisted(prev=> prev.includes(ccn3)? prev.filter(id=>id!==ccn3):[...prev,ccn3])
    }
  
    return (
        <div className="card">

           {
            countries.map(country=> <Countries key={country.ccn3} isVisited={visited.includes(country.ccn3)} visithandle={visithandle} country={country}></Countries>)
           }
           
            
        </div>
    );
};

export default Country;