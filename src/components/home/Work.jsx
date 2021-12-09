// import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { Icon } from '@iconify/react';
import educationIcon from '@iconify-icons/cil/education';
import devIcon from '@iconify-icons/fa-brands/dev';
import "react-vertical-timeline-component/style.min.css";
import { Box, Badge , Center, Heading, useColorMode } from "@chakra-ui/react"

export default function Work() {
    const { colorMode } = useColorMode();
    // const [durantion, setDurantion] = useState(0);
    // const today = new Date()
    const mainDevStack = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Pytest', 'Python  3rd party libraires', 'Angular', 'TypeScript', 'Unit testing', 'Scrum', 'SQLite', 'PostegreSQL', 'POSTMAN', 'git', 'GitHub', 'azure', 'postgis', 'geojson']
    const mainTecheno = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'JavaScript', 'React', 'Redux', 'Scrum', 'SQL', 'PostgreSQL', 'Git', 'Github', 'Contabo Server']
    const mainStack = ['Python', 'Django', 'Django Rest Framework', 'RESTful API', 'Python  3rd party libraires', 'Angular', 'TypeScript', 'Unit testing', 'Test Driven Devlopment', 'SQLite', 'PostegreSQL', 'POSTMAN', 'git', 'GitHub']
    var mainTec = mainTecheno.map((p, i) => {
      return (
        <Badge fontSize="0.8em" ml={1} borderWidth="1px" p={1} m={1}  borderRadius="10" key={i}>
          {p}
        </Badge>
      );
    });
    var mainDevSt = mainDevStack.map((p, i) => {
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
    // function monthDiff(d1, d2) {
    //   var months;
    //   months = (d2.getFullYear() - d1.getFullYear()) * 12;
    //   months -= d1.getMonth();
    //   months += d2.getMonth();
    //   return months <= 0 ? 0 : months;
    // }
    // useEffect(() => {
    //   setDurantion(monthDiff(new Date('27/07/2021'), today))
    // }, [setDurantion])
    

    return (
      <Box mt={100}>
        <Center>
          <Box backgroundColor={`mode.${colorMode}.background`} sx={{ border: 'solid black 3px', borderRadius: 15, marginBottom: 10}} >
            <Heading p={50}>
              Work Exprience 
            </Heading>
          </Box>
        </Center>
        <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            date="28 septembre 2021 - present"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={devIcon} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                Back-end / DevOps engineering 
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at SOWIT
              </Heading>
              <p>Development, deployment & maintaining of different SOWIT application including Back-end & web application .</p>
              <p>
                The technologies i'm working with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainDevSt}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'transparent'}}
            contentArrowStyle={{ borderRight: '7px solid' }}
            // date={`27 july 2021 - present (${durantion})`}
            date={`27 july 2021 - 31 septembre 2021`}
            dateClassName="vertical-timeline-element-date--work"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={educationIcon} />}
          >
            <Box p={15}  sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                Full stack developer
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at Atkana IT consulting
              </Heading>
              <p fontSize="xl">Development of web application from scratch & scaling it along with Test Driven development 
              methodology, development of a responsive Front-end with UX practice with Angular & Backend service with Django.
              </p>
              <p>
              The technologies i'm working with on that project are: 
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
            date="01 mars 2021 - 31 aug 2021 (6 months)"
            iconStyle={{ background: '#CAC0A5'}}
            icon={<Icon icon={devIcon} />}
          >
            <Box p={15} sx={{ background: `mode.${colorMode}.background`}} boxShadow="dark-lg" shadow="md" borderWidth="1px"  borderRadius="16">
              <Heading as="h3" size="lg">
                Full stack developer
              </Heading>
              <Heading as="h4" size="md" color="orange" pt={2}>
                at PULL4YOU SERVICE S.A.R.L
              </Heading>
              <p>Development and deployment of a Web application that handles the delivery management of the collection of parcels.</p>
              <p>
                The technologies i'm working with : 
              <div style={{ textAlign: "left", marginBottom: "4px", padding: "4px" }}>
                {mainTec}
              </div>
              </p>
            </Box>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    );
  }