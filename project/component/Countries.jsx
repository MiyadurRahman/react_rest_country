import "../src/App.css"


const Countries = ({country,visithandle,isVisited}) => {
    console.log(country)
    return (
        <div className={`child ${isVisited ? "visited-card" : ""}`}>
            <h4>name:{country.name.common}</h4>
           <img src={country.flags.png} alt="" />
        
            <p className={isVisited? "visited":"not-visited"}>{isVisited? "Visited":"Not Visited"}</p>
            <p>{country.area}</p>
            <button onClick={()=>visithandle(country.ccn3)}>{isVisited? "Visited":"Visit"}</button>
        </div>
    );
};

export default Countries;