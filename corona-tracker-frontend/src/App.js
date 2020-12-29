
import './App.css';
import React, { Component } from 'react';
import axios from 'axios';
import { Table,Alert } from 'react-bootstrap';

class App extends Component {

  state = {
    countryWiseData: []
 }


  componentWillMount() {
    axios.get('http://localhost:8080/coronatracker/statisticsbycountry').then((response) => {
      //console.log(JSON.stringify(response.data))
      this.setState({
        countryWiseData: response.data.data
      })
    });
   
  }

  render() {

    let countryWiseData = this.state.countryWiseData.map((country) => {
      return(
            <tr key={country.country_code}>
              <td>{country.location}</td>
              <td>{country.confirmed}</td>
              <td>{country.dead}</td>
              <td>{country.recovered}</td>
            </tr>

      )

    });

    return (
      <div className="App">
          <div className="container fluid">
          <Alert variant="primary">
          Coronavirus Statistics By Country
          </Alert>
            <Table striped bordered hover>
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed Cases</th>
                <th>Deaths</th>
                <th>Recovered</th>
              </tr>
            </thead>
  
            <tbody>
               {countryWiseData}
            </tbody>
            </Table>
        </div>
      </div>
    );
  }
  
}

export default App;
