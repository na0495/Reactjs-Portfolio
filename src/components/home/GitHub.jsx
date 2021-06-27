import GitHubCalendar from "react-github-calendar";
import { useColorMode } from "@chakra-ui/react"

function GitHub() {
  const { colorMode } = useColorMode();
  return (
    <div style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 style={{ paddingBottom: "20px" }}>
        Days I <strong >Code</strong>
      </h1>
      <GitHubCalendar
        username="na0495"
        blockSize={15}
        blockMargin={5}
        theme={`mode.${colorMode}.Github`}
        fontSize={16}
      />
    </div>
  );
}

export default GitHub;
