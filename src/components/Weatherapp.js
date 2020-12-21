import react, {useState, useEffect} from "react";
import "./css/style.css"

const Weatherapp = () => {

        const [city, setCity] = useState(null);
        const [search, setSearch] = useState("Waling");

        useEffect(() => {
            const fetchApi = async () => {
                const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=77f787eed4b60c1a142da7cbff053a8a`
                const response = await fetch(url);
                const resJson = await  response.json(); 
                // console.log(resJson);
                setCity(resJson.main);
            }

            fetchApi();
        },[search    ])

    return(
        <>
            <div className="box">
                <div className="inputData">
                    <input
                    type="search"
                    value={search}
                    className="inputField"
                    onChange={ (event) => { setSearch(event.target.value) } } />
                </div>

                {!city ? (
                    <p className="errorMsg">No data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                            <i className="fas fa-street-view"></i>{search}
                            </h2>
                            <h1 className="weather">
                            {city.temp}<sup>o</sup>C
                            </h1>
                            <h3 className="weathermin_max"> Min: {city.temp_min}<sup>o</sup>C | Max: {city.temp_max}<sup>o</sup>C</h3>
                        </div>

                        <div className="wave -one"></div>
                        <div className="wave -two"></div>
                        <div className="wave -three"></div>
                    </div>
                )}  

            </div>
        </>
    )
}

export default Weatherapp;