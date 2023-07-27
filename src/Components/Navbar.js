import React, {Component} from "react";

class Navbar extends Component{

    constructor(){
        super()
            this.state = {
                scrollTop:0
        }
    }

    handleScroll = (e) => {
        this.setState({scrollTop: e.currentTarget.scrollTop});
        console.log(this.state.scrollTop)
    }


    render(){




        return(
        <div>
            <nav className="navbar navbar-expand-lg w-100" onScroll={this.handleScroll}>
            <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="ß">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Features</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="">Pricing</a>
            </li>
        </ul>
            </div>
            </div>
        </nav>
            </div>
        )
    }
}

export default Navbar;
