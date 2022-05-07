import React from 'react'
import {
  Link
} from "react-router-dom";
const Sidebar = () => {
 
  return (
    <>
    <div className="left-side-menu">
  <div className="h-100" data-simplebar>
    {/*- Sidemenu */}
    <div id="sidebar-menu">
      <ul id="side-menu">
        <li>
          <a href="#sidebarDashboards" data-bs-toggle="collapse">
            <i data-feather="airplay" />
            <span className="badge bg-success rounded-pill float-end">4</span>
            <span> Dashboards </span>
          </a>
          <div className="collapse" id="sidebarDashboards">
            <ul className="nav-second-level">
              <li>
                <a href="/">Dashboard </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
  <Link to="/account">
    <i data-feather="calendar" />
    <span> Profile</span>
  </Link>
</li>

      </ul>
    </div>
    {/* End Sidebar */}
    <div className="clearfix" />
  </div>
  {/* Sidebar -left */}
</div>

    </>
  )
}

export default Sidebar
