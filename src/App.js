import Home from "./routes/home/home.components";
import Autentication from "./routes/autentication/autentication";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-meni";
import Shop from "./routes/shop/shop.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Autentication />} />
      </Route>
    </Routes>
  );
};

export default App;
