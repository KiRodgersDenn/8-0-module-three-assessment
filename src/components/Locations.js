import React from "react";
// import "./App.css";

class Location extends React.Component {

constructor(){
        super()

        this.state = {
            locations: [],
            selectedLocation: false,
        };
    }

    fetchLocations = () => {
      fetch("https://ghibliapi.herokuapp.com/locations")
      .then((res) => res.json())
      .then((data) => {
          this.setState({
            locations: data,
          });
      });
    };

    componentDidMount = () => {
        this.fetchLocations();
    };

    handleOnClick = () => {
        this.setState({
            selectedLocation:true,
        })

    }

render() {
let locationDeets = this.state.locations.map((location) => {
    return (
        <div className="locations">
            <li>
            <h3>Name: {location.name}</h3>
            <h3>Climate: {location.climate}</h3>
            <h3>Terrain: {location.terrain}</h3>
            </li>
        </div>
    )
})
    return (
    <div className="locations">
        <h1>List of Locations</h1>
        <button onClick={this.handleOnClick}>Show Locations</button>
        { locationDeets }
    </div>
    );
}
}
        

export default Location