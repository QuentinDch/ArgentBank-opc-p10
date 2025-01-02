import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";

// Redux
import store from "./redux/store";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/signIn", element: <SignIn /> },
      { path: "/user", element: <User /> },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
