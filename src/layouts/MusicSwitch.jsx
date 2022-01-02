import React from 'react';
// chakra-ui
import {
  Box,
  IconButton
} from '@chakra-ui/react';
// icons
import { FaPlay, FaPause } from 'react-icons/fa';
// sound effects
import useSound from "use-sound";
import chill from "../assets/audios/chill.mp3";


const iconProps = {
  variant: 'ghost',
  size: 'lg',
  isRound: true
};

const MusicSwitch = props => {

  // define useState for play or pause
  const [playMode, setPlayMode] = React.useState(true);

  // sound effects on click
  const [play, { stop }] = useSound(chill);
  
  const handleClick = () => {
    // check the playMode value to play to stop the music
    playMode ? play() : stop();
    setPlayMode(!playMode);
  };


  return (
    <>
      <Box
        p={4}
        sx={{ position: '-webkit-sticky', 
        // eslint-disable-next-line
        position: 'sticky', 
        top: '0',
        textAlign: 'right',
        zIndex: 3,
       }}
      >
        <IconButton
          boxShadow="dark-lg"
          aria-label="Color Mode"
          onClick={handleClick}
          icon={playMode === true ? <FaPlay /> : <FaPause />}
          size="lg"
          isRound={true}
          {...iconProps}
        />
      </Box>

    </>
  );
};

export default MusicSwitch;