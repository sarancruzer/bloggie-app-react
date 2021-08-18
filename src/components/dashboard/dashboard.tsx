import React from "react";
import { Link } from "react-router-dom";

export class Dashboard extends React.Component {
  render() {
    return (
      <>
        <div className="main-content">
          <div className="page-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box d-sm-flex align-items-center justify-content-between">
                    <h4 className="mb-sm-0 font-size-18">dASHBOAR Tables</h4>

                    <div className="page-title-right">
                      <ol className="breadcrumb m-0">
                        <li className="breadcrumb-item">
                          <Link to="#">Tables</Link>
                        </li>
                        <li className="breadcrumb-item active">Basic Tables</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Basic example</h4>
                      <p className="card-title-desc">
                        For basic styling—light padding and only horizontal
                        dividers—add the base class <code>.table</code> to any
                        <code>&lt;table&gt;</code>.
                      </p>

                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Dark table</h4>
                      <p className="card-title-desc">
                        You can also invert the colors—with light text on dark
                        backgrounds—with <code>.table-dark</code>.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-dark mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Table head</h4>
                      <p className="card-title-desc">
                        Use one of two modifier classes to make{" "}
                        <code>&lt;thead&gt;</code>s appear light or dark gray.
                      </p>

                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead className="table-light">
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Striped rows</h4>
                      <p className="card-title-desc">
                        Use <code>.table-striped</code> to add zebra-striping to
                        any table row within the <code>&lt;tbody&gt;</code>.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-striped mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Bordered table</h4>
                      <p className="card-title-desc">
                        Add <code>.table-bordered</code> for borders on all
                        sides of the table and cells.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-bordered mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Borderless table</h4>
                      <p className="card-title-desc">
                        {" "}
                        Add <code>.table-borderless</code> for a table without
                        borders.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Table Border color</h4>
                      <p className="card-title-desc">
                        Add <code>.table-bordered</code> &{" "}
                        <code>.border-*</code> for colored borders on all sides
                        of the table and cells.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-bordered border-primary mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Table Border color</h4>
                      <p className="card-title-desc">
                        Add <code>.table-bordered</code> &{" "}
                        <code>.border-*</code> for colored borders on all sides
                        of the table and cells.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-bordered border-success mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive">
                        <h4 className="card-title">Vertical alignment</h4>
                        <p className="card-title-desc">
                          Table cells in <code>&lt;tbody&gt;</code> inherit
                          their alignment from <code>&lt;table&gt;</code> and
                          are aligned to the the top by default. Use the
                          vertical align classes to re-align where needed.
                        </p>

                        <div className="table-responsive">
                          <table className="table align-middle mb-0">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Action</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <th scope="row">4</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>
                                  <button
                                    type="button"
                                    className="btn btn-light btn-sm"
                                  >
                                    View
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Nesting</h4>
                      <p className="card-title-desc">
                        {" "}
                        Border styles, active styles, and table variants are not
                        inherited by nested tables.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-striped table-bordered mb-0">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">First</th>
                              <th scope="col">Last</th>
                              <th scope="col">Handle</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <td colSpan={4}>
                                <table className="table mb-0">
                                  <thead>
                                    <tr>
                                      <th scope="col">Header</th>
                                      <th scope="col">Header</th>
                                      <th scope="col">Header</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">A</th>
                                      <td>First</td>
                                      <td>Last</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">B</th>
                                      <td>First</td>
                                      <td>Last</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Hoverable rows</h4>
                      <p className="card-title-desc">
                        Add <code>.table-hover</code> to enable a hover state on
                        table rows within a <code>&lt;tbody&gt;</code>.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-hover mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Small table</h4>
                      <p className="card-title-desc">
                        {" "}
                        Add <code>.table-sm</code> to make tables more compact
                        by cutting cell padding in half.
                      </p>

                      <div className="table-responsive">
                        <table className="table table-sm m-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Contextual classes</h4>
                      <p className="card-title-desc">
                        Use contextual classes to color table rows or individual
                        cells.
                      </p>

                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Column heading</th>
                              <th>Column heading</th>
                              <th>Column heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="table-light">
                              <th scope="row">1</th>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                            </tr>

                            <tr className="table-success">
                              <th scope="row">2</th>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                            </tr>

                            <tr className="table-info">
                              <th scope="row">3</th>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                            </tr>

                            <tr className="table-warning">
                              <th scope="row">4</th>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                            </tr>

                            <tr className="table-danger">
                              <th scope="row">5</th>
                              <td>Column content</td>
                              <td>Column content</td>
                              <td>Column content</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-xl-6">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Captions</h4>
                      <p className="card-title-desc">
                        A <code>&lt;caption&gt;</code> functions like a heading
                        for a table. It helps users with screen readers to find
                        a table and understand what it’s about and decide if
                        they want to read it.
                      </p>

                      <div className="table-responsive">
                        <table className="table mb-0">
                          <caption>List of users</caption>
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Username</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Mark</td>
                              <td>Otto</td>
                              <td>@mdo</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Jacob</td>
                              <td>Thornton</td>
                              <td>@fat</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Larry</td>
                              <td>the Bird</td>
                              <td>@twitter</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <h4 className="card-title">Responsive tables</h4>
                      <p className="card-title-desc">
                        Create responsive tables by wrapping any{" "}
                        <code>.table</code> in <code>.table-responsive</code>
                        to make them scroll horizontally on small devices (under
                        768px).
                      </p>

                      <div className="table-responsive">
                        <table className="table mb-0">
                          <thead>
                            <tr>
                              <th>#</th>
                              <th>Table heading</th>
                              <th>Table heading</th>
                              <th>Table heading</th>
                              <th>Table heading</th>
                              <th>Table heading</th>
                              <th>Table heading</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                              <td>Table cell</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <footer className="footer">
            <div className="container-fluid">
              <div className="row">
                <div className="col-sm-6">
                  <script>document.write(new Date().getFullYear())</script> ©
                  Skote.
                </div>
                <div className="col-sm-6">
                  <div className="text-sm-end d-none d-sm-block">
                    Design & Develop by Themesbrand
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}
