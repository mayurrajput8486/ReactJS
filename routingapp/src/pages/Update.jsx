import { useEffect } from "react"
import { useForm } from "react-hook-form"
import axios from "axios"
import { useNavigate, useParams } from "react-router-dom"
const Update = () => {
    const {register, handleSubmit, setValue} = useForm()
    const navigate = useNavigate()

    //to get dynamic id data we use useParams()
    const {stuId} = useParams()

    const getData = async() =>{
        try{
             const result = await axios.get(`http://localhost:8080/students/${stuId}`)
        //                              http://locahost:8080/students/985c
        console.log(result)
        setValue('fname',result.data.fname)
        setValue('lname',result.data.lname)
        setValue('address',result.data.address)
        setValue('gender',result.data.gender)
        setValue('state',result.data.state)
        setValue('city',result.data.city),
        setValue('dob', result.data.dob)
        setValue('pincode', result.data.pincode)
        setValue('course', result.data.course)
        setValue('contact', result.data.contact)
        }catch(err){
            console.log('Failed to Get Data', err)
        }
       
    }
    useEffect(()=>{
        getData()
    },[])

    const updateData = (data) =>{
        axios.put(`http://localhost:8080/students/${stuId}`,data)
        alert('Data Updated !!!')
        navigate('/studetails')

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
                    <form onSubmit={handleSubmit(updateData)}>
                      <h3 className="mb-5 text-uppercase">Update Student Registration Form</h3>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1m" className="form-control form-control-lg" {...register('fname')} required/>
                            <label className="form-label" htmlFor="form3Example1m">First name</label>
                          </div>
                        </div>
                        <div className="col-md-6 mb-4">
                          <div data-mdb-input-init className="form-outline">
                            <input type="text" id="form3Example1n" className="form-control form-control-lg" {...register('lname')} required/>
                            <label className="form-label" htmlFor="form3Example1n">Last name</label>
                          </div>
                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example8" className="form-control form-control-lg" {...register('address')} required/>
                        <label className="form-label" htmlFor="form3Example8">Address</label>
                      </div>

                      <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">

                        <h6 className="mb-0 me-4">Gender: </h6>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                            value="female" {...register('gender')} required/>
                          <label className="form-check-label" htmlFor="femaleGender">Female</label>
                        </div>

                        <div className="form-check form-check-inline mb-0 me-4">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                            value="male" {...register('gender')} required/>
                          <label className="form-check-label" htmlFor="maleGender">Male</label>
                        </div>

                        <div className="form-check form-check-inline mb-0">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                            value="other" {...register('gender')} required/>
                          <label className="form-check-label" htmlFor="otherGender">Other</label>
                        </div>

                      </div>

                      <div className="row">
                        <div className="col-md-6 mb-4 ">
                          <select data-mdb-select-init className='form-control' {...register('state')} required>
                            <option value="">Select State</option>
                            <option value="Maharashtra">Maharashtra</option>
                            <option value="Madhya Pradesh">Madhya Pradesh</option>
                            <option value="Karnataka">Karnataka</option>
                          </select>

                        </div>
                        <div className="col-md-6 mb-4">

                          <select data-mdb-select-init className='form-control' {...register('city')} required>
                            <option value="">Select Branch</option>
                            <option value="Pune">Pune</option>
                            <option value="Indor">Indor</option>
                            <option value="Banglore">Banglore</option>
                          </select>

                        </div>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="date" id="form3Example9" className="form-control form-control-lg" {...register('dob')} required/>
                        <label className="form-label" htmlFor="form3Example9">DOB</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="tel" id="form3Example90" className="form-control form-control-lg" {...register('pincode')} required/>
                        <label className="form-label" htmlFor="form3Example90">Pincode</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="text" id="form3Example99" className="form-control form-control-lg" {...register('course')} required/>
                        <label className="form-label" htmlFor="form3Example99">Course</label>
                      </div>

                      <div data-mdb-input-init className="form-outline mb-4">
                        <input type="tel" id="form3Example97" className="form-control form-control-lg" {...register('contact')} required/>
                        <label className="form-label" htmlFor="form3Example97">Contact</label>
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="reset" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg">Reset all</button>
                        <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-warning btn-lg ms-2">Update form</button>
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

export default Update