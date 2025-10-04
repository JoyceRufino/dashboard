import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Classes from "./pages/Classes";
import Exams from "./pages/Exams";
import Users from "./pages/Users";
import Financial from "./pages/Financial";
import Students from "./pages/Students/pages";
import Instructors from "./pages/Instructors";
import Partnerships from "./pages/Partnerships";
import StudentDetail from "./pages/Students/pages/StudentDetail";

export const paths = {
  home: "/",
  dashboard: "/dashboard",
  students: "/students",
  studentDetail: "/students/:uuid_student", // rota com parâmetro dinâmico
  instructors: "/instructors",
  classes: "/classes",
  exams: "/exams",
  users: "/users",
  financial: "/financial",
  partnerships: "/partnerships",
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={paths.home} element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={paths.dashboard} element={<Dashboard />} />
        <Route path={paths.students} element={<Students />} />
        <Route path={paths.studentDetail} element={<StudentDetail />} />
        <Route path={paths.instructors} element={<Instructors />} />
        <Route path={paths.classes} element={<Classes />} />
        <Route path={paths.exams} element={<Exams />} />
        <Route path={paths.users} element={<Users />} />
        <Route path={paths.financial} element={<Financial />} />
        <Route path={paths.partnerships} element={<Partnerships />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
