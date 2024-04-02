import Switch from "react-switch";

import { useDarkMode } from "../context/DarkModeContext";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <Switch
      onChange={toggleDarkMode}
      checked={isDarkMode}
      offColor="#fff"
      onColor="#fff"
      onHandleColor="#5964e0"
      offHandleColor="#5964e0"
      uncheckedIcon={false}
      checkedIcon={false}
    />
  );
}
