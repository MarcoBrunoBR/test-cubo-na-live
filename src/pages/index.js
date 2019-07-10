import React from "react"

import "../styles/settings/index.css"
import "../styles/tools/tricks.css"
import "../styles/generic/reset.css"
import "../styles/elements/base.css"

import HeaderCubo from "../components/HeaderCubo"
import CarouselCubo from "../components/CarouselCubo"
import TitleCubo from "../objects/TitleCubo";

export default () => (
  <>
    <HeaderCubo />
    <CarouselCubo />
    <section>
      <TitleCubo content="Serviços" section />
    </section>
  </>
)
