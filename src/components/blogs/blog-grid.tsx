import React from "react";
import { Link } from "react-router-dom";
import { IBlog } from "./blog.interface";

interface IProps {
  blogs: IBlog[] | any
};

interface IState {
};
export class BlogGrid extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    console.log("🚀 ~ file: blog-list.tsx ~ line 14 ~ BlogList ~ constructor ~ props", props)
    
   }
  render() {
    return (
      <>   
     
     
                  
                       <div>
                        <hr className="mb-4" />
                        <div className="row">
                        {this.props.blogs.map((item: IBlog, index: any) => {
                        return (
                          <div className="col-sm-6" key={index}>
                            <div className="card p-1 border shadow-none">
                              <div className="p-3">
                                <h5>
                                  <a
                                    href="blog-details.html"
                                    className="text-dark"
                                  >
                                    {item.title}
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">{item.createdAt}</p>
                              </div>
                              <div className="position-relative">
                                <img
                                  src="assets/images/small/img-2.jpg"
                                  
                                  className="img-thumbnail"
                                />
                              </div>
                              <div className="p-3">
                                <ul className="list-inline">
                                  <li className="list-inline-item me-3">
                                    <a
                                      href="javascript: void(0);"
                                      className="text-muted"
                                    >
                                      <i className="bx bx-purchase-tag- align-middle text-muted me-1" />{" "}
                                      {item.tag?.tagName}
                                    </a>
                                  </li>
                                  <li className="list-inline-item me-3">
                                    <a
                                      href="javascript: void(0);"
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
                                    href="javascript: void(0);"
                                    className="text-primary"
                                  >
                                    Read more{" "}
                                    <i className="mdi mdi-arrow-right" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                           )
                          })}

                        </div>
                        </div>

                     
                      

        
      </>
    );
  }
}
