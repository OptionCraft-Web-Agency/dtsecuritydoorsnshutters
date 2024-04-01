import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMessenger = () => {
  return (
    <FacebookProvider appId="1095362448401059" chatSupport language="en_US">
      <CustomChat
        pageId="202813109587848"
        minimized={false ? true : undefined}
      />
    </FacebookProvider>
  );
};

export default FacebookMessenger;
