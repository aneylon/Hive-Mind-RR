import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Help/Contact";
import FAQ from "./Components/Help/FAQ";
import NotFound from "./Components/NotFound/NotFound";
import Todos from "./Components/Todo/Todos";
import SignIn from "./Components/Auth/SignIn";
import SignUp from "./Components/Auth/SignUp";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/Layout/RootLayout";
import Admin from "./Components/Admin/Admin";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="todo" element={<Todos />} />
        <Route
          path="signin"
          element={!user ? <SignIn /> : <Navigate to="/" />}
        />
        <Route
          path="signup"
          element={!user ? <SignUp /> : <Navigate to="/" />}
        />
        <Route path="admin" element={user ? <Admin /> : <Navigate to="/" />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
