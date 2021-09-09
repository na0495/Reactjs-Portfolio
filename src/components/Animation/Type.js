import React from "react";
import Typewriter from "typewriter-effect";
// import useLocales from "../../hooks/useLocales";

function Type() {
  // const { translate } = useLocales();
  return (
    <Typewriter
      options={{
        strings: [
          "Software Developer",
          "Full Stack Developer",
          "Open Source Contributor",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;


// import React from "react";
// import Typewriter from "typewriter-effect";
// import useLocales from "../../hooks/useLocales";

// function Type() {
//   const { translate } = useLocales();
//   return (
//     <Typewriter
//       options={{
//         strings: [
//           `${translate('type.software_developer')}`,
//           `${translate('type.full_stack')}`,
//           `${translate('type.open_source')}`,
//         ],
//         autoStart: true,
//         loop: true,
//         deleteSpeed: 50,
//       }}
//     />
//   );
// }

// export default Type;
