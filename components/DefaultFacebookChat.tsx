import React, { useEffect } from "react";

declare global {
  interface Window {
    fbAsyncInit: () => void;
    FB: any; // This is a quick fix. For a better type safety, define the exact structure of the 'FB' object based on the Facebook SDK documentation
  }
}

const DefaultFacebookChat: React.FC = () => {
  useEffect(() => {
    // Define the function to load the Facebook SDK
    const loadFbSDK = () => {
      window.fbAsyncInit = function () {
        if (window.FB) {
          window.FB.init({
            xfbml: true,
            version: "v18.0",
          });
        }
      };

      // Load the Facebook SDK script
      (function (d, s, id) {
        var js: HTMLScriptElement,
          fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id) || !fjs.parentNode) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
      })(document, "script", "facebook-jssdk");
    };

    // Inject the Messenger chat plugin script
    const setAttributes = () => {
      var chatbox = document.getElementById("fb-customer-chat");
      if (chatbox) {
        chatbox.setAttribute("page_id", "176279788911063");
        chatbox.setAttribute("attribution", "biz_inbox");
      }
    };

    // Load the Facebook SDK
    loadFbSDK();
    // Set attributes for the chat plugin
    setAttributes();
  }, []);

  return (
    <>
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
    </>
  );
};

export default DefaultFacebookChat;
