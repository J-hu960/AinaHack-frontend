
import './App.css'
import { ChakraProvider, createSystem, Box, VStack, Container } from "@chakra-ui/react"
import { config } from './styles/theme'
import Header from './components/Header';
import HeroBanner from './components/HeroBanner';
import Carousel from './components/Carrousel';
import Footer from './components/Footer';


function App() {
  
  
  const system = createSystem(config)
  

  return (
    <ChakraProvider value={system}>
      <Box color="white" w="100vw" minH="100vh" overflowX="hidden">
        <Header />
        <HeroBanner />
        <VStack spaceX={8} align="stretch" px={4} py={8}>
          <Carousel title="En tendència" />
          <Carousel title="Pensem que t'agradaràn" />
          <Carousel title="Novetats" />
        </VStack>
        <Footer />
      </Box>
    </ChakraProvider>
  )
}

export default App
