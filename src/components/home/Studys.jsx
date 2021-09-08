import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import certificate20Filled from '@iconify-icons/fluent/certificate-20-filled';
import educationIcon from '@iconify-icons/cil/education';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function Path() {
    const { colorMode } = useColorMode();
    const mainBachelor = ['C++ OOP programming',' Database Administration',' Relational Databases Management Systems (MySQL)', 'Networking (OSI network model)', 'Operating Systems (Linux) & bash scripitng', 'Web Development (HTML5/CSS3/JavaScript/PHP)', 'Client-Server Architecture', 'UML', 'English/French (TEC)']
    const mainDeust = ['Maths (analysis & algebre)', 'computer science','data structures & algorithm', 'C programming language', 'Database & SQL', 'physique & chemistry']
    var mainBach = mainBachelor.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainDeu = mainDeust.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 3px', borderRadius: 15, marginBottom: 10}} >
            <Heading p={50}>
              Education Path
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
             <Heading as="h3" size="lg">
                Bachelor of Science <br/> in computer engineering
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at Faculty of science and techenologie of Tangier (FSTT)
              </Heading>
              <p>
                Bachelor main programme : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainBach}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2017 - Jun 2020"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={certificate20Filled} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                Deust MIP <br/>(Math, Informatique, Physics)
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at Faculty of science and techenologie of Tangier (FSTT)
              </Heading>
              <p>
                The main programme : 
                <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                  {mainDeu}
                </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    );
  }