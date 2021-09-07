import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import certificate20Filled from '@iconify-icons/fluent/certificate-20-filled';
import educationIcon from '@iconify-icons/cil/education';
import devIcon from '@iconify-icons/fa-brands/dev';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function Path() {
    const { colorMode } = useColorMode();
    const mainBachelor = ['C++ OOP programming',' Database Administration',' Relational Databases Management Systems (MySQL)', 'Networking (OSI network model)', 'Operating Systems (Linux) & bash scripitng', 'Web Development (HTML5/CSS3/JavaScript/PHP)', 'Client-Server Architecture', 'UML', 'English/French (TEC)']
    const mainDeust = ['Maths (analysis & algebre)', 'computer science','data structures & algorithm', 'C programming language', 'Database & SQL', 'physique & chemistry']
    const mainTecheno = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'JavaScript', 'React', 'Redux', 'Scrum', 'SQL', 'PostgreSQL', 'Git', 'Github', 'Contabo Server']
    const mainStack = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'Angular', 'TypeScript', 'Unit testing', 'Test Driven Devlopment', 'SQLite', 'PostegreSQL', 'POSTMAN', 'git', 'GitHub']
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

    var mainTec = mainTecheno.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    var mainTecStack = mainStack.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });

    return (
      <Box mt={100}>
        <Center>
          <Heading p={50}>
            education & Experience
          </Heading>
        </Center>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="27 july 2021 - present (2 months)"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Full stack developer
              </h3>
              <h3 className="vertical-timeline-element-subtitle">at Atkana IT consulting </h3>
              <p>Development of new application from scratch & scaling them along with Test Driven development 
              methodology, development of a responsive Front-end with UX practice & Backend interface.
              </p>
              <p>
              The technologies i'm working with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTecStack}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="08 mars 2021 - 31 aug 2021 (6 months)"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={devIcon} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <h3 style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>
                Full stack developer
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At PULL4YOU SERVICE S.A.R.L</h4>
              <p>Development and deployment of a Web application that handles the delivery management of the collection of parcels.</p>
              <p>
                The technologies i'm working with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="Sep 2020 - Jun 2021"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold', color:`mode.${colorMode}.text`}}>
                Bachelor in computer engineering <br/>
              </h3>
              <h4 className="vertical-timeline-element-subtitle">At Faculty of science and techenologie of Tangier</h4>
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
              <h3 className="vertical-timeline-element-title" style={{ textAlign: "left", marginBottom: "4px", fontWeight: 'bold'}}>DEUST MIP</h3>
              <h4 className="vertical-timeline-element-subtitle">Faculty of science and techenologie of Tangier</h4>
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