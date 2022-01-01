import PropsType from 'prop-types';
import { ScatterBoxLoader } from "react-awesome-loaders";
import { Center } from '@chakra-ui/react';

export const BoxLoader = ({ show, children }) => {
  // calculated the window height to center the loader
  const windowHeight = window.innerHeight;
  const loaderHeight = windowHeight / 3;

  return (
    <>
      {show ? 
        <Center className="loader" mt={loaderHeight}>
          <ScatterBoxLoader
            primaryColor={"#FFA500"}
            background={"#FFA500"}
            desktopSize={'128px'}
            mobileSize={'64px'}
          />
        </Center> : children}
    </>
  );
};

BoxLoader.propTypes = {
  show: PropsType.bool,
  children: PropsType.node
}