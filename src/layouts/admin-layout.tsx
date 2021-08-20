import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import { Header } from "../shared/header";




interface IProps {
   
  
  };
  
  interface IState {
   
  };

  
class AdminLayout extends React.Component <IProps, IState> {
    constructor(props: IProps) {
      super(props)
      console.log("🚀 ~ file: admin-layout.tsx ~ line 32 ~ AdminLayout ~ constructor ~ props", props)

     }
    render() {
    return (
      <>   
        <React.Fragment>
                <Header />                
                    <Suspense fallback={<div>Loading</div>}>
                        <Switch>
                        {
                            Routes.map((route, index) => {
                                return ((
                                    <Route path={route.path} key={index} component={route.component} exact={route.exact}  />

                                ))
                            })
                        }
                        </Switch>
                        </Suspense>

                        {/* <Sidebar /> */}
                 
        </React.Fragment>       

        
      </>
    );
}

}

export default AdminLayout