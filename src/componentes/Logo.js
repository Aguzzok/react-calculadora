import React from "react";

const Logo = ({ imagen }) => (

      <div className="logo-contenedor">
        <img className="logo"
        src={require(`../imagenes/${imagen}.png`)}
        alt="logo freecodecamp"/>
      </div>

);



export default Logo;