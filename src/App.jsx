import { useEffect, useState } from "react";
import CountryCard from './components/CountryCard'

const BASEURL = "https://restcountries.com/v3.1"

function App() {
  const [countries, setCountries] = useState([]);
  const [capital, setCapital] = useState();

  useEffect(() => {
    const fetchData = async ()  => {
      const url = capital 
      ? `${BASEURL}/capital/${capital}`
      : `${BASEURL}/all`

      const data = await fetch(url);
      const parsedData = await data.json();

      setCountries(parsedData);
    }

    fetchData()
    
  }, [capital])
  

  return (
    <div className="App">

      <select id="capitalSelect" onChange={e => setCapital(e.target.value)} >
        <option value="">Select a capital</option>
        <option value="Tokyo">Tokyo, Japan</option>
        <option value="Paris">Paris, France</option>
        <option value="London">London, United Kingdom</option>
        <option value="Beijing">Beijing, China</option>
        <option value="Moscow">Moscow, Russia</option>
        <option value="Washington">Washington D.C., United States</option>
        <option value="Berlin">Berlin, Germany</option>
        <option value="Brasilia">Brasília, Brazil</option>
        <option value="Cairo">Cairo, Egypt</option>
        <option value="New Delhi">New Delhi, India</option>
      </select>

      {countries &&
        countries.map( country => {
            return <CountryCard country={country} key={country.name.common} />
        })
      }

    </div>
  );
}

export default App;
