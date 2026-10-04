import { use } from "react";

const Country = ({countrypromise}) => {
    const countriesdata=use(countrypromise)
    const countries=countriesdata.countries
    console.log(countries.name)
    return (
        <div>
            <p>length: {countries.length}</p>
            <p>name:</p>
            <p>flag:</p>
            
        </div>
    );
};

export default Country;