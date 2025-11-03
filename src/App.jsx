import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PropertyList from "./components/PropertyList.jsx";
import PropertyDetail from "./pages/PropertyDetail.jsx";

const App = () => {
  const router = createBrowserRouter([
    { index: true, element: <PropertyList /> },
    { path: "/property/:id", element: <PropertyDetail /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
