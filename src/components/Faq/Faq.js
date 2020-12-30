import React, { useState } from 'react'
import Header from './Header'
import FaqElements from './FaqElements'
import './Faq.css'
function Faq() {
    const [faqs, setfaqs] = useState([
        {
            question: 'What range/area you are covering for services?',
            answer: 'Currently, we are covering Thane, Mumbai, and Navi Mumbai.',
            open: true
        },
        {
            question: 'What are the different services you are offering than my regular mechanic or Garage?',
            answer: 'We are providing a marketplace that offers two-wheeler services anywhere in the city with a 1-month service warranty to ensure the best services to our clients which your regular mechanic cannot commit every time. Apart from this, we are offering an emergency service database for the Towing service. To add to it, we provide emergency roadside assistance such as spot repair, Flat tire, Fuel delivery, key replacement, customized services, etc.',
            open: false
        },
        {
            question: 'Do you offer 24/7 service?',
            answer: 'Yes. We are committed to providing emergency services to our users 24/7. Regular Service and other one time services are provided in the day time between 9:00 AMto 9:00 PM as per the user’s comfort.',
            open: false
        },
        {
            question: 'What if I don’t like your services? Will I get my money back?',
            answer: 'You can register your concern with the company’s grievance department and the company will verify the concern. If it’s the vendor’s fault, then we will fix it or refund the labor charges availed by the vendor.',
            open: false
        }, {
            question: 'Is there any customer care/grievance helpline number available for customers?',
            answer: 'Yes. You can register your complaint through helpline number +91 9137195105 as well as through support@coegii.com.',
            open: false

        },
        {
            question: 'Is there any rating system to rate your services for all the services we avail of?',
            answer: 'Yes, you can rate vendors after each service within 30 days. Our customer support team will get in touch with you to take your feedback about the service availed from us.',
            open: false
        },
        {
            question: 'How can I cancel my Booking?',
            answer: 'Booking once done can be canceled any time before 1 hr from the start of the service. If it’s canceled after that you will be charged Rs 50 as cancellation charges in the next booking.',
            open: false
        },
        {
            question: 'What is the difference between Grease Monkey RSA membership and other RSA membership?',
            answer: 'We have a very large network of vendors so you can rest assured of any emergency support. We are providing towing service, roadside on spot repair, key replacement, flat tire support &fuel delivery under our RSA membership.',
            open: false
        },
        {
            question: 'Can I pay my bill by cash or by installment?',
            answer: 'Not yet. We may reach there soon.',
            open: false
        }

    ]);

    const toggleFaqElements = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            } else {
                faq.open = false
            }
            return faq;
        }))
    }

    return (
        <div id="Faq">
            <Header />
            <div className="faqs">
                {faqs.map((faq, i) => (
                    <FaqElements faq={faq} index={i} toggleFaqElements={toggleFaqElements} />
                ))}

            </div>
        </div>
    );
}

export default Faq
