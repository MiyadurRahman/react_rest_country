import { use } from "react";
import Countries from "./Countries";
import "../src/App.css";


const Country = ({countrypromise}) => {
    const countriesdata=use(countrypromise)
    const countries=countriesdata.countries
  
    return (
        <div className="card">

           {
            countries.map(country=> <Countries key={country.ccn3} country={country}></Countries>)
           }
           
            
        </div>
    );
};

export default Country;