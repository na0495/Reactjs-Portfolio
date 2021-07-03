import GitHubCalendar from "react-github-calendar";

import { Box } from "@material-ui/core"

function GitHub() {
  return (
    <Box style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }}>
        Days I <strong >Code</strong>
      </h1>
      <GitHubCalendar
        username="na0495"
        blockSize={15}
        blockMargin={5}
        // theme={`mode.${colorMode}.Github`}
        fontSize={16}
      />
    </Box>
  );
}

export default GitHub;
