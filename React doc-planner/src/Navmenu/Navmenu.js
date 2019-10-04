import React from "react";
import "./navmenu.css";


const NavMenu = (props) => {
    return (
        <div className="docplanner-list">
      <img class="logo-docplanner" src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
        alt="Docplanner Group"></img>
        <div className="menu">
            {props.listofitems.map((el, i) =>
                <div className="dropdown">
                    <a href={el.link} >
                        {el.title}
                    </a>
                    {el.items && <div className="dropdown-content"><ul className="navmenu"> {el.items.map(elem => <li>{elem}</li>)}</ul></div> }
                </div>
            )}
        </div>
        </div>
    );
}

export default NavMenu;