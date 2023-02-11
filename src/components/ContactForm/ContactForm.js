import { Alert, Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import contactImg from "../../images/pexels-branimir-balogović-3959482.jpg";
import SendIcon from "@mui/icons-material/Send";
import "./ContactForm.css";
const ContactForm = () => {
  const [response, setRespons] = useState(null);
  let alerts;
  const handleContact = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const subject = e.target.subject.value;
    const massage = e.target.massage.value;
    if (name !== "" && email !== "" && subject !== "" && massage !== "") {
      alerts = (
        <Alert className="mt-4" severity="success">
          Your Email has been send
        </Alert>
      );
      setRespons(alerts);
    } else {
      alerts = (
        <Alert className="mt-4" severity="warning">
          Please Complete All Fields
        </Alert>
      );
      setRespons(alerts);
    }
  };
  return (
    <div className="section__padding contact-section ">
      <div className="container">
        <div className="lg:grid grid-cols-2">
          <div>
            <div className="hire-me-box">
              <h4>
                h<span>i</span>re me.
              </h4>
              <p className="text-xl">
                I am available to work. Connect with me via phone:{" "}
                <span>+8801611-044616</span> or email:{" "}
                <span>Ehasanrobin55@gmail.com</span>
              </p>
              <form onSubmit={handleContact} className="contact-form p-3">
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  className="mt-3"
                >
                  <TextField
                    fullWidth
                    color="primary"
                    label="Your Name"
                    id="name"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  className="mt-3"
                >
                  <TextField
                    fullWidth
                    color="primary"
                    label="Your Email"
                    type="email"
                    id="email"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  className="mt-3"
                >
                  <TextField
                    fullWidth
                    color="primary"
                    label="Subject"
                    id="subject"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  className="mt-3"
                >
                  <TextField
                    fullWidth
                    color="primary"
                    multiline
                    minRows={5}
                    maxRows={10}
                    label="Massage"
                    id="massage"
                    InputLabelProps={{
                      style: { color: "#fff" },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& > fieldset": { borderColor: "white" },
                      },
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    width: 500,
                    maxWidth: "100%",
                  }}
                  className="mt-3"
                >
                  <Button className="sendBtn" variant="contained" type="submit">
                    Send
                  </Button>
                </Box>
                {response}
              </form>
            </div>
          </div>
          <div>
            <div className="hire-me-img">
              <img src={contactImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
