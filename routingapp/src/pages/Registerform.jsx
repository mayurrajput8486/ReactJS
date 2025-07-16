import axios from 'axios'
import './Register.css'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'
const Registerform = () => {
    const navigate = useNavigate()
    const initialValues = {
        fname : '',
        lname : '',
        address : '',
        gender :'',
        state : '',
        city : '',
        dob : '',
        pincode : '',
        course : '',
        contact : '',
        username : '',
        password : ''
    }
    //Method chaining
    const validationSchema = Yup.object({
        fname : Yup.string().matches(/^[A-Za-z]+$/, 'Only Letters are Allowed').required('First Name is Required'),
        lname : Yup.string().matches(/^[A-Za-z]+$/, 'Only Letters are allowed').required('Last name is required'),
        address : Yup.string().matches(/^[A-Za-z\s\d!@#$%^&*()-_.,'"<>?/]+$/,'Letter, Number, Space are allowed').required('Address is required'),
        gender : Yup.string().required('Seelct One Option'),
        state : Yup.string().required('Seelct One Option'),
        city : Yup.string().required('Seelct One Option'),
        dob : Yup.string().required('Date of Birth is required'),
        pincode : Yup.string().matches(/^[0-9]{6}$/, 'Enter 6 Digit Pincode').required('Pincode is required'),
        contact : Yup.string().matches(/^[6789]{1}[0-9]{9}$/, 'Enter 10 Digit Number').required('Contact is required'),
        course : Yup.string().matches(/^[A-Za-z\s]+$/,'Letter and Space are allowed').required('Course is required'),
        username : Yup.string().matches(/^[A-Z][A-Za-z\d#$]{6,10}/, 'Username must start with upercase letter. Number and special character (#,$ only) are allowed, 6-10 character long').required('Username is required'),
        password : Yup.string().matches(/^(?=.*[A-Z])(?=.*[\d])(?=.*[!@#$%&*])[A-Za-z\d@#$%&*!]{6,10}$/, 'One Uppercase, one digit, one special charcter (!@#$%&*), 6 - 10 character long').required('Password is required')
    })

    const addData = (data) =>{
        axios.post('http://localhost:8080/students',data)
        alert('Data Added !!!!')
        navigate('/success')

    }
    return (
        <div>
            <section className="h-100 bg-dark">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col">
                            <div className="card card-registration my-4">
                                <div className="row g-0">
                                    <div className="col-xl-6 d-none d-xl-block">
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                                            alt="Sample photo" className="form-layout" style={{width : '100%', height : '100%'}}
                                            />
                                    </div>
                                    <div className="col-xl-6">
                                        <div className="card-body p-md-5 text-black">
                                        
                                        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={addData}>
                                        <Form>
                                            <h3 className="mb-5 text-uppercase">Student registration form</h3>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <Field type="text" id="form3Example1m" className="form-control form-control-lg" name="fname"/>
                                                        <label className="form-label" htmlFor="form3Example1m">First name</label>
                                                        <ErrorMessage name='fname' component='div' className='text-danger fw-bold'/>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <Field type="text" id="form3Example1n" className="form-control form-control-lg" name='lname'/>
                                                        <label className="form-label" htmlFor="form3Example1n">Last name</label>
                                                        <ErrorMessage name='lname' component='div' className='text-danger fw-bold'/>
                                                    </div>
                                                </div>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="text" id="form3Example8" className="form-control form-control-lg" name='address'/>
                                                <label className="form-label" htmlFor="form3Example8">Address</label>
                                                <ErrorMessage name='address' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                                                <h6 className="mb-0 me-4">Gender: </h6>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <Field className="form-check-input" type="radio" name="gender" id="femaleGender"
                                                        value="female" />
                                                    <label className="form-check-label" htmlFor="femaleGender">Female</label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0 me-4">
                                                    <Field className="form-check-input" type="radio" name="gender" id="maleGender"
                                                        value="male" />
                                                    <label className="form-check-label" htmlFor="maleGender">Male</label>
                                                </div>

                                                <div className="form-check form-check-inline mb-0">
                                                    <Field className="form-check-input" type="radio" name="gender" id="otherGender"
                                                        value="other" />
                                                    <label className="form-check-label" htmlFor="otherGender">Other</label>
                                                </div>
                                                <ErrorMessage name='gender' component='div' className='text-danger fw-bold'/>

                                            </div>

                                            <div className="row">
                                                <div className="col-md-6 mb-4">

                                                    <Field as='select' data-mdb-select-init className='form-control' name='state'>
                                                        <option value="">State</option>
                                                        <option value="Maharashtra">Maharashtra</option>
                                                        <option value="Madhya Pradesh">Madhya Pradesh</option>
                                                        <option value="Karnataka">Karnataka</option>
                                                    </Field>
                                                    <ErrorMessage name='state' component='div' className='text-danger fw-bold'/>
                                                </div>
                                                <div className="col-md-6 mb-4 ">
                                                    <Field as='select' data-mdb-select-init className='form-control' name='city'>
                                                        <option value="">City</option>
                                                        <option value="Pune">Pune</option>
                                                        <option value="Indore">Indore</option>
                                                        <option value="Bangalore">Bangalore</option>
                                                    </Field>
                                                    <ErrorMessage name='city' component='div' className='text-danger fw-bold'/>
                                                </div>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="date" id="form3Example9" className="form-control form-control-lg" name='dob'/>
                                                <label className="form-label" htmlFor="form3Example9">DOB</label>
                                                <ErrorMessage name='dob' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="tel" id="pincode" className="form-control form-control-lg" name='pincode'/>
                                                <label className="form-label" htmlFor="pincode">Pincode</label>
                                                <ErrorMessage name='pincode' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="text" id="course" className="form-control form-control-lg" name='course'/>
                                                <label className="form-label" htmlFor="course">Course</label>
                                                <ErrorMessage name='course' component='div' className='text-danger fw-bold'/>
                                            </div>


                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="tel" id="contact" className="form-control form-control-lg" name='contact'/>
                                                <label className="form-label" htmlFor="contact">Contact</label>
                                                <ErrorMessage name='contact' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="text" id="username" className="form-control form-control-lg" name='username'/>
                                                <label className="form-label" htmlFor="username">Username</label>
                                                <ErrorMessage name='username' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div data-mdb-input-init className="form-outline mb-4">
                                                <Field type="password" id="password" className="form-control form-control-lg" name='password'/>
                                                <label className="form-label" htmlFor="password">Password</label>
                                                <ErrorMessage name='password' component='div' className='text-danger fw-bold'/>
                                            </div>

                                            <div className="d-flex justify-content-end pt-3">
                                                <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                                                <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                                            </div>
                                        </Form>
                                        </Formik>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Registerform