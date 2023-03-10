import { Routes, Route } from "react-router-dom";

import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Navigation/navigation.component";
import Authentication from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";

import Checkout from "./Routes/Checkout/checkout.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Routes>
  );
};

export default App;
