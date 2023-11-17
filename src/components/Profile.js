import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Avatar } from "@mui/material";
import { auth, googleProvider } from "../firebase/setup";
import logout from "../images/logout.png";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const style = {
  position: "absolute",
  top: "33%",
  left: "77%",
  transform: "translate(-50%, -50%)",
  width: "30vw",
  height: "40vh",
  bgcolor: "#D8E4F0",
  boxShadow: "24",
  borderRadius: "40px",
  border: "none",
  padding: "2vw",
};

export default function Profile() {


const navigate = useNavigate();


  const logoutGmail = async () => {
    try {
      await signOut(auth, googleProvider);
      auth.currentUser === null &&  navigate("/");
    } catch (err) {
      console.error(err);
    }
  };
  console.log(auth.currentUser);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Avatar
        onClick={handleOpen}
        sx={{
          marginLeft: "0vw",
          width: "2.1vw",
          height: "2.1vw",
          cursor: "pointer",
        }}
        src={auth.currentUser?.photoURL}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ textAlign: "center", fontSize: "1.2vw" }}>
            {auth.currentUser?.email}
          </Typography>
          <Avatar
            onClick={handleOpen}
            sx={{
              marginLeft: "12.6vw",
              width: "4.7vw",
              height: "4.7vw",
              cursor: "pointer",
              marginTop: "2vw",
            }}
            src={auth.currentUser?.photoURL}
          />
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "center", fontSize: "2vw" }}
          >
            Hi, {auth.currentUser?.displayName}!
          </Typography>
          <button
            onClick={logoutGmail}
            style={{
              cursor: "pointer",
              fontSize: "1vw",
              border: "1px solid white",
              borderRadius: "2vw",
              marginTop: "2vw",
              width: "14vw",
              height: "4vw",
              marginLeft: "7vw",
            }}
          >
            <img alt="logout-img" style={{ width: "0.8vw" }} src={logout} />
            SignOut
          </button>
          <Typography
            sx={{
              fontSize: "0.8vw",
              fontWeight: "100",
              marginLeft: "8.2vw",
              marginTop: "1vw",
            }}
          >
            Privacy Policy . Terms of Service
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
