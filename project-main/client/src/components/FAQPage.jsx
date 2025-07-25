import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/navBar';
import Footer from '../components/Fottor';

const faqs = [
  {
    question: 'What is Hack the Future?',
    answer: 'Hack the Future is a 36-hour hackathon where innovators come together to build, break, and innovate solutions for real-world problems.'
  },
  {
    question: 'Who can participate?',
    answer: 'Anyone with a passion for technology, including students, professionals, and startup enthusiasts from anywhere in the world.'
  },
  {
    question: 'Is there any registration fee?',
    answer: 'No, registration is completely free for all participants.'
  },
  {
    question: 'How do I register?',
    answer: 'You can register through our official Google Form linked on the homepage. Click “Register Now” to get started.'
  },
  {
    question: 'Can I participate solo or do I need a team?',
    answer: 'Both are welcome! You can participate individually or form a team of up to 4 members.'
  },
  {
    question: 'What are the prizes?',
    answer: 'We have exciting cash prizes, sponsor goodies, internships, and much more. Visit the Prizes section for details.'
  },
  {
    question: 'What is the event schedule?',
    answer: 'The hackathon will be held on September 13–14, 2025. Detailed scheduling is available in the Schedule section.'
  },
  {
    question: 'Do I need to be physically present?',
    answer: 'No. This is a hybrid hackathon. You can join remotely or attend in person depending on the track you choose.'
  }
];

const FAQPage = () => {
  return (
    <>
      <Navbar />

      <div className="container my-5 py-5 text-light" style={{ backgroundColor: '#0c0624', borderRadius: '20px' }}>
        <h2 className="text-center mb-4 fw-bold">Frequently Asked Questions</h2>

        <div className="accordion" id="faqAccordion">
          {faqs.map((faq, index) => (
            <div className="accordion-item bg-dark text-light border-0 mb-3" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className="accordion-button bg-dark text-light collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`collapse${index}`}
                >
                  {faq.question}
                </button>
              </h2>
              <div
                id={`collapse${index}`}
                className="accordion-collapse collapse"
                aria-labelledby={`heading${index}`}
                data-bs-parent="#faqAccordion"
              >
                <div className="accordion-body">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default FAQPage;
