import { Box, SimpleGrid, useColorMode } from '@chakra-ui/react'
import { FcDoughnutChart, FcMultipleDevices, FcPrivacy, FcTimeline } from 'react-icons/fc'
import { Feature } from './Feature'

export const Posts = () => {
  const { colorMode } = useColorMode()
  return (
    <Box as="section" maxW="5xl" mx="auto" py="12" px={{ base: '6', md: '8' }} bg={`mode.${colorMode}.background`} >
        {/* <Image src={property.imageUrl} alt={property.imageAlt} /> */}
        <SimpleGrid columns={{ base: 1, md: 2 }} spacingX="10" spacingY={{ base: '8', md: '14' }}>
            <Feature title="Secure by default" icon={<FcPrivacy />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
            </Feature>
            <Feature title="Always up to date" icon={<FcTimeline />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
            </Feature>
            <Feature title="Incredible statistics" icon={<FcDoughnutChart />}>
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
            takimata sanctus.
            </Feature>
            <Feature title="Support for multiple devices" icon={<FcMultipleDevices />}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore.
            </Feature>
        </SimpleGrid>
    </Box>
  )

}



