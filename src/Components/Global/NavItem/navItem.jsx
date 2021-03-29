import {NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';


const NavItem = ({text, url = "#"}) => (
    <Nav>
        <NavLink to={url} activeClassName="active">{text}</NavLink>
    </Nav>
)

export default NavItem;
