import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Recipe from "./pages/Recipe";

function App() {
  return(
    <div>
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg flex flex-col items-center">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/recipe/:id" element={<Recipe />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App;
