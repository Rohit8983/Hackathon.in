import React from 'react';
import Navbar from '../components/navBar';
import Footer from '../components/Fottor';
import 'bootstrap/dist/css/bootstrap.min.css';

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <div
        className="w-100"
        style={{
          backgroundColor: '#0c0624',
          color: 'white',
          paddingTop: '100px',
          paddingBottom: '60px',
          minHeight: '100vh',
        }}
      >
        <div className="container px-3 px-md-5">
          <h2 className="text-center fw-bold mb-4" style={{ color: '#d633ff' }}>
            📬 Contact Us
          </h2>
          <p className="text-center mb-5">
            We'd love to hear from you! Whether it's a question, suggestion, or feedback — drop us a message.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-8">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="Your full name" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>

                <div className="mb-3">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input type="text" className="form-control" id="subject" placeholder="Subject of your message" />
                </div>

                <div className="mb-4">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="5"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUs;
