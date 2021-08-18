import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import authService from "./auth.service";

interface IProps {
    history: any
};

interface IState {
    firstName: string,
    lastName: string,
    email: string,
    password: string,
    confirmPassword: string
};
export class Register extends React.Component<IProps, IState> {
    
    constructor(props: IProps) {
        super(props);
        console.log("🚀 ~ file: register.tsx ~ line 80 ~ Register ~ constructor ~ props", props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };

        this.userRegister = this.userRegister.bind(this);
        this.handleStateChange = this.handleStateChange.bind(this)

    }

    
    userRegister(fields: any) {
        const data = Object.assign({}, this.state);
        authService.register(data).then((res: any) => {
        console.log("🚀 ~ file: register.tsx ~ line 43 ~ Register ~ authService.register ~ res", res.data);
        this.props.history.push(`/login`);

        }, (error: any) => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log("🚀 ~ file: register.tsx ~ line 47 ~ Register ~ authService.register ~ resMessage", resMessage)
        });
    }
   

    values = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    }
    validationSchema = Yup.object().shape({
        firstName: Yup.string()
            .required('First Name is required'),
        lastName: Yup.string()
            .required('Last Name is required'),
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Confirm Password is required')
    });

   
    handleStateChange = (e:any, setFieldValue: any) => {
        setFieldValue(e.target.name, e.target.value);
        this.setState({ [e.target.name] : e.target.value } as Pick<IState, keyof IState>);
    }

    render() {

    return (
      <>
      <div className="account-pages my-5 pt-sm-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card overflow-hidden">
                            <div className="bg-primary bg-soft">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="text-primary p-4">
                                            <h5 className="text-primary">Free Register</h5>
                                            <p>Get your free Skote account now.</p>
                                        </div>
                                    </div>
                                    <div className="col-5 align-self-end">
                                        <img src="assets/images/profile-img.png" alt="" className="img-fluid"/>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body pt-0"> 
                                <div>
                                    <Link to="index.html">
                                        <div className="avatar-md profile-user-wid mb-4">
                                            <span className="avatar-title rounded-circle bg-light">
                                                <img src="assets/images/logo.svg" alt="" className="rounded-circle" height="34"/>
                                            </span>
                                        </div>
                                    </Link>
                                </div>
                                <div className="p-2">
                                    
                                <Formik
                                    initialValues={this.values}
                                    validationSchema={this.validationSchema}
                                    onSubmit={(fields) => {this.userRegister(fields)}}
                                        render={({ errors, status, touched, setFieldValue, setFieldTouched }) => (
                    <Form>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')}   onChange={(e: any) => this.handleStateChange(e, setFieldValue)} />
                            <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} 
                            onChange={(e: any) => this.handleStateChange(e, setFieldValue )} />
                            <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} onChange={(e: any) => this.handleStateChange(e, setFieldValue )} />
                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <div className="input-group auth-pass-inputgroup">
                              <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} placeholder="Enter password" aria-label="Password" onChange={(e: any) => this.handleStateChange(e, setFieldValue )} />
                                <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                <ErrorMessage name="password" component="div" className="invalid-feedback" />

                            </div>
                        </div>

                        <div className="form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="input-group auth-pass-inputgroup">
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} onChange={(e: any) => this.handleStateChange(e, setFieldValue )} />
                            <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                            </div>
                        </div>
                        
                        <div className="mt-4 d-grid">
                            <button className="btn btn-primary waves-effect waves-light" type="submit">Register</button>
                        </div>

                        
                    </Form>
                )}
            />

                                        <div className="mt-4 text-center">
                                            <h5 className="font-size-14 mb-3">Sign up using</h5>
            
                                            <ul className="list-inline">
                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-list-item bg-primary text-white border-primary">
                                                        <i className="mdi mdi-facebook"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-list-item bg-info text-white border-info">
                                                        <i className="mdi mdi-twitter"></i>
                                                    </Link>
                                                </li>
                                                <li className="list-inline-item">
                                                    <Link to="#" className="social-list-item bg-danger text-white border-danger">
                                                        <i className="mdi mdi-google"></i>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>

            
                                </div>
            
                            </div>
                        </div>
                        <div className="mt-5 text-center">
                            
                            <div>
                                <p>Already have an account ? <Link to="/login" className="fw-medium text-primary"> Login</Link> </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        
            </>
        );
    }
}
