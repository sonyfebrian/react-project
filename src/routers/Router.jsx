import { Routes, Route } from "react-router-dom";
import Sales from "src/pages/Sales";
import Users from "src/pages/Users";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Sales />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
}
