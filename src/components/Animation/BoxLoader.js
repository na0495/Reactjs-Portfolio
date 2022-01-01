import PropsType from 'prop-types';
import { ScatterBoxLoader } from "react-awesome-loaders";
import { Center, useColorMode } from '@chakra-ui/react';

export const BoxLoader = ({ show, children }) => {
  
  const { colorMode } = useColorMode();
  // calculated the window height to center the loader
  const windowHeight = window.innerHeight;
  const loaderHeight = windowHeight / 3;

  return (
    <>
      {show ? 
        <Center className="loader" mt={loaderHeight}>
          <ScatterBoxLoader
            primaryColor={"#FFA500"}
            background={`mode.${colorMode}.background`}
            desktopSize={'128px'}
            mobileSize={'64px'}
            duration={6}
          />
        </Center> : children}
    </>
  );
};

BoxLoader.propTypes = {
  show: PropsType.bool,
  children: PropsType.node
}