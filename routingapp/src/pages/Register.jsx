import './Register.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const {register, handleSubmit, reset, formState : {errors}} = useForm()
  const navigate = useNavigate()

  const addData = (data) =>{
    axios.post('http://localhost:8080/students',data)
    alert('Data Added !!!!!')
    reset()
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
                      alt="Sample photo" className="img-fluid form-layout"
                    />
                  </div>
                  <div className="col-xl-6">
                    <div className="card-body p-md-5 text-black">
                    <form onSubmit={handleSubmit(addData)}>
                      <h3 className="mb-5 text-uppercase">Student registration form</h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" 
                            {...register('fname', {
                              required : 'First Name is required',
                              pattern : {
                                value : /^[A-Za-z]+$/,
                                message : 'Only Letters are Allowed'
                              }
                            })}/>
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                            {
                              errors.fname && <div className='text-danger fw-bold'>{errors.fname.message}</div>
                            }
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" 
                            {...register('lname',{
                              required : 'Last Name is Required',
                              pattern : {
                                value :/^[A-Za-z]+$/,
                                message : 'Only Letters are allowed'
                              }
                            })} />
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                            {
                              errors.lname && <div className='text-danger fw-bold'>{errors.lname.message}</div>
                            }
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address',{
                          required : 'Address in Required',
                          pattern : {
                            value :/^[A-Za-z\s\d!'"^{}<>?/@#$%&*()_,.-]+$/,
                            message : 'Letters, numbers, space are allowed'
                          }
                        })} />
                        <label className="form-label" htmlFor="form3Example8">Address</label>
                        {
                          errors.address && <div className='text-danger fw-bold'>{errors.address.message}</div>
                        }
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female" {...register('gender',{
                              required : 'Select One Option'
                            })} />
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" {...register('gender',{
                              required : 'Select One Option'
                            })}  />
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other" {...register('gender',{
                              required : 'Select One Option'
                            })}  />
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>
                        <div>
                            {
                            errors.gender && <div className='text-danger fw-bold'>{errors.gender.message}</div>
                            }
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 ">
                          <select data-mdb-select-init className='form-control' {...register('state',{
                            required : 'Select any state'
                          })} >
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Karnataka">Karnataka</option>
                          </select>
                          {
                            errors.state && <div className='text-danger fw-bold'>{errors.state.message}</div>
                          }
                        </div>
                        <div className="col-md-6 mb-4">

                          <select data-mdb-select-init className='form-control' {...register('city',{
                            required : 'Select Any City'
                          })} >
                            <option value="">Select Branch</option>
                            <option value="Pune">Pune</option>
                            <option value="Indor">Indor</option>
                            <option value="Banglore">Banglore</option>
                          </select>
                           {
                            errors.city && <div className='text-danger fw-bold'>{errors.city.message}</div>
                          }
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="date" id="form3Example9" className="form-control form-control-lg" {...register('dob',{
                          required : 'Date of Birth in Required'
                        })} />
                        <label className="form-label" htmlFor="form3Example9">DOB</label>
                         {
                            errors.dob && <div className='text-danger fw-bold'>{errors.dob.message}</div>
                          }
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="tel" id="form3Example90" className="form-control form-control-lg" {...register('pincode',{
                          required : 'Pincode is Required',
                          pattern : {
                            value :/^[0-9]{6}$/,
                            message : 'Only Numbers are allowed and 6 digit are requaired'
                          }
                        })} />
                        <label className="form-label" htmlFor="form3Example90">Pincode</label>
                        {
                          errors.pincode && <div className='text-danger fw-bold'>{errors.pincode.message}</div>
                        }
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('course',{
                          required : 'Course is required',
                          pattern : {
                            value :/^[A-Za-z\s]+$/,
                            message : 'Only Letters are allowed'
                          }
                        })} />
                        <label className="form-label" htmlFor="form3Example99">Course</label>
                        {
                          errors.course && <div className='text-danger fw-bold'>{errors.course.message}</div>
                        }
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="tel" id="form3Example97" className="form-control form-control-lg" {...register('contact',{
                          required : 'Contact is Required',
                          pattern : {
                            value :/^[6789]{1}[0-9]{9}$/,
                            message : 'Only Numbers are allowed and 10 digit are required'
                          }
                        })} />
                        <label className="form-label" htmlFor="form3Example97">Contact</label>
                        {
                          errors.contact && <div className='text-danger fw-bold'>{errors.contact.message}</div>
                        }
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Submit form</button>
                      </div>
                    </form>
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

export default Register