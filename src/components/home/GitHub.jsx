import GitHubCalendar from "react-github-calendar";

import { Box } from "@material-ui/core"

function GitHub() {
  return (
    <Box style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="na0495"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
      />
    </Box>
  );
}

export default GitHub;
