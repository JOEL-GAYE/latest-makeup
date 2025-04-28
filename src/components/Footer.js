import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="h5 mb-3">Queen's Beauty Clinic.</h2>
            <p className="text mb-3">
              We sell beauty products. This can be used by both Men and Women. 
            </p>
            <div className="d-flex gap-3">
              <a href="#" aria-label="Facebook" className="textfs-5">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Twitter" className="text fs-5">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram" className="text fs-5">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn" className="text fs-5">
                <FaLinkedin />
              </a>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="Touch-Id--Streamline-Ultimate" height="24" width="24"><desc>Touch Id Streamline Icon: https://streamlinehq.com</desc><g id="Touch-Id--Streamline-Ultimate.svg">
                <path d="M3 12.63a0.88 0.88 0 0 0 -0.88 0.87V23a0.88 0.88 0 0 0 1.76 0v-9.5a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000" stroke-width="1"></path><path d="M12 1.88a8 8 0 0 1 4.49 1.35 0.88 0.88 0 1 0 1 -1.46A9.89 9.89 0 0 0 2.12 10a0.88 0.88 0 1 0 1.76 0A8.13 8.13 0 0 1 12 1.88Z" fill="#000000" stroke-width="1"></path>
                <path d="M20.21 4.51A0.87 0.87 0 0 0 19 4.27a0.88 0.88 0 0 0 -0.24 1.22A8.08 8.08 0 0 1 20.12 10v13a0.88 0.88 0 0 0 1.76 0V10a9.85 9.85 0 0 0 -1.67 -5.49Z" fill="#000000" stroke-width="1"></path>
                <path d="M12 3.13A6.88 6.88 0 0 0 5.12 10v13a0.88 0.88 0 0 0 1.76 0V10a5.12 5.12 0 0 1 10.24 0v6.5a0.88 0.88 0 0 0 1.76 0V10A6.88 6.88 0 0 0 12 3.13Z" fill="#000000" stroke-width="1"></path>
                <path d="M18 19.13a0.88 0.88 0 0 0 -0.88 0.87v3a0.88 0.88 0 0 0 1.76 0v-3a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000" stroke-width="1"></path>
                <path d="M9 17.63a0.88 0.88 0 0 0 -0.88 0.87V23a0.88 0.88 0 0 0 1.76 0v-4.5a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000" stroke-width="1"></path>
                <path d="M12 6.13A3.88 3.88 0 0 0 8.12 10v5a0.88 0.88 0 0 0 1.76 0v-5a2.12 2.12 0 1 1 4.24 0v13a0.88 0.88 0 1 0 1.76 0V10A3.88 3.88 0 0 0 12 6.13Z" fill="#000000" stroke-width="1"></path>
                <path d="M12 10.13a0.88 0.88 0 0 0 -0.88 0.87v7a0.88 0.88 0 0 0 1.76 0v-7a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000" stroke-width="1"></path>
                <path d="M12 20.63a0.88 0.88 0 0 0 -0.88 0.87V23a0.88 0.88 0 1 0 1.76 0v-1.5a0.88 0.88 0 0 0 -0.88 -0.87Z" fill="#000000" stroke-width="1">
                </path>
                </g>
                </svg>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="h5 mb-3">Quick Links</h2>
            <ul className="list-unstyled">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Contact'].map((link, index) => (
                <li key={index} className="mb-2">
                  <a href="#" className="text text-decoration-none">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="h5 mb-3">Contact Us</h2>
            <ul className="list-unstyled text">
              <li className="mb-3 d-flex align-items-center">
                <FaMapMarkerAlt className="me-2" />
                123 Business Street, City, Country
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaPhone className="me-2" />
                +1 (555) 123-4567
              </li>
              <li className="mb-3 d-flex align-items-center">
                <FaEnvelope className="me-2" />
                info@companyname.com
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-12 col-md-6 col-lg-3">
            <h2 className="h5 mb-3">Newsletter</h2>
            <p className="text mb-3">
              Subscribe to our newsletter for updates.
            </p>
            <form>
              <div className="mb-3">
                <input
                  type="email"
                  placeholder="Your email"
                  required
                  className="form-control bg-dark text-white border-secondary"
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text mb-0">
              © {currentYear} Company Name. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="list-inline text-center text-md-end mb-0">
              <li className="list-inline-item">
                <a href="#" className="text text-decoration-none">Privacy Policy</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text text-decoration-none">Terms of Service</a>
              </li>
              <li className="list-inline-item ms-3">
                <a href="#" className="text text-decoration-none">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
