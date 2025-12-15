import React from 'react'

function Contact() {
    return (
        <React.Fragment>
            <title>Contact | Mostafa Wahba </title>

            <section className="contact at-top">
                <div id="preloader" className="preloader off">
                    <div className="black_wall"></div>
                    <div className="loader"></div>
                </div>
                {/* <!-- Page Title Starts -->*/}
                <section className="title-section text-left text-sm-center revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <h1>get in <span>touch</span></h1>
                    <span className="title-bg">contact</span>
                </section>
                {/* <!-- Page Title Ends -->*/}
                {/* <!-- Main Content Starts -->*/}
                <section className="main-content revealator-slideup revealator-once revealator-delay1 no-transform revealator-within">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Left Side Starts -->*/}
                            <div className="col-12 col-lg-4">
                                <h3 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">Don't be shy !</h3>
                                <p className="open-sans-font mb-3">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa fa-envelope-open position-absolute"></i>
                                    <span className="d-block">mail me</span><a className='text-light' href='mailto:mostafaw338@gmail.com' >mostafaw338@gmail.com</a>
                                </p>
                                <p className="open-sans-font custom-span-contact position-relative">
                                    <i className="fa fa-phone-square position-absolute"></i>
                                    <span className="d-block">call me</span> <a className='text-light' href='tel:01002883812' >01002883812</a>
                                </p>
                                <ul className="social list-unstyled pt-1 mb-5">
                                    <li className="facebook"><a title="Facebook" href="https://www.facebook.com/mostafaw338/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"></i></a>
                                    </li>
                                    <li className="twitter"><a title="linkedin" href="https://www.linkedin.com/in/mostafa-wahba-64bbab1a4/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
                                    </li>
                                    <li className="youtube"><a title="github" href="https://github.com/mustafa1912" target="_blank" rel="noreferrer"  ><i className="fa-brands fa-github"></i></a>
                                    </li>
                                </ul>
                            </div>
                            {/* <!-- Left Side Ends -->*/}
                            {/* <!-- Contact Form Starts -->*/}
                            <div className="col-12 col-lg-8">
                                <form className="contactform" method="post" action="https://slimhamdi.net/tunis/dark/php/process-form.php">
                                    <div className="contactform">
                                        <div className="row">
                                            <div className="col-12 col-md-4">
                                                <input type="text" name="name" placeholder="YOUR NAME" />
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <input type="email" name="email" placeholder="YOUR EMAIL" />
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <input type="text" name="subject" placeholder="YOUR SUBJECT" />
                                            </div>
                                            <div className="col-12">
                                                <textarea name="message" placeholder="YOUR MESSAGE"></textarea>
                                                <button type="submit" className="button">
                                                    <span className="button-text">Send Message</span>
                                                    <span className="button-icon fa fa-send"><i className="fa-solid fa-paper-plane"></i></span>
                                                </button>
                                            </div>
                                            <div className="col-12 form-message">
                                                <span className="output_message text-center font-weight-600 text-uppercase"></span>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* <!-- Contact Form Ends -->*/}
                        </div>
                    </div>

                </section>
            </section>
        </React.Fragment>
    )
}

export default Contact