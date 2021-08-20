import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { fetchTodoRequest } from "./store/employee.action";


interface IProps {
  employees: any,
  getEmployees(): any,
};

interface IState {
  name: any,
  email: any,
  users: any
};

class EmployeeList extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    console.log("🚀 ~ file: blog-list.tsx ~ line 14 ~ BlogList ~ constructor ~ props", props)
    
   }

   componentDidMount() {
    console.log("🚀 ~ file: employee-list.tsx ~ line 31 ~ EmployeeList ~ componentDidMount ~ componentDidMount")
    this.props.getEmployees();
  }

  render() {
    return (
      <>


        <div className="container" >
          <div className="row mb-4">
            <div className="col-5" >
              <input id="name" onChange={(event) => this.inputChanged(event, 'name')} />
            </div>
            <div className="col-5" >
              <input id="email" onChange={(event) => this.inputChanged(event, 'email')} />
            </div>
            <div className="col-2" >
              <button >Add User</button>
            </div>
          </div>
          {/* {JSON.stringify(this.props.users)} */}


          {(this.props.employees || []).map((user:any, index: number) => {
            return (
              <div className="row mb-2" key={index}>
                <div className="col-5" >
                  {user.title}
                </div>
                <div className="col-5">
                  <a href={user.userId}> {user.userId}</a>
                </div>
                <div className="col-2">
                 
                </div>
              </div>
            )
          })}
        </div >

      </>
    );
  }


  inputChanged = (event: React.ChangeEvent<HTMLInputElement>, field: string) => {
    // this.setState({ [field]: event.target.value });
    this.setState({ [event.target.name]: event.target.value } as Pick<IState, keyof IState>);

  }

  

}


const mapStateTopProps = (state: any) => {
console.log("🚀 ~ file: employee-list.tsx ~ line 81 ~ mapStateTopProps ~ state", state)
  return {
    employees: state.employee.data
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getEmployees: () => {
      dispatch(fetchTodoRequest());
    }
  }
}

export default connect(mapStateTopProps, mapDispatchToProps) (EmployeeList);
// export default EmployeeList