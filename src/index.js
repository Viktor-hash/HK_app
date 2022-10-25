import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Learncantonese from "./learn_cantonese/learn_cantonese";
import Home from "./Home/Home";
import Videos from "./Videos/Videos";
import News from "./News/News";

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="Home" element={<Home />} />
        <Route path="Learncantonese" element={<Learncantonese />} />
        <Route path="Videos" element={<Videos />} />
        <Route path="News" element={<News />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
