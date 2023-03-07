import Home from "./routes/home/home.components";
import Autentication from "./routes/autentication/autentication";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-meni";
import Shop from "./routes/shop/shop.component";
import Checkout from "./routes/checkout/checkout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="login" element={<Autentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
