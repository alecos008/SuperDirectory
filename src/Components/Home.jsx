import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {

    state = {
        heroeName: "",
        stateLifted: false
    }

    addHeroeProperty = (e) => {

        let key = e.target.name
        let value = e.target.value
        this.setState({ [key]: value }) // Matches the name="something" with the e.target.name
    }


    render() {
        console.log("Home Component", this.state)

        return (
            <React.Fragment>

                <div className="container">

                    <div className="row py-5">
                        <div className="col-lg-9 mx-auto text-white text-center HomeText">
                            <h1 className="display-4" >Search for Heroes</h1>
                            <p className="lead mb-0">Collection of superhero Data</p>
                        </div>
                    </div>


                    <div className="row mb-5">
                        <div className="col-lg-8 mx-auto">
                            <h5 className="font-weight-light mb-4 font-italic text-white HomeText">Remember to type correctly!</h5>
                            <div className="bg-white p-5 rounded shadow">

                                <form onSubmit={(e) => this.props.handleSubmit(this.state, e)}>
                                    <div className="input-group mb-4">
                                        <input onChange={this.addHeroeProperty} name="heroeName" type="search" placeholder="Cape Crusaders, Web Crawlers, Iron Dudes, we got them all..." aria-describedby="button-addon5" className="form-control" />
                                        <Link to= {`Heroes/${this.state.heroeName}`}>
                                            <div className="input-group-append">
                                                <button id="button-addon5" type="submit" className="btn btn-primary"><i className="fa fa-search" />Search</button>
                                            </div>
                                        </Link>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>


                </div>


            </React.Fragment>
        );
    }
}

export default Home;




