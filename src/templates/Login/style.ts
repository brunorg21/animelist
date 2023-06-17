import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: ${props => props.theme.colors.mainBg};
`

export const Register = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${props => props.theme.border.radius.md};
  width: 45rem;
  height: 60rem;
  background-color: ${props => props.theme.colors.white};

  h1 {
    font-size: ${props => props.theme.font.sizes.xxlarge};
    border-bottom: 2px solid ${props => props.theme.colors.darkGray};
    color: ${props => props.theme.colors.mainBg};
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`