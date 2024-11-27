import { useContext } from "react";
import { ThemeContext } from "../store/context";

export default function Header() {
  const {theme} = useContext(ThemeContext)
  return (
    <header className={theme ? 'dark' : ''}>
      <h1>Header</h1>
    </header>
  );
}
