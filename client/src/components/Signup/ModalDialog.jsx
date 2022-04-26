import React, { useState } from "react";
import Dialog from "@material-ui/core/Dialog";
import Form from "./Form.jsx";

function ModalDialog() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <Form handleClose={handleClose} />
    </Dialog>
  );
}

export default ModalDialog;
