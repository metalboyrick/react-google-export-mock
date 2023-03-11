import { ChakraProvider } from "@chakra-ui/react";

import MainWindow from './sections/MainWindow';

function App() {
  return (
    <ChakraProvider>
      <MainWindow />
    </ChakraProvider>
  );
}

export default App;
