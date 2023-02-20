import Home from "./routes/home/home.components";
import SignIn from "./routes/sign-in/sign-in.components";
import {Routes, Route} from "react-router-dom";
import Navigation from "./routes/navigation/navigation-meni";

const Shop = () => {
  return <h2>I am shop component</h2>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
