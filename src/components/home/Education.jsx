import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
// eslint-disable-next-line
import { Box, Stack, useColorMode, Center, Heading } from "@chakra-ui/react"
  
export default function Experience() {
    // const { colorMode } = useColorMode();
    return (
      <Box mt={250}>
        {/* <Stack spacing={12} p={6} pt={200}> */}

        {/* <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} p={5} boxShadow="dark-lg" shadow="md" borderWidth="1px" borderRadius="16" > */}
            {/* <Stack direction={["column", "row"]} spacing="24px"> */}
            <Center>
              <Heading p={50}>
                My education
              </Heading>
            </Center>
            <VerticalTimeline>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Bachelor in Computer Engeenering</h3>
                <h4 className="vertical-timeline-element-subtitle">Faculty of science and techenologie of Tangier</h4>
                <p>
                Activities and Societies: C / (C++ OOP programming), Database Administration, Relational Databases Management Systems (MySQL), Networking (OSI network model), Operating Systems (Linux), Web Development (HTML5/CSS3/JavaScript/PHP), Client-Server Architecture, UML, Anglais
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)'}}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2017 - 2020"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">DEUST MIP</h3>
                <h4 className="vertical-timeline-element-subtitle">Faculty of science and techenologie of Tangier</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                // icon={<WorkIcon />}
              >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                  Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
              </VerticalTimelineElement>
            </VerticalTimeline>
      </Box>
    );
  }