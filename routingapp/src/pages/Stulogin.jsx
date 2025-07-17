import { NavLink, useNavigate } from 'react-router-dom'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import './Stulogin.css'
import axios from 'axios'
import { useEffect } from 'react'
const Stulogin = () => {

    const navigate = useNavigate()
    const initialValues = {
        username : '',
        password : ''
    }

    const validationSchema = Yup.object({
        username : Yup.string().required('Username is required'),
        password : Yup.string().required('Password is required')
    })

    const stuLogin = async(data) =>{
        try{
            const res = await axios.get('http://localhost:8080/students')
            const result = res.data
            const student = result.find((stu)=> stu.username === data.username && stu.password === data.password)

            if(student){
                alert('Student Login Successful !!')
                navigate(`/studashboard?id=${student.id}`)
            }else{
                alert('Wrong Username or Password')
            }
        }catch(err){
            console.log('Failed to fetch data')
        }  
    }

    useEffect(()=>{
        stuLogin()
    },[])

    return (
        <div>
            <section className="h-100 gradient-form" style={{backgroundColor: '#eee'}}>
                <div className="container py-2 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">

                                            <div className="text-center">
                                                <img src="https://skramby.com/img/skramby-images/skramby-logo.jpg"
                                                    style={{width: '185px'}} alt="logo"/>
                                                    <h4 className="mt-1 mb-5 pb-1">We are The Skramby Team</h4>
                                            </div>
                                            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={stuLogin}>
                                            <Form>
                                                <p>Please login to your account</p>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <Field type="text" id="form2Example11" className="form-control"
                                                        placeholder="Username"
                                                        name='username'
                                                        />
                                                    
                                                    <ErrorMessage name='username' component='div' className='text-danger'/>
                                                   
                                                </div>

                                                <div data-mdb-input-init className="form-outline mb-4">
                                                    <Field type="password" id="form2Example22" className="form-control"
                                                    placeholder='Password' 
                                                    name='password'
                                                    />
                                                    
                                                    <ErrorMessage name='password' component='password' className='text-danger'/>
                                                     
                                                </div>

                                                <div className="text-center pt-1 mb-1 pb-1">
                                                    <button data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">
                                                        Log in
                                                        </button>
                                                </div>

                                                <div className="d-flex align-items-center justify-content-center pb-1">
                                                    <p className="mb-0 me-2">Don't Register !!!</p>
                                                   <NavLink to='/register'><button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-danger">Register Now</button></NavLink>
                                                </div>
                                            </Form>
                                            </Formik>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                        <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0" style={{textAlign : 'justify'}}>Skramby Technology Solution is a leading IT company specializing in innovative technology solutions. We provide a wide range of services, including software development, cloud computing, cybersecurity, and IT consulting. Our mission is to empower businesses through cutting-edge technology, enabling them to optimize operations and drive growth. our team of skilled professionals is dedicated to delivering tailored solutions that meet the unique needs of our clients across various industries. With a commitment to excellence and customer satisfaction, we strive to be a trusted partner in our clients’ digital transformation journeys.</p>
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

export default Stulogin