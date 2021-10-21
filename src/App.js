import { useState } from 'react'


function App() {

  const [city, setCity] = useState("")

  const [weatherForecast, setWeatherForecast] = useState(null)

  const searchForecastWeather = () =>{
    fetch(`http://api.weatherapi.com/v1/current.json?key=e751ea9cf5bc4fcbbb3225428211810&q=${city}&lang=pt`).then( (response)=>{
      if(response.status === 200){
        console.log(weatherForecast)
        return response.json()
    
      
      }
    } ).then( (data) => {
      setWeatherForecast(data)
      setCity('')
    
    } )
  }

  const handleCityChange = (event) =>{
    setCity(event.target.value)

  
  }


  return (

    <div>
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#search">Wheather</a>
    </nav>

    <main className="container" id="search">
      <div className="jumbotron">
        <h1>Verfique agora a previsão do tempo</h1>
        <p className="lead">
          Digite a sua cidade no campo abaixo e em seguida clique em pesquisar
        </p>

        <div className="mb-4">
          <div>
            <input type="text" className="form-control" value={city} onChange={handleCityChange}></input>
          </div>


        </div>
        <button className="btn btn-lg btn-primary" onClick={searchForecastWeather}>Pequisar</button>

        {
          weatherForecast ? (
            <div className="mt-4 d-flex align-items-center">
              <div className="col-sm-1">
                <img src={weatherForecast.current.condition.icon} alt="weather icon"></img>
              </div>
              <div>
                <h3>Hoje o dia está: {weatherForecast.current.condition.text}</h3>
                <h3>em {weatherForecast.location.name}, {weatherForecast.location.region}, {weatherForecast.location.country}</h3>
                <p className="lead">Temp: {weatherForecast.current.temp_c}, Ventos: {weatherForecast.current.wind_kph} km/h, Sensação de: {weatherForecast.current.feelslike_c}, Umidade do ar: {weatherForecast.current.humidity}</p>
                <p className="lead"></p>
              </div>

            </div>
          ) : null
        }
      </div>

    </main>

  </div>
  
  );
}

export default App;
