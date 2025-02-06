import React, { Component } from "react";
import { Routes, Route, useParams } from "react-router";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import PaletteList from "./PaletteList";

function App() {
  const findPalette = (id) => seedColors.find((palette) => palette.id === id);

  const PaletteWrapper = () => {
    const { id } = useParams();

    const palette = generatePalette(findPalette(id));

    return <Palette palette={palette} />;
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaletteList palettes={seedColors} />} />
        <Route path="/palette/:id" element={<PaletteWrapper />} />
      </Routes>

      {/* <Link to='/palette'>See Palette</Link> */}
      {/* <Palette palette={generatePalette(seedPalettes[4])} /> */}
    </div>
  );
}

export default App;
