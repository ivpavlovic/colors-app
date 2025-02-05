import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";

export default class Pallete extends Component {
  render() {
    const colorBoxes = this.props.colors.map((color) => {
      return <ColorBox background={color.color} name={color.name} />;
    });

    return (
      <div className="Palette">
        {/*  Navbar goes here */}
        <div className="Palette-colors">
          {colorBoxes}
          {/* Bunch of color boxes */}
        </div>
        {/* footer eventualy */}
      </div>
    );
  }
}
