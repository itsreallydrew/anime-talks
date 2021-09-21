import styled from 'styled-components'
import { NavLink } from 'react-router-dom'


const Nav = styled.ul`

display: flex;
justify-content: space-around;
align-content: center;
margin-top: 15px;

a {
text-decoration: none;
}

li {
    color: white;
    margin: 0 15px;
    font-size: 18px;
    position: relative;
    list-style: none;
}

.current {
    li {
    border-bottom: 2px solid #39007a;
    }
}
`

function NavBar() {
    return (
        <Nav>
            <NavLink to='/anime' activeClassName='current'>
                Anime
            </NavLink>
            <NavLink to='/manga' activeClassName='current'>
                Manga
            </NavLink>
            <NavLink to='/about' activeClassName='current'>
                About
            </NavLink>
        </Nav>
    )
}

export default NavBar