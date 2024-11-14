import ChakraUiProvider from "@components/providers/ChakraUiProvider";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ChakraUiProvider>{children}</ChakraUiProvider>
);

export default Providers;
