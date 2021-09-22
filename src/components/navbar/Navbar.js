import './Navbar.css';
import avatar from '../../assets/avatar.svg';

const Navbar = ({ sidebarOpen, openSidebar}) => {
    return(
        <nav className="navbar">
            <div className="nav_icon" onClick={() => openSidebar()}>
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>

            <div className="navbar__left">
                <i className="fa fa-check-square"></i>
                <i className="fa fa-comment"></i>
                <i className="fa fa-envelope"></i>
                <i className="fa fa-calendar"></i>
                <i className="fa fa-star-o"></i>
            </div>

            <div className="navbar__right">
                <p href="#">English</p>
                
                <a href="#">
                    <i className="fa fa-bell-o"></i>
                </a>
                
                <a href="#">
                    <i className="fa fa-search"></i>
                </a>

                <div className="navbar__right__user">
                    <p id="name">John Doe</p>
                    <p href="#" id="status">Available</p>
                </div>

                <a href="#" id="avatar">
                    <img width="30" src={avatar} alt="avatar" />
                </a>
            </div>
        </nav>
    )
}

export default Navbar;