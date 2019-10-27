import React, { Component } from 'react'
import { NavLink as Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
           <nav>
      
              <ul className = "nav--links">
                  <li>
                      <Link to = "/about" activeClassName='active'>About</Link>

                  </li>
                  <li>
                      <Link to = "/companies" activeClassName='active'>Companies</Link>

                  </li>    
                  <li className = "logo">
                  <Link to = "/" activeClassName='active'>damiir</Link> </li>
                  <li>
                      <Link to = "/field">Change</Link>

                  </li>
                    <li>
                      <Link to = "/r" activeClassName="active">Contact</Link>

                  </li>
              </ul>
            </nav>
        )
    }
}