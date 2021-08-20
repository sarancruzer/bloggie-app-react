import React, { Suspense } from "react";
import "./App.css";
import { Switch, Route, withRouter, RouteComponentProps } from 'react-router-dom'
import { Register } from "./components/auth/register";
import { Login } from "./components/auth/login";
import { Provider } from 'react-redux';
import AdminLayout from "./layouts/admin-layout";



interface IProps {
  history: any
};

interface IState {
};



class App extends React.Component<IProps & RouteComponentProps, IState> {
  constructor(props: IProps & RouteComponentProps) {
    super(props);
    console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ constructor ~ props", props)
    
  }



  render() {
    return (
      <>
      {/* <Provider store={store}> */}
        <React.Fragment>
          <Suspense fallback={<div>Loading....</div>} >
            <Switch>
              <Route exact path="/login" render={props => <Login {...this.props} />} />
              <Route exact path="/signup" render={props => <Register {...this.props} />} />
              <Route path="/" render={props => <AdminLayout {...this.props} />} />

            </Switch>
          </Suspense>
        </React.Fragment>
        {/* </Provider> */}
      </>
    );
  }

}

export default withRouter(App);

