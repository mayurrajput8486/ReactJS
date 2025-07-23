'use client'
import { useEffect } from 'react'
const Slider = () => {
    useEffect(()=>{
        '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    },[])

  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src='poster/poster1.jpg' className="d-block w-100" alt='poster1' />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src='poster/poster2.jpg' className="d-block w-100" alt="poster2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src='poster/poster3.jpg' className="d-block w-100" alt="poster3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src='poster/poster4.jpg' className="d-block w-100" alt='poster4' />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    </div>
  )
}

export default Slider