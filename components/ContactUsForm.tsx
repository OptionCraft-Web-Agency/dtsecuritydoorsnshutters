import React, { CSSProperties } from 'react';

const ContactUsForm: React.FC = () => {
  const containerStyle: CSSProperties = {
    height: '50vw',
    width: '100%',
    backgroundImage: 'url(/RollerDoor2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const formStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '80vh'
  };

  const inputStyle: CSSProperties = {
    width: '49%',
    marginBottom: '2vw',
    padding: '0.5vw',
    borderRadius: '0.5vw',
    border: '1px solid black',
  };

  const buttonStyle: CSSProperties = {
    padding: '1vw',
    border: 'none',
    borderRadius: '0.5vw',
    color: 'white',
    fontSize: 'min(1.5vw, 16px)',
    cursor: 'pointer',
    backgroundColor: 'rgba(0, 87, 255)',
    boxShadow: '2px 2px 4px 0px rgba(22, 110, 187, 0.32)',
    transition: 'background-color 0.3s, transform 0.3s',
    width:'100%'
  };

  const hoverButtonStyle: CSSProperties = {
    ...buttonStyle,
    backgroundColor: 'rgba(0, 77, 255)',
    transform: 'scale(1.05)',
  };

  return (
    <div style={containerStyle}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: '1rem',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}>
        <p style={{ fontSize: 'min(3vw, 30px)', padding: '10px 0px', fontWeight: 'bold' }}>
          Enquire Form
        </p>

        <form style={formStyle}>
          {/* Name and Email */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: 'min(1.5vw, 16px)' }}>
            <input type="text" id="name" name="name" placeholder="Name" style={inputStyle} />
            <input type="email" id="email" name="email" placeholder="Email" style={inputStyle} />
          </div>

          {/* Phone and Address */}
          <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', fontSize: 'min(1.5vw, 16px)' }}>
            <input type="phone" id="phone" name="phone" placeholder="Phone Number" style={inputStyle} />
            <input type="address" id="address" name="address" placeholder="Address" style={inputStyle} />
          </div>

          {/* Message */}
          <textarea id="message" name="message" placeholder="Message" rows={4} style={{
            marginBottom: '2vw',
            padding: '0.5vw',
            borderRadius: '0.5vw',
            border: '1px solid black',
            fontSize: 'min(1.5vw, 16px)',
            width: '100%'
          }} />

          {/* Submit Button */}
          <button
            type="submit"
            style={buttonStyle}
            onMouseEnter={(e) => (e.currentTarget.style.cssText = Object.entries(hoverButtonStyle).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';'))}
            onMouseLeave={(e) => (e.currentTarget.style.cssText = Object.entries(buttonStyle).map(([key, value]) => `${key.replace(/([A-Z])/g, '-$1').toLowerCase()}:${value}`).join(';'))}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
