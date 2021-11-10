import { IconButton } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import React from "react";

import { pushMessage } from "../firebase";

const MessageSubmitButton = ({ name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ""}
      onClick={() => {
        pushMessage({ name: "おれ", text });
        setText("");
      }}>
      <SendIcon />
    </IconButton>
  );
};

export default MessageSubmitButton;
