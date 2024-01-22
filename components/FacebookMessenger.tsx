"Use Client";
import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessenger = () => {
  return (
    <FacebookProvider appId="390037466724849" chatSupport>
      <CustomChat pageId="176279788911063" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookMessenger;
