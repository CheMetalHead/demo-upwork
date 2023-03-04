import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./App.css";
import LeftBar from "./components/LeftBar/LeftBar";
import Navbar from "./components/NavBar/Navbar";
import PageHeader from "./components/PageHeader/PageHeader";
import Login from "./pages/Login/Login";
import Main from "./pages/Main/Main";
import Settings from "./pages/Settigs/Settings";

function App() {
  const Layout = () => {
    return (
      <div className="layout" style={{ paddng: "0 80px" }}>
        <Navbar />
        <PageHeader />
        <div style={{ display: "flex" }}>
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Main />,
        },
        {
          path: "/Settings",
          children: [
            {
              path: '',
              element: <Settings />,
            }
          ]
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
