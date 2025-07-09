import react from '../assets/courses/react.png'
import cpp from '../assets/courses/cpp.jpg'
import azure from '../assets/courses/azure.jpg'
import python from '../assets/courses/python.jpg'
import {NavLink} from "react-router-dom"
const Courses = () => {
  return (
    <div>
        {/* Create Cards for Courses */}
            <div className='w-100 bg-dark'>
                <div className='text-light d-flex justify-content-center fs-1 fw-bold pt-3 pb-3'>Our <span className='text-warning'>&ensp;Popular&ensp;</span> Courses</div>
            </div>

            {/* Hold All Courses Cards */}
            <div className='bg-secondary p-3'>
                {/* Hold Specific row */}
                <div className='d-flex justify-content-evenly'>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={react} className="card-img-top" alt="react" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">React</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                    <a href="/syllabus/mern.pdf" target='_blank'download className='btn btn-dark mb-1'>Syllabus</a>
                                </div>
                                <div className='text-center'>
                                    <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                                
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={azure} className="card-img-top" alt="azure" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Azure</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center '>
                                    <a className="btn btn-dark mb-1" href='/syllabus/aws.pdf' target='_blank' download>Syllabus</a>
                                </div>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={cpp} className="card-img-top" alt="cpp" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">CPP</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={python} className="card-img-top" alt="python" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Python</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>
                </div>

                {/* Row 2 */}

                <div className='d-flex justify-content-evenly pt-4'>
                    <div className="card" style={{width: '18rem'}}>
                        <img src={react} className="card-img-top" alt="react" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">React</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={azure} className="card-img-top" alt="azure" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Azure</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={cpp} className="card-img-top" alt="cpp" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">CPP</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>

                    <div className="card" style={{width: '18rem'}}>
                        <img src={python} className="card-img-top" alt="python" height='150px'/>
                            <div className="card-body">
                                <h5 className="card-title text-center">Python</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                <div className='text-center'>
                                     <NavLink to="/register" className="btn btn-primary">Enroll Now</NavLink>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Courses