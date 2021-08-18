import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "./blog.interface";

interface IProps {
  blogs: IBlog[] | any
};

interface IState {
  
};
export class BlogList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    console.log("🚀 ~ file: blog-list.tsx ~ line 14 ~ BlogList ~ constructor ~ props", props)
    
   }
  render() {
    return (
      <>   
                      {this.props.blogs.map((item: IBlog, index: any) => {
                        return (
                          <div key={index}>
                        <hr className="mb-4" />
                        <div>
                          <h5>
                            <a href="blog-details.html" className="text-dark">
                             {item.title}
                            </a>
                          </h5>
                          <p className="text-muted">{item.createdAt}</p>
                          <div className="position-relative mb-3">
                            <img
                              src="assets/images/small/img-2.jpg" 
                              className="img-thumbnail"
                            />
                          </div>
                          <ul className="list-inline">
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1" />{" "}
                                {item.tag?.tagName}
                              </a>
                            </li>
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-comment-dots align-middle text-muted me-1" />{" "}
                                12 Comments
                              </a>
                            </li>
                          </ul>
                          <p>
                           {item.caption}
                          </p>
                          <div>
                            <a
                              href="#"
                              className="text-primary"
                            >
                              Read more <i className="mdi mdi-arrow-right" />
                            </a>
                          </div>
                        </div>
                        </div>
                        )
                      })}



                      <div >
                        <hr className="mb-4" />
                        <div>
                          <h5>
                            <a href="blog-details.html" className="text-dark">
                              Beautiful Day with Friends
                            </a>
                          </h5>
                          <p className="text-muted">10 Apr, 2020</p>
                          <div className="position-relative mb-3">
                            <img
                              src="assets/images/small/img-2.jpg" 
                              className="img-thumbnail"
                            />
                          </div>
                          <ul className="list-inline">
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1" />{" "}
                                Project
                              </a>
                            </li>
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-comment-dots align-middle text-muted me-1" />{" "}
                                12 Comments
                              </a>
                            </li>
                          </ul>
                          <p>
                            Neque porro quisquam est, qui dolorem ipsum quia
                            dolor sit amet, consectetur, adipisci velit, aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                          </p>
                          <div>
                            <a
                              href="#"
                              className="text-primary"
                            >
                              Read more <i className="mdi mdi-arrow-right" />
                            </a>
                          </div>
                        </div>
                        </div>
                        <hr className="my-5" />
                        <div>
                          <h5>
                            <a href="blog-details.html" className="text-dark">
                              Project discussion with team
                            </a>
                          </h5>
                          <p className="text-muted">24 Mar, 2020</p>
                          <div className="position-relative mb-3">
                            <img
                              src="assets/images/small/img-6.jpg"
                              
                              className="img-thumbnail"
                            />
                            <div className="blog-play-icon">
                              <a
                                href="#"
                                className="avatar-sm d-block mx-auto"
                              >
                                <span className="avatar-title rounded-circle font-size-18">
                                  <i className="mdi mdi-play" />
                                </span>
                              </a>
                            </div>
                          </div>
                          <ul className="list-inline">
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-purchase-tag-alt align-middle text-muted me-1" />{" "}
                                Development
                              </a>
                            </li>
                            <li className="list-inline-item me-3">
                              <a
                                href="#"
                                className="text-muted"
                              >
                                <i className="bx bx-comment-dots align-middle text-muted me-1" />{" "}
                                08 Comments
                              </a>
                            </li>
                          </ul>
                          <p>
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis praesentium voluptatum
                            deleniti atque corrupti quos dolores similique sunt
                            in culpa qui officia deserunt mollitia animi est
                          </p>
                          <div>
                            <a
                              href="#"
                              className="text-primary"
                            >
                              Read more <i className="mdi mdi-arrow-right" />
                            </a>
                          </div>
                        </div>
                        <hr className="my-5" />
                        <div className="text-center">
                          <ul className="pagination justify-content-center pagination-rounded">
                            <li className="page-item disabled">
                              <a
                                href="#"
                                className="page-link"
                              >
                                <i className="mdi mdi-chevron-left" />
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                href="#"
                                className="page-link"
                              >
                                1
                              </a>
                            </li>
                            <li className="page-item active">
                              <a
                                href="#"
                                className="page-link"
                              >
                                2
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                href="#"
                                className="page-link"
                              >
                                3
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                href="#"
                                className="page-link"
                              >
                                ...
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                href="#"
                                className="page-link"
                              >
                                10
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                href="#"
                                className="page-link"
                              >
                                <i className="mdi mdi-chevron-right" />
                              </a>
                            </li>
                          </ul>
                        </div>
        
      </>
    );
  }
}
