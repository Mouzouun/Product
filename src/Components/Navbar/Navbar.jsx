import React,  {useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Datacenter/Datacenter'



export default function Navbar() {
  const{cards}=useContext(Context)

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand text-white" href="/">Product finder</a>
        </div>
        <ul className="navbar-nav">

            <li className="nav-item active">
              <Link className="nav-link mr-5 text-white" to='/Addnew' >Add new</Link>
            </li>
            <li className="nav-item active">
              <Link className="nav-link mr-5 text-white" to='/AddToCard'>Card ({cards.length})</Link>
            </li>
          </ul>
      </nav>

    )
}
