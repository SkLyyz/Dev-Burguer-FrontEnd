import { navLinks } from "./navLinks.jsx";
import Logo from "../../assets/Logo.svg";
import { SignOutIcon } from "@phosphor-icons/react";
import { Container, NavLinkContainer, Footer, NavLink } from "./styles.js";
import { useUser } from "../../hooks/UserContext";
import { useResolvedPath } from "react-router-dom";

export function SideNavAdmin()  {

    const logout = useUser()
    const { pathname } = useResolvedPath()

    return (
        <Container>
            <img src={Logo} alt="Logo DevBurguer" />
            <NavLinkContainer>
                {navLinks.map((link) => (
                    <NavLink key={link.id} to={link.path} $isActive={pathname === link.path}>
                        {link.icon}
                        <span>{link.label}</span>
                    </NavLink>
                ))}
            </NavLinkContainer>
            <Footer>
                <NavLink to="/login" onClick={logout}>
                    <SignOutIcon /> 
                    <p>Sair</p>
                </NavLink>
            </Footer>
        </Container>
    )
}