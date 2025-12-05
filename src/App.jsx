import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Window from "./components/Window/Window";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import ResourceDetailsPage from "./pages/ResourceDetails/ResourceDetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/categories" replace />} />

        <Route
          path="/categories"
          element={
            <Window
              title="404 Retro Library - Categories"
              address="http://www.404-retro-library.com/category.html"
              sidebarVariant="categories"
            >
              <CategoriesPage />
            </Window>
          }
        />

        <Route
          path="/resource/:id"
          element={
            <Window
              title="404 Retro Library - Resource"
              address="http://www.404-retro-library.com/resource.html"
              sidebarVariant="resource"
            >
              <ResourceDetailsPage />
            </Window>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
