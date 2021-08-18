import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Routes } from "../routes";
import { Header } from "../shared/header";

export const AdminLayout = () =>  {
    return (
      <>   
        <React.Fragment>
                <Header />                
                    <Suspense fallback={<div>Loading</div>}>
                        <Switch>
                        {
                            Routes.map((route, index) => {
                                return ((
                                    <Route path={route.path} key={index} component={route.component} exact={route.exact} />

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

