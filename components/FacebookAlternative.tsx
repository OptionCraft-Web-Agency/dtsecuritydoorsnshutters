import React, { useState } from "react";

const MessengerAlt = () => {
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);
  const messengerUrl = "https://www.m.me/202813109587848/";

  const toggleGreeting = () => {
    setIsGreetingVisible(!isGreetingVisible);
  };
  const bgStyle = {
    backgroundImage:
      'url("https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-1/434209865_122131853546181946_299606649790951248_n.jpg?stp=c10.0.80.80a_cp0_dst-jpg_p80x80&_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_ohc=maq13oa4gbkAX997i6V&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfC4JVS69DtQ866CJWyB2Sd5Ha_E1iVksEcQdRqPbBwePw&oe=660F655F")',
    backgroundSize: "cover",
  };
  return (
    <div className="fixed bottom-0 right-3 mb-4 z-50 flex flex-col items-end">
      {isGreetingVisible && (
        <div className="p-4 bg-white rounded-lg shadow-lg text-center w-80">
          <div className="flex justify-between items-center mb-2 py-2 px-3">
            {/* Header section with logo and close button */}
            <div
              style={bgStyle}
              className="w-10 h-10 bg-cover rounded-full"
            ></div>
            <button
              className="text-lg font-semibold"
              onClick={() => setIsGreetingVisible(false)}
            >
              &ndash; {/* HTML entity for minus sign */}
            </button>
          </div>
          <strong className="pt-5">Chat with DT Security</strong>
          <p className="mb-2">Hello! How can we help you?</p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded my-3"
            onClick={() => window.open(messengerUrl, "_blank")}
          >
            Start chat
          </button>
        </div>
      )}

      <div
        className={`transition-transform transform w-14 h-14 rounded-full bg-blue-500 cursor-pointer shadow-lg flex items-center justify-center`}
        onClick={toggleGreeting}
      >
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="white"
            d="M1 17.99C1 8.51488 8.42339 1.5 18 1.5C27.5766 1.5 35 8.51488 35 17.99C35 27.4651 27.5766 34.48 18 34.48C16.2799 34.48 14.6296 34.2528 13.079 33.8264C12.7776 33.7435 12.4571 33.767 12.171 33.8933L8.79679 35.3828C7.91415 35.7724 6.91779 35.1446 6.88821 34.1803L6.79564 31.156C6.78425 30.7836 6.61663 30.4352 6.33893 30.1868C3.03116 27.2287 1 22.9461 1 17.99ZM12.7854 14.8897L7.79161 22.8124C7.31238 23.5727 8.24695 24.4295 8.96291 23.8862L14.327 19.8152C14.6899 19.5398 15.1913 19.5384 15.5557 19.8116L19.5276 22.7905C20.7193 23.6845 22.4204 23.3706 23.2148 22.1103L28.2085 14.1875C28.6877 13.4272 27.7531 12.5704 27.0371 13.1137L21.673 17.1847C21.3102 17.4601 20.8088 17.4616 20.4444 17.1882L16.4726 14.2094C15.2807 13.3155 13.5797 13.6293 12.7854 14.8897Z"
          />
          ;
        </svg>
      </div>
    </div>
  );
};

export default MessengerAlt;
