import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import pen from "../images/pen.png";

const style = {
  position: 'absolute',
  top: '61%',
  left: '71%',
  transform: 'translate(-50%, -50%)',
  width: "40vw",
  minHeight: "505px", 
  height: "35vw",
  bgcolor: 'background.paper',
//   border: '2px solid #000',
  boxShadow: 24,
  padding: "1vw",
};

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          height: "4.5vw",
          marginLeft: "1vw",
          width: "12vw",
          display: "flex",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#BEE0FF",
        }}
      >
        <img
          alt="pen-img"
          src={pen}
          style={{ width: "1.2vw", marginLeft: "2vw" }}
        />
        <h4
          style={{
            marginLeft: "1vw",
            marginRight: "1.6vw",
            fontWeight: "400",
            fontSize: "1vw",
          }}
        >
          Compose
        </h4>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
