import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Exams from "./pages/Exams";
import Users from "./pages/Users";
import Financial from "./pages/Financial";
import Students from "./pages/Students";
import Instructors from "./pages/Instructors";
import Partnerships from "./pages/Partnerships";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="students" element={<Students />} />
        <Route path="instructors" element={<Instructors />} />
        <Route path="classes" element={<Classes />} />
        <Route path="exams" element={<Exams />} />
        <Route path="users" element={<Users />} />
        <Route path="financial" element={<Financial />} />
        <Route path="partnerships" element={<Partnerships />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
