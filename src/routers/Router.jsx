import { Routes, Route } from "react-router-dom";
import Sales from "src/pages/Sales";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Sales />} />
      <Route path="/users" element={<h1>tes</h1>} />
    </Routes>
  );
}
