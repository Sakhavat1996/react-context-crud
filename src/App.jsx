import { useContext } from "react";
import Layout from "./components/Layout";
import ThemeContextProvider, { ThemeContext } from "./store/context";

function App() {
  return (
    <>
      <ThemeContextProvider>
        <Layout />
      </ThemeContextProvider>
    </>
  );
}

export default App;
