import "../src/App.css"


const Countries = ({country,visithandle}) => {
    console.log(country)
    return (
        <div className="child">
            <h4>name:{country.name.common}</h4>
           <img src={country.flags.flags.png} alt="" />
            <button onClick={visithandle}{}>visited</button>
        </div>
    );
};

export default Countries;