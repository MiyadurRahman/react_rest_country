import { use,useState} from "react";
import Countries from "./Countries";
import "../src/App.css";


const Country = ({countrypromise, setVisitedCount}) => {
    const countriesdata=use(countrypromise)
    const countries=countriesdata.countries
    const [visited,setVisited]=useState([])

    function visithandle(ccn3){
        setVisited(prev=> {
            if (prev.includes(ccn3)) {
                setVisitedCount(count => count - 1)
                return prev.filter(id=>id!==ccn3)
            } else {
                setVisitedCount(count => count + 1)
                return [...prev, ccn3]
            }
        })
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