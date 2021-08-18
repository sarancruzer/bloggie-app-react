import React from "react";
import { Link } from "react-router-dom";



export const Sidebar = () => {
  
  

  const handleClick = () => {
  }



    return (
      <>
      
      <div className="vertical-menu">
        <div data-simplebar className="h-100">
          {/*- Sidemenu */}
          <div id="sidebar-menu">
            {/* Left Menu Start */}
            <ul className="metismenu list-unstyled" id="side-menu">
              <li className="menu-title" key="t-menu">Menu</li>
              <li>
                <Link to="#" className="waves-effect">
                  <i className="bx bx-home-circle" /><span className="badge rounded-pill bg-info float-end">04</span>
                  <span key="t-dashboards">Dashboards</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="/dashboard" key="1" >Default</Link></li>
                  <li><Link to="/employee" key="2" >Saas</Link></li>
                  <li><Link to="/employee/list" key="3" >Crypto</Link></li>
                  <li><Link to="/employee/create" key="4" >Blog</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-layout" />
                  <span key="t-layouts">Layouts</span>
                </Link>
                <ul className="sub-menu" >
                  <li>
                    <Link to="#" className="has-arrow" key="t-vertical">Vertical</Link>
                    <ul className="sub-menu" >
                      <li><Link to="layouts-light-sidebar.html" key="t-light-sidebar">Light Sidebar</Link></li>
                      <li><Link to="layouts-compact-sidebar.html" key="t-compact-sidebar">Compact Sidebar</Link></li>
                      <li><Link to="layouts-icon-sidebar.html" key="t-icon-sidebar">Icon Sidebar</Link></li>
                      <li><Link to="layouts-boxed.html" key="t-boxed-width">Boxed Width</Link></li>
                      <li><Link to="layouts-preloader.html" key="t-preloader">Preloader</Link></li>
                      <li><Link to="layouts-colored-sidebar.html" key="t-colored-sidebar">Colored Sidebar</Link></li>
                      <li><Link to="layouts-scrollable.html" key="t-scrollable">Scrollable</Link></li>
                    </ul>
                  </li>
                  <li>
                    <Link to="#" className="has-arrow" key="t-horizontal">Horizontal</Link>
                    <ul className="sub-menu" >
                      <li><Link to="layouts-horizontal.html" key="t-horizontal">Horizontal</Link></li>
                      <li><Link to="layouts-hori-topbar-light.html" key="t-topbar-light">Topbar light</Link></li>
                      <li><Link to="layouts-hori-boxed-width.html" key="t-boxed-width">Boxed width</Link></li>
                      <li><Link to="layouts-hori-preloader.html" key="t-preloader">Preloader</Link></li>
                      <li><Link to="layouts-hori-colored-header.html" key="t-colored-topbar">Colored Header</Link></li>
                      <li><Link to="layouts-hori-scrollable.html" key="t-scrollable">Scrollable</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li className="menu-title" key="t-apps">Apps</li>
              <li>
                <Link to="calendar.html" className="waves-effect">
                  <i className="bx bx-calendar" />
                  <span key="t-calendar">Calendar</span>
                </Link>
              </li>
              <li>
                <Link to="chat.html" className="waves-effect">
                  <i className="bx bx-chat" />
                  <span key="t-chat">Chat</span>
                </Link>
              </li>
              <li>
                <Link to="apps-filemanager.html" className="waves-effect">
                  <i className="bx bx-file" />
                  <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                  <span key="t-file-manager">File Manager</span>
                </Link>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-store" />
                  <span key="t-ecommerce">Ecommerce</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="ecommerce-products.html" key="t-products">Products</Link></li>
                  <li><Link to="ecommerce-product-detail.html" key="t-product-detail">Product Detail</Link></li>
                  <li><Link to="ecommerce-orders.html" key="t-orders">Orders</Link></li>
                  <li><Link to="ecommerce-customers.html" key="t-customers">Customers</Link></li>
                  <li><Link to="ecommerce-cart.html" key="t-cart">Cart</Link></li>
                  <li><Link to="ecommerce-checkout.html" key="t-checkout">Checkout</Link></li>
                  <li><Link to="ecommerce-shops.html" key="t-shops">Shops</Link></li>
                  <li><Link to="ecommerce-add-product.html" key="t-add-product">Add Product</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-bitcoin" />
                  <span key="t-crypto">Crypto</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="crypto-wallet.html" key="t-wallet">Wallet</Link></li>
                  <li><Link to="crypto-buy-sell.html" key="t-buy">Buy/Sell</Link></li>
                  <li><Link to="crypto-exchange.html" key="t-exchange">Exchange</Link></li>
                  <li><Link to="crypto-lending.html" key="t-lending">Lending</Link></li>
                  <li><Link to="crypto-orders.html" key="t-orders">Orders</Link></li>
                  <li><Link to="crypto-kyc-application.html" key="t-kyc">KYC Application</Link></li>
                  <li><Link to="crypto-ico-landing.html" key="t-ico">ICO Landing</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-envelope" />
                  <span key="t-email">Email</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="email-inbox.html" key="t-inbox">Inbox</Link></li>
                  <li><Link to="email-read.html" key="t-read-email">Read Email</Link></li>
                  <li>
                    <Link to="#">
                      <span className="badge rounded-pill badge-soft-success float-end" key="t-new">New</span>
                      <span key="t-email-templates">Templates</span>
                    </Link>
                    <ul className="sub-menu" >
                      <li><Link to="email-template-basic.html" key="t-basic-action">Basic Action</Link></li>
                      <li><Link to="email-template-alert.html" key="t-alert-email">Alert Email</Link></li>
                      <li><Link to="email-template-billing.html" key="t-bill-email">Billing Email</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-receipt" />
                  <span key="t-invoices">Invoices</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="invoices-list.html" key="t-invoice-list">Invoice List</Link></li>
                  <li><Link to="invoices-detail.html" key="t-invoice-detail">Invoice Detail</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-briefcase-alt-2" />
                  <span key="t-projects">Projects</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="projects-grid.html" key="t-p-grid">Projects Grid</Link></li>
                  <li><Link to="projects-list.html" key="t-p-list">Projects List</Link></li>
                  <li><Link to="projects-overview.html" key="t-p-overview">Project Overview</Link></li>
                  <li><Link to="projects-create.html" key="t-create-new">Create New</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-task" />
                  <span key="t-tasks">Tasks</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="tasks-list.html" key="t-task-list">Task List</Link></li>
                  <li><Link to="tasks-kanban.html" key="t-kanban-board">Kanban Board</Link></li>
                  <li><Link to="tasks-create.html" key="t-create-task">Create Task</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bxs-user-detail" />
                  <span key="t-contacts">Contacts</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="contacts-grid.html" key="t-user-grid">User Grid</Link></li>
                  <li><Link to="contacts-list.html" key="t-user-list">User List</Link></li>
                  <li><Link to="contacts-profile.html" key="t-profile">Profile</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="waves-effect">
                  <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                  <i className="bx bx-detail" />
                  <span key="t-blog">Blog</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="blog-list.html" key="t-blog-list">Blog List</Link></li>
                  <li><Link to="blog-grid.html" key="t-blog-grid">Blog Grid</Link></li>
                  <li><Link to="blog-details.html" key="t-blog-details">Blog Details</Link></li>
                </ul>
              </li>
              <li className="menu-title" key="t-pages">Pages</li>
              <li>
                <Link to="#" className="waves-effect">
                  <span className="badge rounded-pill bg-success float-end" key="t-new">New</span>
                  <i className="bx bx-user-circle" />
                  <span key="t-authentication">Authentication</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="auth-login.html" key="t-login">Login</Link></li>
                  <li><Link to="auth-login-2.html" key="t-login-2">Login 2</Link></li>
                  <li><Link to="auth-register.html" key="t-register">Register</Link></li>
                  <li><Link to="auth-register-2.html" key="t-register-2">Register 2</Link></li>
                  <li><Link to="auth-recoverpw.html" key="t-recover-password">Recover Password</Link></li>
                  <li><Link to="auth-recoverpw-2.html" key="t-recover-password-2">Recover Password 2</Link></li>
                  <li><Link to="auth-lock-screen.html" key="t-lock-screen">Lock Screen</Link></li>
                  <li><Link to="auth-lock-screen-2.html" key="t-lock-screen-2">Lock Screen 2</Link></li>
                  <li><Link to="auth-confirm-mail.html" key="t-confirm-mail">Confirm Mail</Link></li>
                  <li><Link to="auth-confirm-mail-2.html" key="t-confirm-mail-2">Confirm Mail 2</Link></li>
                  <li><Link to="auth-email-verification.html" key="t-email-verification">Email verification</Link></li>
                  <li><Link to="auth-email-verification-2.html" key="t-email-verification-2">Email verification 2</Link></li>
                  <li><Link to="auth-two-step-verification.html" key="t-two-step-verification">Two step verification</Link></li>
                  <li><Link to="auth-two-step-verification-2.html" key="t-two-step-verification-2">Two step verification 2</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-file" />
                  <span key="t-utility">Utility</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="pages-starter.html" key="t-starter-page">Starter Page</Link></li>
                  <li><Link to="pages-maintenance.html" key="t-maintenance">Maintenance</Link></li>
                  <li><Link to="pages-comingsoon.html" key="t-coming-soon">Coming Soon</Link></li>
                  <li><Link to="pages-timeline.html" key="t-timeline">Timeline</Link></li>
                  <li><Link to="pages-faqs.html" key="t-faqs">FAQs</Link></li>
                  <li><Link to="pages-pricing.html" key="t-pricing">Pricing</Link></li>
                  <li><Link to="pages-404.html" key="t-error-404">Error 404</Link></li>
                  <li><Link to="pages-500.html" key="t-error-500">Error 500</Link></li>
                </ul>
              </li>
              <li className="menu-title" key="t-components">Components</li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-tone" />
                  <span key="t-ui-elements">UI Elements</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="ui-alerts.html" key="t-alerts">Alerts</Link></li>
                  <li><Link to="ui-buttons.html" key="t-buttons">Buttons</Link></li>
                  <li><Link to="ui-cards.html" key="t-cards">Cards</Link></li>
                  <li><Link to="ui-carousel.html" key="t-carousel">Carousel</Link></li>
                  <li><Link to="ui-dropdowns.html" key="t-dropdowns">Dropdowns</Link></li>
                  <li><Link to="ui-grid.html" key="t-grid">Grid</Link></li>
                  <li><Link to="ui-images.html" key="t-images">Images</Link></li>
                  <li><Link to="ui-lightbox.html" key="t-lightbox">Lightbox</Link></li>
                  <li><Link to="ui-modals.html" key="t-modals">Modals</Link></li>
                  <li><Link to="ui-offcanvas.html" key="t-offcanvas">Offcanvas</Link></li>
                  <li><Link to="ui-rangeslider.html" key="t-range-slider">Range Slider</Link></li>
                  <li><Link to="ui-session-timeout.html" key="t-session-timeout">Session Timeout</Link></li>
                  <li><Link to="ui-progressbars.html" key="t-progress-bars">Progress Bars</Link></li>
                  <li><Link to="ui-sweet-alert.html" key="t-sweet-alert">Sweet-Alert</Link></li>
                  <li><Link to="ui-tabs-accordions.html" key="t-tabs-accordions">Tabs &amp; Accordions</Link></li>
                  <li><Link to="ui-typography.html" key="t-typography">Typography</Link></li>
                  <li><Link to="ui-video.html" key="t-video">Video</Link></li>
                  <li><Link to="ui-general.html" key="t-general">General</Link></li>
                  <li><Link to="ui-colors.html" key="t-colors">Colors</Link></li>
                  <li><Link to="ui-rating.html" key="t-rating">Rating</Link></li>
                  <li><Link to="ui-notifications.html" key="t-notifications">Notifications</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="waves-effect">
                  <i className="bx bxs-eraser" />
                  <span className="badge rounded-pill bg-danger float-end">10</span>
                  <span key="t-forms">Forms</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="form-elements.html" key="t-form-elements">Form Elements</Link></li>
                  <li><Link to="form-layouts.html" key="t-form-layouts">Form Layouts</Link></li>
                  <li><Link to="form-validation.html" key="t-form-validation">Form Validation</Link></li>
                  <li><Link to="form-advanced.html" key="t-form-advanced">Form Advanced</Link></li>
                  <li><Link to="form-editors.html" key="t-form-editors">Form Editors</Link></li>
                  <li><Link to="form-uploads.html" key="t-form-upload">Form File Upload</Link></li>
                  <li><Link to="form-xeditable.html" key="t-form-xeditable">Form Xeditable</Link></li>
                  <li><Link to="form-repeater.html" key="t-form-repeater">Form Repeater</Link></li>
                  <li><Link to="form-wizard.html" key="t-form-wizard">Form Wizard</Link></li>
                  <li><Link to="form-mask.html" key="t-form-mask">Form Mask</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-list-ul" />
                  <span key="t-tables">Tables</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="tables-basic.html" key="t-basic-tables">Basic Tables</Link></li>
                  <li><Link to="tables-datatable.html" key="t-data-tables">Data Tables</Link></li>
                  <li><Link to="tables-responsive.html" key="t-responsive-table">Responsive Table</Link></li>
                  <li><Link to="tables-editable.html" key="t-editable-table">Editable Table</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bxs-bar-chart-alt-2" />
                  <span key="t-charts">Charts</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="charts-apex.html" key="t-apex-charts">Apex Charts</Link></li>
                  <li><Link to="charts-echart.html" key="t-e-charts">E Charts</Link></li>
                  <li><Link to="charts-chartjs.html" key="t-chartjs-charts">Chartjs Charts</Link></li>
                  <li><Link to="charts-flot.html" key="t-flot-charts">Flot Charts</Link></li>
                  <li><Link to="charts-tui.html" key="t-ui-charts">Toast UI Charts</Link></li>
                  <li><Link to="charts-knob.html" key="t-knob-charts">Jquery Knob Charts</Link></li>
                  <li><Link to="charts-sparkline.html" key="t-sparkline-charts">Sparkline Charts</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-aperture" />
                  <span key="t-icons">Icons</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="icons-boxicons.html" key="t-boxicons">Boxicons</Link></li>
                  <li><Link to="icons-materialdesign.html" key="t-material-design">Material Design</Link></li>
                  <li><Link to="icons-dripicons.html" key="t-dripicons">Dripicons</Link></li>
                  <li><Link to="icons-fontawesome.html" key="t-font-awesome">Font awesome</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-map" />
                  <span key="t-maps">Maps</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="maps-google.html" key="t-g-maps">Google Maps</Link></li>
                  <li><Link to="maps-vector.html" key="t-v-maps">Vector Maps</Link></li>
                  <li><Link to="maps-leaflet.html" key="t-l-maps">Leaflet Maps</Link></li>
                </ul>
              </li>
              <li>
                <Link to="#" className="has-arrow waves-effect">
                  <i className="bx bx-share-alt" />
                  <span key="t-multi-level">Multi Level</span>
                </Link>
                <ul className="sub-menu" >
                  <li><Link to="#" key="t-level-1-1">Level 1.1</Link></li>
                  <li>
                    <Link to="#" className="has-arrow" key="t-level-1-2">Level 1.2</Link>
                    <ul className="sub-menu" >
                      <li><Link to="#" key="t-level-2-1">Level 2.1</Link></li>
                      <li><Link to="#" key="t-level-2-2">Level 2.2</Link></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* Sidebar */}
        </div>
      </div>

        
      </>
    );
  }
