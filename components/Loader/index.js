import React from "react";

import { Container, Content } from "./style";

const text = "LOADING...".split("");

const Loader = () => (
  <Container>
    <Content>
      {text.map((t, k) => (
        <span key={k}>{t}</span>
      ))}
    </Content>
  </Container>
);

export default Loader;
