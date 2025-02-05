import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./Palette.css";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

export default class Pallete extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }
  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => {
      return <ColorBox background={color.hex} name={color.name} />;
    });

    return (
      <div className="Palette">
        <Slider
          defaultValue={this.state.level}
          min={100}
          max={900}
          onAfterChange={this.changeLevel}
          step={100}
        />
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
