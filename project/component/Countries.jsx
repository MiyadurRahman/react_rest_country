

const Countries = ({country}) => {
    console.log(country)
    return (
        <div>
            <h4>name:{country.name.common}</h4>
           <img src={country.flags.flags.png} alt="" />
            
        </div>
    );
};

export default Countries;