import React, { useState, useEffect, CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

type FAQItemProps = {
  question: string;
  answer: string;
  isLastItem?: boolean; // optional prop to indicate if it is the last item
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isLastItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const faqItemStyle: CSSProperties = {
    background: 'none',
    padding: '1rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #ccc', // top border for separating items
    borderBottom: isLastItem ? 'none' : '1px solid #ccc', // conditional bottom border based on isLastItem
    margin: '0', // reset any default margins
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
    borderTop: isOpen && !isLastItem ? '1px solid #ccc' : 'none',
  };  

  const iconStyle: CSSProperties = {
    transition: 'transform 0.3s ease',
    transform: isOpen ? 'rotate(180deg)' : 'none',
  };

  return (
    <div style={{  }}>
      <div style={faqItemStyle} onClick={toggleOpen}>
        <div style={questionStyle}>{question}</div>
        <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} style={iconStyle} />
      </div>
      <div style={answerStyle}>
        {isOpen && <p>{answer}</p>}
      </div>
    </div>
  );
};


const FAQSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const faqSectionStyle: CSSProperties = {
    maxWidth: isMobile ? '90vw' : '80vw',
    margin: '2rem auto',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const faqTitleStyle: CSSProperties = {
    background: '#f7f7f7',
    textAlign: 'center',
    padding: '1rem',
    fontSize: 'clamp(0.85rem, 5vw, 1.5rem)', // Further reduced minimum font size for mobile
    fontWeight: 'bold',
    borderBottom: '1px solid #ccc',
  };

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
          isLastItem={index === faqs.length - 1} // Pass this prop to the FAQItem
        />
      ))}
    </div>
  );
};

export default FAQSection;
