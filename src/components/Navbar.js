import React from "react"
import { NavLink } from "react-router-dom";

export default function Navbar({ dogs }){
    const links = dogs.map((dog) => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ));
    return(
        <nav>
            <NavLink to="/dogs" end>
                Home
            </NavLink>
            {links}
        </nav>
    )
}