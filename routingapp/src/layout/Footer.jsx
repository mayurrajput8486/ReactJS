const Footer = () => {
    return (
        <div>
            <div className="w-100 bg-warning fs-3 p-3 fw-bold">
                Get Your Next Project Done!
            </div>
            <div className="d-flex justify-content-evenly p-3 bg-dark text-center">
                <div className="bg-light p-3 border border-3 w-25 rounded-4">
                    <div className="fs-4 fw-bold text-center mb-3">Contact Information</div>
                    <div>
                        <i className="bi bi-geo-alt"></i><br/>
                        S.No. 48/1/5, 6 & 7, Floor no. 1, Pashan - Sus Rd, Baner, Pune, Maharashtra 411045
                    </div>
                    <div>
                        &#128222; <br/> 8888666688
                    </div>
                    <div>
                        &#128231; <br/> sales@skramby.com
                    </div>
                    <div>
                        WORKING DAYS/HOURS <br/> Mon - Friday (9.00 AM - 6.00 PM)
                    </div>
                    
                </div>
                <div className="bg-light p-3 border border-3 rounded-4">
                    <iframe className="rounded-3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3423.0389660634787!2d73.76784227465278!3d18.54781876834249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bfc3a84999f1%3A0xec5f3c41596c1ea7!2sShreyas%20Crest!5e1!3m2!1sen!2sin!4v1752044903128!5m2!1sen!2sin" width="400" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}

export default Footer