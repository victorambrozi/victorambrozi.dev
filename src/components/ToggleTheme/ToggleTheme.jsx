import React from 'react';
import Switch from 'react-switch';

import { ThemeContext } from 'styled-components';

const ToggleTheme = () => {
  const { colors } = React.useContext(ThemeContext);
  return (

    <Switch 
      onChange={() => {}}
      checked={false}
      checkedIcon={false}
      uncheckedIcon={false}
      height={10}
      width={40}
      handleDiameter={15}
      offColor={colors.text} // unchecked
      onColor={colors.background} // checked
    />
  )
}

export default ToggleTheme;
