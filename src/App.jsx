import AppRoutes from "./routes";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <>
      <AppRoutes />
      <Toaster position="top-center" />
    </>
  );
};

export default App;
