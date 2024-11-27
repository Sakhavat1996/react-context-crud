import { useContext } from "react";
import { ThemeContext } from "../store/context";

export default function Footer() {
  const {theme} = useContext(ThemeContext)
  return (
    <footer className={theme ? 'dark' : ''}>
        <h1>Footer</h1>
    </footer>
  );
}