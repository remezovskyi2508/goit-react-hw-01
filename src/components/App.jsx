import "./App.css";
// src/components/App.jsx

import Product from "./Product";
import { Alert } from "./Alert";

export default function App() {
  return (
    <>
      <Alert variant="error">Bad news</Alert>

      <Alert variant="success">Bad news</Alert>
      <Alert variant="error">Bad news</Alert>
      <Alert variant="error">Bad news</Alert>
    </>
  );
}
