import React from "react";

import Header from "./components/layout/Header";
import Main from "./components/layout/Main";
import Footer from "./components/layout/Footer";

import Slider from "./components/section/Slider";
import Image from "./components/section/Image";
import ImageText from "./components/section/ImageText";
import Card from "./components/section/Card";
import Banner from "./components/section/Banner";
import Text from "./components/section/Text";

function App() {
  return (
    <div>
      <Header fonts="nexon" />
      <Main>
        <Slider attr={["nexon", "section", "gray", "container"]} />
        <Image attr={["section", "nexon", "container"]} />
        <ImageText attr={["nexon", "section", "gray", "container"]} />
        <Card attr={["section", "nexon", "container"]} />
        <Banner attr={["nexon"]} />
        <Text attr={["section", "nexon", "container"]} />
      </Main>
      <Footer attr={["section", "nexon", "gray", "container"]} />
    </div>
  );
}
export default App;
