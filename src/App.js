import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import {
  onAuthChangeListener,
  createUserDocFromAuth,
} from "./Utilities/Firebase/firebase.utils";

import Home from "./Routes/Home/home.component";
import Navigation from "./Routes/Navigation/navigation.component";
import Authentication from "./Routes/Authentication/authentication.component";
import Shop from "./Routes/Shop/shop.component";
import Checkout from "./Routes/Checkout/checkout.component";
import { setCurrentUser } from "./Redux_Store/User/user.action";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthChangeListener((user) => {
      if (user) {
        createUserDocFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

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
