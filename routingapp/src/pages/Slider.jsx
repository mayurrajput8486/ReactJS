import poster1 from '../assets/poster/poster1.jpg'
import poster2 from '../assets/poster/poster2.jpg'
import poster3 from '../assets/poster/poster3.jpg'
import poster4 from '../assets/poster/poster4.jpg'
const Slider = () => {
  return (
    <div>
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="2000">
                        <img src={poster1} className="d-block w-100" alt='poster1' />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={poster2} className="d-block w-100" alt="poster2" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={poster3} className="d-block w-100" alt="poster3" />
                    </div>
                    <div className="carousel-item" data-bs-interval="2000">
                        <img src={poster4} className="d-block w-100" alt='poster4' />
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