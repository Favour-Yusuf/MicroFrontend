import React from "react";
import styled from "styled-components";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>Module.</Logo>
        <Navbar>
          <Nav>Data Fetching</Nav>
          <Nav>toDo</Nav>
          <Nav>State management</Nav>
        </Navbar>
        <Buttons>
          <SignUp>SignUp</SignUp>
          <SignIn>SignIn</SignIn>
        </Buttons>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  height: 70px;
  width: 100%;
  background-color: #653667;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
const Wrapper = styled.div`
  height: 70px;
  width: 90%;
  background-color: #653667;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.div`
  font-size: 27px;
  font-weight: 600;
`;
const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 40%;
  cursor: pointer;

  :hover {
    transform: scale(0.9);
  }
`;
const Nav = styled.div``;
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 20%;
`;
const SignUp = styled.button`
  height: 30px;
  width: 120px;
  border-radius: 5px;
  color: black;
`;
const SignIn = styled.button`
  height: 30px;
  width: 120px;
  border-radius: 5px;
  color: black;
`;
