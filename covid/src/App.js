import React, { useState, useEffect } from "react";
import { MenuItem, FormControl, Select, Card, CardContent } from "@material-ui/core";
import InfoBox from './InfoBox';
import Map from './Map';
import Table from './Table';
import './App.css';
import { sortData, prettyPrintStat } from "./utils";
import LineGraph from './LineGraph';
import numeral from 'numeral';
import "leaflet/dist/leaflet.css";

function App() {

   const [Countries, setCountries] = useState([]);
   const [Country, setCountry] = useState("worldwide");
   const [countryInfo, setCountryInfo] = useState({});
   const [tableData, setTableData]= useState([]);
   const [mapCenter, setMapCenter] = useState({ lat: 10, lng: 10 });
   const [mapZoom, setMapZoom] = useState(2);
   const [mapCountries, setMapCountries] = useState([]);
   const [casesType, setCasesType] = useState("cases");


   useEffect(()=> {
      fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then(data => {
        setCountryInfo(data);
      })
   }, [])

   useEffect(() => {
     
    const getCountriesData = async ()=>{
      await fetch("https://disease.sh/v3/covid-19/countries")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
      });
    }
    getCountriesData();
   }, [])

   const onCountryChange = async (event)=> {
    const countryCode = event.target.value;

    setCountry(countryCode);

    const url = countryCode === 'worldwide' ? 
        'https://disease.sh/v3/covid-19/all' : 
        `https://disease.sh/v3/covid-19/countries/${countryCode}`

        await fetch(url)
        .then((response) => response.json())
        .then(data => {
          setCountry(countryCode);
          setCountryInfo(data);

          setMapCenter({
            lat:data.countryInfo.lat,
            lng:data.countryInfo.long
          });
          
          setMapZoom(2);

        })
   }


  return (
    <div className="app">
      <div className="app__left">
        <div className="app__header">
        <h1> COVID-19 TRACKER</h1>
          <FormControl className="app__dropdown">
            <Select
              variant="outlined" onChange = { onCountryChange } value={ Country }>
              <MenuItem value="worldwide" >Worldwide</MenuItem>
              {Countries.map(country => (
                  <MenuItem value={ country.value }>{ country.name }</MenuItem>
                ))}
            </Select>
          </FormControl>
        </div>

        <div className="app__stats">
              <InfoBox
                  onClick={(e) => setCasesType("cases")}
                  title="Coronavirus Cases"
                  isRed
                  active={casesType === "cases"}
                  cases={prettyPrintStat(countryInfo.todayCases)}
                  total={numeral(countryInfo.cases).format("0.0a")}
                />

              <InfoBox
                onClick={(e) => setCasesType("recovered")}
                title="Recovered"
                active={casesType === "recovered"}
                cases={prettyPrintStat(countryInfo.todayRecovered)}
                total={numeral(countryInfo.recovered).format("0.0a")}
              />
              <InfoBox
                onClick={(e) => setCasesType("deaths")}
                title="Deaths"
                isRed
                active={casesType === "deaths"}
                cases={prettyPrintStat(countryInfo.todayDeaths)}
                total={numeral(countryInfo.deaths).format("0.0a")}
              />
        </div>

        <Map
          casesTypes={ casesType }
          countries={ mapCountries }
          center={ mapCenter }
          zoom={ mapZoom }
         />
      </div>
      <Card className="app__right">
          <CardContent>
            <h3>Live Cases by country</h3>
                <Table countries={ tableData } />

            <h3>Worldwide new { casesType }</h3>
                <LineGraph casesTypes={ casesType } />
            
          </CardContent>
      </Card>
      
    </div>
  );
}

export default App;
