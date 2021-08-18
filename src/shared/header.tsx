import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
      <>
        
      <header id="page-topbar">
        <div className="navbar-header">
          <div className="d-flex">
            {/* LOGO */}
            <div className="navbar-brand-box">
              <Link to="index.html" className="logo logo-dark">
                <span className="logo-sm">
                  <img src="assets/images/logo.svg" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-dark.png" alt="" height={17} />
                </span>
              </Link>
              <Link to="index.html" className="logo logo-light">
                <span className="logo-sm">
                  <img src="assets/images/logo-light.svg" alt="" height={22} />
                </span>
                <span className="logo-lg">
                  <img src="assets/images/logo-light.png" alt="" height={19} />
                </span>
              </Link>
            </div>
         
            {/* App Search*/}
            <form className="app-search d-none d-lg-block">
              <div className="position-relative">
                <input type="text" className="form-control" placeholder="Search..." />
                <span className="bx bx-search-alt" />
              </div>
            </form>
            
          </div>
          <div className="d-flex">
            <div className="dropdown d-inline-block d-lg-none ms-2">
              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="mdi mdi-magnify" />
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">
                <form className="p-3">
                  <div className="form-group m-0">
                    <div className="input-group">
                      <input type="text" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                      <div className="input-group-append">
                        <button className="btn btn-primary" type="submit"><i className="mdi mdi-magnify" /></button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
           
          
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item noti-icon waves-effect" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="bx bx-bell bx-tada" />
                <span className="badge bg-danger rounded-pill">3</span>
              </button>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                <div className="p-3">
                  <div className="row align-items-center">
                    <div className="col">
                      <h6 className="m-0" key="t-notifications"> Notifications </h6>
                    </div>
                    <div className="col-auto">
                      <Link to="#!" className="small" key="t-view-all"> View All</Link>
                    </div>
                  </div>
                </div>
                <div data-simplebar style={{maxHeight: '230px'}}>
                  <Link to="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-primary rounded-circle font-size-16">
                          <i className="bx bx-cart" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-your-order">Your order is placed</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                          <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <img src="assets/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">James Lemire</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-simplified">It will seem like simplified English.</p>
                          <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <div className="avatar-xs me-3">
                        <span className="avatar-title bg-success rounded-circle font-size-16">
                          <i className="bx bx-badge-check" />
                        </span>
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-1" key="t-shipped">Your item is shipped</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-grammer">If several languages coalesce the grammar</p>
                          <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-min-ago">3 min ago</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <Link to="#" className="text-reset notification-item">
                    <div className="d-flex">
                      <img src="assets/images/users/avatar-4.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                      <div className="flex-grow-1">
                        <h6 className="mb-1">Salena Layfield</h6>
                        <div className="font-size-12 text-muted">
                          <p className="mb-1" key="t-occidental">As a skeptical Cambridge friend of mine occidental.</p>
                          <p className="mb-0"><i className="mdi mdi-clock-outline" /> <span key="t-hours-ago">1 hours ago</span></p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-2 border-top d-grid">
                  <Link className="btn btn-sm btn-link font-size-14 text-center" to="#">
                    <i className="mdi mdi-arrow-right-circle me-1" /> <span key="t-view-more">View More..</span> 
                  </Link>
                </div>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item waves-effect" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img className="rounded-circle header-profile-user" src="assets/images/users/avatar-1.jpg" alt="Header Avatar" />
                <span className="d-none d-xl-inline-block ms-1" key="t-henry">Henry</span>
                <i className="mdi mdi-chevron-down d-none d-xl-inline-block" />
              </button>
              <div className="dropdown-menu dropdown-menu-end show">
                {/* item*/}
                <Link className="dropdown-item" to="#"><i className="bx bx-user font-size-16 align-middle me-1" /> <span key="t-profile">Profile</span></Link>
                <Link className="dropdown-item" to="#"><i className="bx bx-wallet font-size-16 align-middle me-1" /> <span key="t-my-wallet">My Wallet</span></Link>
                <Link className="dropdown-item d-block" to="#"><span className="badge bg-success float-end">11</span><i className="bx bx-wrench font-size-16 align-middle me-1" /> <span key="t-settings">Settings</span></Link>
                <Link className="dropdown-item" to="#"><i className="bx bx-lock-open font-size-16 align-middle me-1" /> <span key="t-lock-screen">Lock screen</span></Link>
                <div className="dropdown-divider" />
                <Link className="dropdown-item text-danger" to="#"><i className="bx bx-power-off font-size-16 align-middle me-1 text-danger" /> <span key="t-logout">Logout</span></Link>
              </div>
            </div>
            <div className="dropdown d-inline-block">
              <button type="button" className="btn header-item noti-icon right-bar-toggle waves-effect">
                <i className="bx bx-cog bx-spin" />
              </button>
            </div>
          </div>
        </div>
      </header>


      </>
    );
}
