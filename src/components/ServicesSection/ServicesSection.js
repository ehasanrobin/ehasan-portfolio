import React from "react";
import "./ServicesSection.css";
const ServicesSection = () => {
  return (
    <div className="bg-black service-section">
      <div className="text-center ">
        <h2>
          Ser<span>v</span>ices
        </h2>
        <p className="text-white text-xl">What I will do for you?</p>
        <div className="services-container">
          <div className="container mx-auto">
            <div className="md:grid lg:grid-cols-2 xl:grid-cols-3 gap-4 justify-center">
              <div className="blog">
                <div className="icon-box">
                  <i className="fas fa-laptop"></i>
                </div>
                <div className="blog-content">
                  <h3>web design</h3>
                  <p>
                    Qualified web designs and attractive effects which catches
                    visitor's Eye.
                  </p>
                </div>
              </div>
              <div className="blog">
                <div className="icon-box">
                  <i className="fas fa-database"></i>
                </div>
                <div className="blog-content">
                  <h3>WEB DEVELOPMENT</h3>
                  <p>
                    Clean and fresh issue free code to make your website dynamic
                    perfectly.
                  </p>
                </div>
              </div>
              <div className="blog">
                <div className="icon-box">
                  <i className="fab fa-wordpress"></i>
                </div>
                <div className="blog-content">
                  <h3>WORDPRESS</h3>
                  <p>
                    Wordpress, Magento, E-Commerce, Prestashop Theme Development
                    &amp; Customization.
                  </p>
                </div>
              </div>
              <div className="blog">
                <div className="icon-box">
                  <i className="fas fa-tools"></i>
                </div>
                <div className="blog-content">
                  <h3>RESPONSIVE DESIGN</h3>
                  <p>
                    Responsive Design which will be working almost all browsers
                    and screens, Mobile, TaB, PC etc.
                  </p>
                </div>
              </div>
              <div className="blog">
                <div className="icon-box">
                  <i className="fas fa-desktop"></i>
                </div>
                <div className="blog-content">
                  <h3>WEB RESEARCH</h3>
                  <p>
                    Admin Support, Microsoft Word, Excel, Powerpoint Slide,
                    Internet marketing, Cpa marketing, Data mining etc etc.
                  </p>
                </div>
              </div>
              <div className="blog">
                <div className="icon-box">
                  <i className="fas fa-cogs"></i>
                </div>
                <div className="blog-content">
                  <h3>SEO</h3>
                  <p>
                    Search Engine Optimization to make website high ranked and
                    bring expected traffics on websites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
