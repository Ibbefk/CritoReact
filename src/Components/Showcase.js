import React from 'react';

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="content">
                    <h1>We Provide The Best Business Solutions</h1>
                    <p>Establish your vision and value proposition and turn them into testable prototypes.</p>
                    <a className="btn-yellow" href="consulting.html">Get Consulting <i className="fa-solid fa-arrow-right"></i></a>
                    <a className="btn-transparent" href="services.html">Learn More <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <img src="Images/Showcaseimage.svg" alt="man with tablet" style={{ display: 'block', marginRight: '-50px' }} />
            </div>
        </section>
    );
};

export default Showcase;
