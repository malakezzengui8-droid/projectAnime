import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Anime from "./pages/Anime";
import AnimeDetails from "./pages/AnimeDetails";
import Characters from "./pages/Characters";
import CharacterDetails from "./pages/CharacterDetails";
import Favorites from "./pages/Favorites";
import MyRatings from "./pages/MyRatings";
import MyLibrary from "./pages/MyLibrary";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/anime/:id" element={<AnimeDetails />} />
      <Route path="/anime/:id/characters" element={<Characters />} />
      <Route path="/characters/:id" element={<CharacterDetails />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/my-ratings" element={<MyRatings />} />
      <Route path="/my-library" element={<MyLibrary />} />
      <Route path="/dashboard" element={<Dashboard />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default AppRoutes;