import React, { Component } from 'react'

class Nav extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="www.showalinvest.com">Your Free Accountancy Portal</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="www.showalinvest.comnavbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="www.showalinvest.com">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.showalinvest.com">Features</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="www.showalinvest.com">Pricing</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="www.showalinvest.com">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </nav>
                
            </div>
        )
    }
}

export default Nav
