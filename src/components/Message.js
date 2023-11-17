import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import pen from "../images/pen.png";
import { TextField } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import CreateIcon from "@mui/icons-material/Create";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import MinimizeIcon from "@mui/icons-material/Minimize";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import CloseIcon from "@mui/icons-material/Close";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";

const style = {
  position: "absolute",
  top: "71%",
  left: "75%",
  transform: "translate(-50%, -55%)",
  width: "40vw",
  minHeight: "550px",
  bgcolor: "background.paper",
  borderRadius: "15px",
  boxShadow: 2,
  padding: "1vw",
  minimized: {
    position: "fixed",
    bottom: "20px",
    left: "50%",
    transform: "translateX(-5%)",
    width: "40vw",
    height: "5px", // Adjust the height as needed
    backgroundColor: "transparent",
    borderRadius: "15px",
    boxShadow: 2,
    padding: "1vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  fullscreen: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "80vw",
    // height:"69vh",
    bgcolor: "background.paper",
    borderRadius: "15px",
    boxShadow: 2,
    padding: "1vw",
  },
};

export default function Message() {
  const [open, setOpen] = React.useState(false);
  const [minimized, setMinimized] = React.useState(false);
  const [fullscreen, setFullscreen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMinimize = () => {
    setMinimized(true);
    setFullscreen(false);
    console.log("minimize clicked");
  };
  const handleFullScreen = () => {
    setFullscreen(true);

  }
  const handleMinToFull = () => {
    setMinimized(false);
    setFullscreen(true);
  }

  return (
    <div>
      <div
        onClick={handleOpen}
        style={{
          cursor: "pointer",
          height: "4.5vw",
          marginLeft: "1.2vw",
          width: "10vw",
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
      {/* {minimized ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={style.minimized}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "40.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={() => setMinimized(false)}
                sx={{ width: "1vw", height: "1vw", marginLeft: "30vw" }}
              />
              <CloseFullscreenIcon
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={style}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "40.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={handleMinimize}
                sx={{ width: "1vw", height: "1vw", marginLeft: "30vw" }}
              />
              <OpenInFullIcon
                onClick={handleFullScreen}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
            <TextField
              variant="standard"
              placeholder="Recipients"
              sx={{ marginTop: "2vw", width: "40vw" }}
            />
            <br />
            <TextField
              variant="standard"
              placeholder="Subject"
              sx={{ width: "40vw" }}
            />
            <br />
            <TextField
              multiline
              rows={12}
              sx={{ width: "39vw", "& fieldset": { border: "none" } }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "2vw",
                fontSize: "0.8vw",
                width: "7vw",
                height: "2vw",
              }}
            >
              Send | <ArrowDropDownIcon />
            </Button>
            <FormatColorTextIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AttachFileIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertLinkIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <EmojiEmotionsIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AddToDriveIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertPhotoIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <LockPersonIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <CreateIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <MoreVertIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />

            <DeleteIcon
              sx={{
                marginLeft: "12vw",
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
          </Box>
        </Modal>
      )}

      {fullscreen ? (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
        >
          <Box sx={style.fullscreen}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "80.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={handleMinimize}
                sx={{ width: "1vw", height: "1vw", marginLeft: "70vw" }}
              />
              <CloseFullscreenIcon
                onClick={() => setFullscreen(false)}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
            <TextField
              variant="standard"
              placeholder="Recipients"
              sx={{ marginTop: "2vw", width: "80vw" }}
            />
            <br />
            <TextField
              variant="standard"
              placeholder="Subject"
              sx={{ width: "80vw" }}
            />
            <br />
            <TextField
              multiline
              rows={12}
              sx={{ width: "39vw", "& fieldset": { border: "none" } }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "2vw",
                fontSize: "0.8vw",
                width: "7vw",
                height: "2vw",
              }}
            >
              Send | <ArrowDropDownIcon />
            </Button>
            <FormatColorTextIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AttachFileIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertLinkIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <EmojiEmotionsIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AddToDriveIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertPhotoIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <LockPersonIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <CreateIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <MoreVertIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />

            <DeleteIcon
              sx={{
                marginLeft: "52vw",
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
          </Box>
        </Modal>
      ) : (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={style}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "40.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={handleMinimize}
                sx={{ width: "1vw", height: "1vw", marginLeft: "30vw" }}
              />
              <OpenInFullIcon
                onClick={handleFullScreen}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
            <TextField
              variant="standard"
              placeholder="Recipients"
              sx={{ marginTop: "2vw", width: "40vw" }}
            />
            <br />
            <TextField
              variant="standard"
              placeholder="Subject"
              sx={{ width: "40vw" }}
            />
            <br />
            <TextField
              multiline
              rows={12}
              sx={{ width: "39vw", "& fieldset": { border: "none" } }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "2vw",
                fontSize: "0.8vw",
                width: "7vw",
                height: "2vw",
              }}
            >
              Send | <ArrowDropDownIcon />
            </Button>
            <FormatColorTextIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AttachFileIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertLinkIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <EmojiEmotionsIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AddToDriveIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertPhotoIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <LockPersonIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <CreateIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <MoreVertIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />

            <DeleteIcon
              sx={{
                marginLeft: "12vw",
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
          </Box>
        </Modal>
      )} */}

      {minimized && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={style.minimized}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "40.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={() => setMinimized(false)}
                sx={{ width: "1vw", height: "1vw", marginLeft: "30vw" }}
              />
              <CloseFullscreenIcon
                onClick={handleMinToFull}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
          </Box>
        </Modal>
      )}
      {fullscreen && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
        >
          <Box sx={style.fullscreen}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "80.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={handleMinimize}
                sx={{ width: "1vw", height: "1vw", marginLeft: "70vw" }}
              />
              <CloseFullscreenIcon
                onClick={() => setFullscreen(false)}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
            <TextField
              variant="standard"
              placeholder="Recipients"
              sx={{ marginTop: "2vw", width: "80vw" }}
            />
            <br />
            <TextField
              variant="standard"
              placeholder="Subject"
              sx={{ width: "80vw" }}
            />
            <br />
            <TextField
              multiline
              rows={12}
              sx={{ width: "39vw", "& fieldset": { border: "none" } }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "2vw",
                fontSize: "0.8vw",
                width: "7vw",
                height: "2vw",
              }}
            >
              Send | <ArrowDropDownIcon />
            </Button>
            <FormatColorTextIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AttachFileIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertLinkIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <EmojiEmotionsIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AddToDriveIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertPhotoIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <LockPersonIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <CreateIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <MoreVertIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />

            <DeleteIcon
              sx={{
                marginLeft: "52vw",
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
          </Box>
        </Modal>
      )}
      {!minimized && !fullscreen && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          PaperProps={{ margin: 0, padding: 0 }}
          BackdropProps={{
            style: {
              backgroundColor: "transparent",
            },
          }}
        >
          <Box sx={style}>
            <Typography
              style={{
                backgroundColor: "#EDF9FF",
                position: "absolute",
                top: "0",
                left: "0",
                padding: "0.6vw",
                width: "40.8vw",
                borderTopLeftRadius: "10px",
                borderTopRightRadius: "10px",
                fontSize: "1vw",
              }}
            >
              New Message
              <MinimizeIcon
                onClick={handleMinimize}
                sx={{ width: "1vw", height: "1vw", marginLeft: "30vw" }}
              />
              <OpenInFullIcon
                onClick={handleFullScreen}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
              <CloseIcon
                onClick={handleClose}
                sx={{ width: "1vw", height: "1vw", marginLeft: "0.4vw" }}
              />
            </Typography>
            <TextField
              variant="standard"
              placeholder="Recipients"
              sx={{ marginTop: "2vw", width: "40vw" }}
            />
            <br />
            <TextField
              variant="standard"
              placeholder="Subject"
              sx={{ width: "40vw" }}
            />
            <br />
            <TextField
              multiline
              rows={12}
              sx={{ width: "39vw", "& fieldset": { border: "none" } }}
            />
            <br />
            <Button
              variant="contained"
              sx={{
                borderRadius: "2vw",
                fontSize: "0.8vw",
                width: "7vw",
                height: "2vw",
              }}
            >
              Send | <ArrowDropDownIcon />
            </Button>
            <FormatColorTextIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AttachFileIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertLinkIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <EmojiEmotionsIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <AddToDriveIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <InsertPhotoIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <LockPersonIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <CreateIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
            <MoreVertIcon
              sx={{
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />

            <DeleteIcon
              sx={{
                marginLeft: "12vw",
                paddingLeft: "1vw",
                marginTop: "3vw",
                paddingTop: "1vw",
                width: "1vw",
                height: "1vw",
              }}
            />
          </Box>
        </Modal>
      )}
    </div>
  );
}
