import React from "react";

import "./themeFilter.css";

export default function ThemeFilter({ colorMode, setcolorMode }) {
  function onChange(e) {
    setcolorMode(e.target.value);
  }

  return (
    <select className="select" value={colorMode} onChange={onChange}>
      <option value="light">Light</option>
      <option value="neon">Neon</option>
    </select>
  );
}
