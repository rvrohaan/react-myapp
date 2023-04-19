import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll"
import ErrorBoundary from "../Components/ErrorBoundary";
import DropDown from "../Components/DropDown";

class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfiled: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots: users})
        });
    }

    onSearchChange = (event) => {
        this.setState({ searchfiled: event.target.value })
    }

    onSelectChange = (event) => {
        this.setState({ searchfiled: event.target.value })
    }

    render(){

        if ( this.state.searchfiled === 'All'){
            this.setState({ searchfiled: ''})
        }

        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfiled.toLowerCase())
        })

        if (this.state.robots.length === 0 ){
            <h1>LOADING</h1>
        } else {
            return (
                <div className="tc">
                    <h1>Robot Friends</h1>
                    <div className="fl w-50 pa2">
                    <SearchBox searchChange={this.onSearchChange} />
                    </div>
                    <DropDown selectChange={this.onSelectChange} robots={this.state.robots} />
                    <div className="fl w-100 pa2">
                        <Scroll>
                        <ErrorBoundary>
                            <CardList robots={filteredRobots} />
                        </ErrorBoundary>
                    </Scroll>
                    </div>
                </div>
        );
        }
    }
}

export default App;