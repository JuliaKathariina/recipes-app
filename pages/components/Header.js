import styled from "styled-components";

export default function Header (){
    return(
        <Styledheader>
            <Stylednav>
                <StyledNavbar>Startseite</StyledNavbar>
                <StyledNavbar>Startseite</StyledNavbar>
                <StyledNavbar>Startseite</StyledNavbar>
            </Stylednav>
        </Styledheader>
    );
}

const StyledNavbar = styled.a`
color: var(--text-secondary);
&:hover {
  cursor: pointer;
  color: var(--text-primary);
}
`;

const Styledheader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  height: 4rem;
  border-bottom: 1px solid var(--text-primary);
  background-color: var(--background-light);
`;
const Stylednav = styled.nav`
  display: flex;
  gap: 2rem;
`;