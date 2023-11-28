import { Routes, Route } from "react-router-dom";
import Sales from "src/pages/Sales";
import Users from "src/pages/Users";
import Register from "src/pages/Register";
import SearchUser from "src/pages/SearchUser";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Sales />} />
      <Route path="/users" element={<Users />} />
      <Route path="/register" element={<Register />} />
      <Route path="/search-user" element={<SearchUser />} />
    </Routes>
  );
}
