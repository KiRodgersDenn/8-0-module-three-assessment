import React from "react";
// // import "./App.css";


class People extends React.Component {
    constructor(){
        super();
        this.state={
            peopleArr: [],
        }
    }

    componentDidMount(){
        this.handlePeopleArr()
    }

    handlePeopleArr = () => {
        fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => res.json())
      .then((data) => {
          this.setState({
            peopleArr: data,
          });
      });
    };
    
}



export default People