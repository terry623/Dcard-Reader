import React from "react";

import { Container, Text } from "./style";

const loadingText = "LOADING...".split("");

const Loader = () => (
  <Container>
    {loadingText.map((t, k) => (
      <Text key={k}>{t}</Text>
    ))}
  </Container>
);

export default Loader;
