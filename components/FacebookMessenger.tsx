"Use Client";
import React, { Component } from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessenger = () => {
  return (
    <FacebookProvider appId="390037466724849" chatSupport>
      <CustomChat pageId="202813109587848" minimized={false} />
    </FacebookProvider>
  );
};

export default FacebookMessenger;
