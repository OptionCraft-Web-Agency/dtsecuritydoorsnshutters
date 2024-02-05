import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type FAQItemProps = {
  question: string;
  answer: string;
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const faqItemStyle: CSSProperties = {
    background: 'none',
    borderBottom: '1px solid #ccc',
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const questionStyle: CSSProperties = {
    fontWeight: 'bold',
    flexGrow: 1,
  };

  const answerStyle: CSSProperties = {
    lineHeight: '1.5',
    transition: 'max-height 0.3s ease',
    maxHeight: isOpen ? '500px' : '0',
    overflow: 'hidden',
    padding: isOpen ? '1rem' : '0 1rem',
  };

  const iconStyle: CSSProperties = {
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <div style={faqItemStyle} onClick={toggleOpen}>
      <div style={questionStyle}>{question}</div>
      <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} style={iconStyle} />
      <div style={answerStyle}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const faqSectionStyle: CSSProperties = {
    maxWidth: '80vw',
    margin: '2rem auto',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const faqTitleStyle: CSSProperties = {
    background: '#f7f7f7',
    textAlign: 'center',
    padding: '1rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc',
  };

  // Additional FAQs can be added here
  const faqs = [
    {
      question: "What factors should I consider when purchasing security doors?",
      answer: "Consider factors such as the door's material, the locking mechanism, the level of security provided, and the door's compliance with Australian Standards."
    },
    {
      question: "Are custom sizes available for security doors?",
      answer: "Yes, we offer custom sizing to ensure that our security doors fit perfectly with your specific doorways and spaces."
    },
    {
      question: "How do I maintain my security doors?",
      answer: "Regular cleaning with mild soap and water, checking the locks and hinges for smooth operation, and scheduling periodic maintenance checks are recommended."
    },
    {
      question: "Can I install a security door on my own?",
      answer: "While DIY installation is possible, we recommend professional installation to ensure that your security door functions effectively and safely."
    },
    {
      question: "What is the lead time for security door installation?",
      answer: "Lead times can vary based on the custom nature of your order and our current workload. We strive to complete installations within a few weeks from order confirmation."
    },
    {
      question: "Do you provide warranties for your security doors?",
      answer: "Yes, we provide a manufacturer's warranty on our security doors, covering any defects in materials or workmanship."
    },
    {
      question: "Are your security doors energy efficient?",
      answer: "Our doors are designed with energy efficiency in mind, helping to insulate your home and potentially reduce energy costs."
    },
    {
      question: "How secure are your roller shutters?",
      answer: "Our roller shutters are made from high-quality materials and are designed to provide a high level of security against intruders."
    },
    {
      question: "How can I get a quote for my project?",
      answer: "You can request a quote by contacting us directly through our website, phone, or visiting our showroom."
    },
    // ... more FAQs
  ];
  

  return (
    <div style={faqSectionStyle}>
      <div style={faqTitleStyle}>FAQ</div>
      {faqs.map((faq, index) => (
        <FAQItem 
          key={index}
          question={faq.question} 
          answer={faq.answer} 
        />
      ))}
    </div>
  );
};

export default FAQSection;
