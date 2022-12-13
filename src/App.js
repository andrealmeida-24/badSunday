import Home from "./Routes/Home/home.component";
import SignIn from "./Routes/Sign In/sign-in.component";
import Navigation from "./Routes/Navigation/navigation.component";
import { Routes, Route } from "react-router-dom";

const Shop = () => {
  return <h1>I'm a Shop!</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
