import { useContext } from "react";
import "./ToggleSwitch.css";
import CurrentTemperatureUnitContext from "../../contexts/CurrentTemperatureUnitContext.js";

const ToggleSwitch = () => {
  const handleChange = (e) => {
    if (currentTemperatureUnit === "C") handleToggleSwitchChange("F");
    if (currentTemperatureUnit === "F") handleToggleSwitchChange("C");
  };

  const { currentTemperatureUnit, handleToggleSwitchChange } = useContext(
    CurrentTemperatureUnitContext
  );

  // console.log(currentTemperatureUnit);

  return (
    <label className="switch">
      <input className="switch__box" type="checkbox" onChange={handleChange} />
      <span
        className={
          currentTemperatureUnit === "F"
            ? "switch__slider switch__slider-F"
            : "switch__slider switch__slider-C"
        }
      ></span>
      <p
        className={`switch__temp-F ${
          currentTemperatureUnit === "F" && "switch__active"
        } `}
      >
        F
      </p>
      <p
        className={`switch__temp-C ${
          currentTemperatureUnit === "C" && "switch__active"
        } `}
      >
        C
      </p>
    </label>
  );
};

export default ToggleSwitch;

// not video
// const ToggleSwitch = () => {
//   const { currentTemperatureUnit, handleToggleSwichChange } = useContext(
//     CurrentTemperatureUnitContext
//   );

//   const [isChecked, setIsChecked] = useState(currentTemperatureUnit === "C");
//   useEffect(
//     () => setIsChecked(currentTemperatureUnit === "C"),
//     [currentTemperatureUnit]
//   );

//   return (
//     <div className="toggle-switch">
//       <label className="toggle-switch__label">
//         <input
//           className="toggle-switch_checkbox toggle-switch__checkbox_state_hidden"
//           type="checkbox"
//           name="toggle-switch-chekcbox"
//           value={currentTemperatureUnit}
//           onChange={handleToggleSwichChange}
//           checked={isChecked}
//         />
//         <span className="toggle-switch__checkbox toggle-switch__checkbox_state_visible" />
//       </label>
//     </div>
//   );
// };
