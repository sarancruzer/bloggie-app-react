import React from "react";
import { Link } from "react-router-dom";
import { BlogGrid } from "./blog-grid";
import { BlogList } from "./blog-list";
import { IBlog } from "./blog.interface";
import blogService from "./blog.service";

interface IProps {
};

interface IState {
  isActive: boolean,
  blogLists?: IBlog[] | any,
  isLoaded: boolean,
};
class Blogs extends React.Component<IProps, IState> {
  
  constructor(props: IProps) {
    super(props)
    this.state = {
       isActive: true,
       isLoaded: false
       } // You can also pass a Quill Delta here
    console.log("🚀 ~ file: blog-tabs.tsx ~ line 16 ~ BlogTabs ~ constructor ~ this.state", this.state)
  
    this.handletabs = this.handletabs.bind(this)
  
   }
  
   handletabs = (e: any, value: string) => {
    e.preventDefault();
    console.log("🚀 ~ file: blog-create.tsx ~ line 12 ~ handleChange ~ value", value)
    this.setState({
      isActive: (value === 'LIST') ? true: false
    })
  }

  componentDidMount() {
    console.log("🚀 ~ file: blog-create.tsx ~ line 12 ~ handleChange ~ componentDidMount")

    blogService.getByTags({}).then((res) => {
    console.log("🚀 ~ file: blogs.tsx ~ line 37 ~ Blogs ~ blogService.getByTags ~ res", res)

      this.setState({
        blogLists: res.data,
        isLoaded: true
      })
        console.log("🚀 ~ file: blogs.tsx ~ line 42 ~ Blogs ~ blogService.getByTags ~ blogLists", this.state.blogLists)

        
      

    }, (error) => {

    })


  }

  render() {
    return (
      <>


        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              {/* start page title */}
             
              {/* end page title */}
              <div className="row">
                <div className="col-xl-9 col-lg-8">
                  <div className="card">
                    {/* Tab panes */}
                    <div className="tab-content p-4">
                      <div className="tab-pane active" role="tabpanel">
                        <div>
                          <div className="row justify-content-center">
                            <div className="col-xl-8">
                              <div>
                                <div className="row align-items-center">
                                  <div className="col-4">
                                    <div>
                                      <h5 className="mb-0">Blog List</h5>
                                    </div>
                                  </div>
                                  <div className="col-8">
                                    <div>
                                      <ul className="nav nav-pills justify-content-end">
                                        <li className="nav-item">
                                          <a
                                            className="nav-link disabled"
                                            href="#"
                                            tabIndex={-1}
                                            aria-disabled="true"
                                          >
                                            View :
                                          </a>
                                        </li>
                                        <li
                                          className="nav-item"
                                          data-bs-placement="top"
                                          title="List" onClick={(e) => this.handletabs(e, 'LIST')}
                                        >
                                          <a
                                            className={`nav-link ${this.state.isActive ? 'active': 'undefined' }`}  
                                            
                                            href="#"
                                          >
                                            <i className="mdi mdi-format-list-bulleted" />
                                          </a>
                                        </li>
                                        <li
                                          className="nav-item"
                                          data-bs-placement="top"
                                          title="Grid" onClick={(e) => this.handletabs(e, 'GRID')}
                                        >
                                          <a className={`nav-link ${!this.state.isActive ? 'active': 'undefined' }`}
                                           href="#">
                                            <i className="mdi mdi-view-grid-outline" />
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>


                              { this.state.isActive && this.state.isLoaded ? <BlogList blogs={this.state.blogLists} /> : null  }
                              { !this.state.isActive && this.state.isLoaded ? <BlogGrid blogs={this.state.blogLists} /> :  null  }
                              
                              {/* <BlogGrid /> */}


                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>



                <div className="col-xl-3 col-lg-4">
                  <div className="card">
                    <div className="card-body p-4">

                      <hr className="my-4" />
                      <div>
                        <p className="text-muted">Categories</p>
                        <ul className="list-unstyled fw-medium">
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> Design
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> Development{" "}
                              <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                04
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> Business
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> Project
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> Travel
                              <span className="badge badge-soft-success rounded-pill ms-1 float-end font-size-12">
                                12
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr className="my-4" />
                      <div>
                        <p className="text-muted">Archive</p>
                        <ul className="list-unstyled fw-medium">
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> 2020{" "}
                              <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                03
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> 2019{" "}
                              <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                06
                              </span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="text-muted py-2 d-block"
                            >
                              <i className="mdi mdi-chevron-right me-1" /> 2018{" "}
                              <span className="badge badge-soft-success rounded-pill float-end ms-1 font-size-12">
                                05
                              </span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <hr className="my-4" />
                      <div>
                        <p className="text-muted mb-2">Popular Posts</p>
                        <div className="list-group list-group-flush">
                          <a
                            href="#"
                            className="list-group-item text-muted py-3 px-2"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 me-3">
                                <img
                                  src="assets/images/small/img-7.jpg"

                                  className="avatar-md h-auto d-block rounded"
                                />
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h5 className="font-size-13 text-truncate">
                                  Beautiful Day with Friends
                                </h5>
                                <p className="mb-0 text-truncate">10 Apr, 2020</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item text-muted py-3 px-2"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 me-3">
                                <img
                                  src="assets/images/small/img-4.jpg"

                                  className="avatar-md h-auto d-block rounded"
                                />
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h5 className="font-size-13 text-truncate">
                                  Drawing a sketch
                                </h5>
                                <p className="mb-0 text-truncate">24 Mar, 2020</p>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item text-muted py-3 px-2"
                          >
                            <div className="d-flex align-items-center">
                              <div className="flex-shrink-0 me-3">
                                <img
                                  src="assets/images/small/img-6.jpg"

                                  className="avatar-md h-auto d-block rounded"
                                />
                              </div>
                              <div className="flex-grow-1 overflow-hidden">
                                <h5 className="font-size-13 text-truncate">
                                  Project discussion with team
                                </h5>
                                <p className="mb-0 text-truncate">11 Mar, 2020</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <hr className="my-4" />
                      <div>
                        <p className="text-muted">Tags</p>
                        <div className="d-flex flex-wrap gap-2 widget-tag">
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Design
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Development
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Business
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Project
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Travel
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Lifestyle
                            </a>
                          </div>
                          <div>
                            <a
                              href="#"
                              className="badge bg-light font-size-12"
                            >
                              Photography
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
            </div>{" "}
            {/* container-fluid */}
          </div>
          {/* End Page-content */}
        </div>



      </>
    );
  }
}

export default Blogs