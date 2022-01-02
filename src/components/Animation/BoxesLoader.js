import { BoxesLoader } from "react-awesome-loaders";
import { Center } from '@chakra-ui/react';

export const BoxesLoaderComponent = () => {
    // calculated the window height to center the loader
    const windowHeight = window.innerHeight;
    const loaderHeight = windowHeight / 3;
  return (
    <>
      <Center className="loader" mt={loaderHeight}>
        <BoxesLoader
            boxColor={"#FFA500"}
            // background={`mode.${colorMode}.background`}
            style={{ marginBottom: "20px" }}
            desktopSize={"128px"}
            mobileSize={"80px"}
        />
      </Center>
    </>
  );
};