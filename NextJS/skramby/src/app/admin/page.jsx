'use client'
import { Formik, Field, ErrorMessage, Form } from "formik"
import * as Yup from 'yup'
import { useRouter } from "next/navigation"

const Admin = () => {
    
    const router = useRouter()
    const initialValues = {
        username : '',
        password : ''
    }
    
    const validateSchema = Yup.object({
        username : Yup.string().required('Username is Required'),
        password : Yup.string().required('Password is required')
    })

    const adminLoginHandler = (data) =>{
        const {username, password} = data
        if(username === 'ADMIN' && password === "Admin@111"){
            alert('Welcome Admin')
            router.push('/studetails')
        }else{
            alert('Wrong Username or Passwod')
        }
    }
    return (
        <div>
            <div>
                <section className="vh-100" style={{backgroundColor: '#eee'}}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{borderRadius: '25px'}}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Admin Login</p>
                                                <Formik initialValues={initialValues} validationSchema={validateSchema} onSubmit={adminLoginHandler}>
                                                <Form className="mx-1 mx-md-4">

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <Field 
                                                                type="text" 
                                                                id="form3Example3c" 
                                                                className="form-control" 
                                                                name= 'username'
                                                            />
                                                            <label className="form-label" htmlFor="form3Example3c">Username</label>
                                                            <ErrorMessage name='username' component='div' className="text-danger"/>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div data-mdb-input-init className="form-outline flex-fill mb-0">
                                                            <Field 
                                                                type="password" 
                                                                id="form3Example4c" 
                                                                className="form-control" 
                                                                name='password'/>
                                                            <label className="form-label" htmlFor="form3Example4c">Password</label>
                                                            <ErrorMessage name='password' component='div' className="text-danger"/>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary btn-lg">Login</button>
                                                    </div>
                                                </Form>
                                                </Formik>
                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Admin