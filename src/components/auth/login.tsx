import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import authService from "./auth.service";

interface IProps {
    history: any
};

interface IState {
    email: string,
    password: string,
};

export class Login extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props);
        console.log("🚀 ~ file: register.tsx ~ line 80 ~ Register ~ constructor ~ props", props);

        this.state = {
            email: '',
            password: '',
        };
        this.handleChange = this.handleChange.bind(this)
        this.authenticate = this.authenticate.bind(this);
    }



    authenticate(fields: any) {
        const data = Object.assign({}, this.state);
        console.log("🚀 ~ file: login.tsx ~ line 34 ~ Login ~ authenticate ~ data", data)
        authService.authenticate(data).then((res: any) => {
            console.log("🚀 ~ file: login.tsx ~ line 36 ~ Login ~ authService.authenticate ~ res", res.data)
            this.props.history.push(`/dashboard`);

        }, (error: any) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log("🚀 ~ file: login.tsx ~ line 41 ~ Login ~ authService.authenticate ~ resMessage", resMessage)
        });
    }

    handleChange = (e: any, setFieldValue: any) => {
        setFieldValue(e.target.name, e.target.value);
        this.setState({ [e.target.name]: e.target.value } as Pick<IState, keyof IState>);
    }

    values = {
        email: '',
        password: '',
    }
    validationSchema = Yup.object().shape({
        email: Yup.string()
            .email('Email is invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Password is required'),
    });


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
                                                    <h5 className="text-primary">Welcome Back !</h5>
                                                    <p>Sign in to continue to Skote.</p>
                                                </div>
                                            </div>
                                            <div className="col-5 align-self-end">
                                                <img src="images/profile-img.png" alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body pt-0">
                                        <div className="auth-logo">
                                            <Link to="index.html" className="auth-logo-light">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <span className="avatar-title rounded-circle bg-light">
                                                        <img src="images/logo-light.svg" alt="" className="rounded-circle" height="34" />
                                                    </span>
                                                </div>
                                            </Link>

                                            <Link to="index.html" className="auth-logo-dark">
                                                <div className="avatar-md profile-user-wid mb-4">
                                                    <span className="avatar-title rounded-circle bg-light">
                                                        <img src="images/logo.svg" alt="" className="rounded-circle" height="34" />
                                                    </span>
                                                </div>
                                            </Link>
                                        </div>
                                        <div className="p-2">
                                            <Formik
                                                initialValues={this.values}
                                                validationSchema={this.validationSchema}
                                                onSubmit={(fields) => { this.authenticate(fields) }}
                                                render={({ errors, status, touched, setFieldValue, setFieldTouched }) => (
                                                    <Form>
                                                        <div className="mb-3">
                                                            <label htmlFor="email" className="form-label">Email</label>
                                                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} onChange={(e: any) => this.handleChange(e, setFieldValue)} placeholder="Enter username" />
                                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                                        </div>

                                                        <div className="mb-3">
                                                            <label className="form-label">Password</label>
                                                            <div className="input-group auth-pass-inputgroup">
                                                                <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} onChange={(e: any) => this.handleChange(e, setFieldValue)} placeholder="Enter password" />
                                                                <button className="btn btn-light " type="button" id="password-addon"><i className="mdi mdi-eye-outline"></i></button>
                                                                <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                                            </div>
                                                        </div>

                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" id="remember-check" />
                                                            <label className="form-check-label" htmlFor="remember-check">
                                                                Remember me
                                                            </label>
                                                        </div>

                                                        <div className="mt-3 d-grid">
                                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Log In</button>
                                                        </div>

                                                        <div className="mt-4 text-center">
                                                            <h5 className="font-size-14 mb-3">Sign in with</h5>

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

                                                        <div className="mt-4 text-center">
                                                            <Link to="auth-recoverpw.html" className="text-muted"><i className="mdi mdi-lock me-1"></i> Forgot your password?</Link>
                                                        </div>
                                                    </Form>

                                                )
                                                }

                                            />

                                        </div>

                                    </div>
                                </div>
                                <div className="mt-5 text-center">

                                    <div>
                                        <p>Don't have an account ? <Link to="/signup" className="fw-medium text-primary"> Signup now </Link> </p>
                                       
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
