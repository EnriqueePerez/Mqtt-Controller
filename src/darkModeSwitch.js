// import React, { useRef } from "react";
// import "./darkModeSwitch.css";

// function Switch({ setDarkMode, checked, setChecked }) {
//   const ref = useRef(null);
//   function handleChange() {
//     setChecked(ref.current.checked);
//     setDarkMode(ref.current.checked);
//   }

//   return (
//     <div className="dark-mode">
//       <p className="dark-mode-title">Modo Oscuro</p>
//       <input
//         ref={ref}
//         onChange={handleChange}
//         type="checkbox"
//         checked={checked}
//         className="checkbox"
//         id="checkbox"
//       />
//       <label className="switch" htmlFor="checkbox">
//         Hola
//       </label>
//     </div>
//   );
// }

// export default Switch;
import React, { useRef } from "react";
import "./controlSwitch.css";

function Switch({ setDarkMode, checked, setChecked }) {
  const ref = useRef(null);
  function handleChange() {
    setChecked(ref.current.checked);
    setDarkMode(ref.current.checked);
  }

  return (
    <div className="control-switch">
      <p className="dark-mode-title">Modo Oscuro</p>
      <input
        ref={ref}
        onChange={handleChange}
        type="checkbox"
        checked={checked}
        className="checkbox"
        id="checkbox3"
      />
      <label className="switch" htmlFor="checkbox3"></label>
    </div>
  );
}

export default Switch;
