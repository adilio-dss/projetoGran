import './Sidebar.css';
import logo from '../../assets/logo.svg';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    return (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
            <div className="sidebar__title">
                <div className="sidebar__img">
                    <img src={logo} alt="logo" />
                </div>

                <i onClick={() => closeSidebar()}
                    className="fa fa-times"
                    id="sidebarIcon"
                    aria-hidden="true"
                ></i>
            </div> 

            <div className="sidebar__menu">
                <div className="sidebar__link active_menu_link">
                    <i className="fa fa-home"></i>
                    <a href="#">Dashboard</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-genderless"></i>
                    <a href="#">eCommerce</a>
                </div>
                <h2>APPS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-envelope"></i>
                    <a href="#">Email</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-comment"></i>
                    <a href="#">Chat</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-check-square"></i>
                    <a href="#">Todo</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-calendar"></i>
                    <a href="#">Calendar</a>
                </div>
                <h2>UI ELEMENTS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-table"></i>
                    <a href="#">Grid</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-tint"></i>
                    <a href="#">Colors</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-credit-card"></i>
                    <a href="#">Card</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-th-large"></i>
                    <a href="#">Table</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-archive"></i>
                    <a href="#">Components</a>
                </div>
                <h2>FORMS</h2>
                <div className="sidebar__link">
                    <i className="fa fa-clipboard"></i>
                    <a href="#">Form Elements</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-folder-o"></i>
                    <a href="#">Form Layouts</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-file-text-o"></i>
                    <a href="#">Form Wizard</a>
                </div>
                <div className="sidebar__link">
                    <i className="fa fa-check-circle-o"></i>
                    <a href="#">Form Validation</a>
                </div>
            </div>

        </div>
    )
}

export default Sidebar;