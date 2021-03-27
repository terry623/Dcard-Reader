import styled from "styled-components";

const Container = styled.div`
  box-sizing: border-box;
  padding: 24px;
  text-align: center;
`;

const Text = styled.span`
  font-size: 24px;
  margin: 0 8px;
  color: ${({ theme }) => theme.colors.primary};
`;

export { Container, Text };
