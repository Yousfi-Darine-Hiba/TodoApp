import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  FormHelperText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { UserProps } from "../types/user";
import { Emoji, EmojiStyle } from "emoji-picker-react";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { AddAPhoto, Delete, Logout } from "@mui/icons-material";
import { PROFILE_PICTURE_MAX_LENGTH, USER_NAME_MAX_LENGTH } from "../constants";
import { TopBar } from "../components";
import { DialogBtn } from "../styles";

export const UserSettings = ({ user, setUser }: UserProps) => {
  const [name, setName] = useState<string>("");
  const [profilePictureURL, setProfilePictureURL] = useState<string>("");
  const [openChangeImage, setOpenChangeImage] = useState<boolean>(false);
  const emojiStyles = [
    { label: "Apple", style: EmojiStyle.APPLE },
    { label: "Facebook, Messenger", style: EmojiStyle.FACEBOOK },
    { label: "Twitter, Discord", style: EmojiStyle.TWITTER },
    { label: "Google", style: EmojiStyle.GOOGLE },
    // { label: "Native", style: EmojiStyle.NATIVE },
  ];

  useEffect(() => {
    document.title = `Todo App - User ${
      user.name ? "(" + user.name + ")" : ""
    }`;
  }, []);

  const handleEmojiStyleChange = (event: any) => {
    const selectedEmojiStyle = event.target.value;
    setUser({ ...user, emojisStyle: selectedEmojiStyle });
  };

  const handleSaveName = () => {
    setUser({ ...user, name: name });
    setName("");
  };

  const handleOpenImageDialog = () => {
    setOpenChangeImage(true);
  };
  const handleCloseImageDialog = () => {
    setOpenChangeImage(false);
  };
  return (
    <>
      <TopBar title="User Profile" />
      <Container>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          badgeContent={
            <Avatar
              onClick={handleOpenImageDialog}
              sx={{
                background: "#9c9c9c81",
                backdropFilter: "blur(6px)",
                cursor: "pointer",
              }}
            >
              <AddAPhoto />
            </Avatar>
          }
        >
          <Avatar
            onClick={handleOpenImageDialog}
            src={user.profilePicture || ""}
            onError={() => {
              setUser({ ...user, profilePicture: null });
              console.error("Error in profile picture URL");
            }}
            sx={{
              width: "96px",
              height: "96px",
              cursor: "pointer",
            }}
          />
        </Badge>
        <UserName>{user.name || "User"}</UserName>
        <CreatedAtDate>
          Registered since {new Date(user.createdAt).toLocaleDateString()}
        </CreatedAtDate>
        <FormControl>
          <FormHelperText>Emoji Style</FormHelperText>
          <Select
            value={user.emojisStyle}
            onChange={handleEmojiStyleChange}
            sx={{
              width: "250px",
              borderRadius: "18px",
              color: "black",
            }}
          >
            {emojiStyles.map((style) => (
              <MenuItem
                key={style.style}
                value={style.style}
                sx={{
                  padding: "12px 20px",
                  borderRadius: "12px",
                  margin: "8px",
                  display: "flex",
                  gap: "4px",
                }}
              >
                <Emoji size={24} unified="1f60e" emojiStyle={style.style} />
                &nbsp;
                {style.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <StyledInput
          label={user.name === null ? "Add Name" : "Change Name"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={name.length > USER_NAME_MAX_LENGTH}
          helperText={
            name.length > USER_NAME_MAX_LENGTH
              ? `Name is too long maximum ${USER_NAME_MAX_LENGTH} characters`
              : ""
          }
        />
        {name !== "" && name !== user.name && (
          <SaveBtn
            onClick={handleSaveName}
            disabled={name.length > USER_NAME_MAX_LENGTH}
          >
            Save name
          </SaveBtn>
        )}
        <Button
          color="error"
          variant="outlined"
          sx={{ padding: "8px 20px", borderRadius: "14px", marginTop: "8px" }}
        >
          <Logout />
          &nbsp; Logout
        </Button>
      </Container>
      <Dialog
        open={openChangeImage}
        onClose={handleCloseImageDialog}
        PaperProps={{
          style: { borderRadius: "24px", padding: "12px" },
        }}
      >
        <DialogTitle>Change Profile Picture</DialogTitle>
        <DialogContent>
          <StyledInput
            label="Link to profile picture"
            sx={{ margin: "8px 0" }}
            value={profilePictureURL}
            error={profilePictureURL.length > PROFILE_PICTURE_MAX_LENGTH}
            helperText={
              profilePictureURL.length > PROFILE_PICTURE_MAX_LENGTH
                ? `URL is too long maximum ${PROFILE_PICTURE_MAX_LENGTH} characters`
                : ""
            }
            onChange={(e) => {
              setProfilePictureURL(e.target.value);
            }}
          />
          <br />
          <Button
            onClick={() => {
              handleCloseImageDialog();
              setUser({ ...user, profilePicture: null });
            }}
            color="error"
            variant="outlined"
            sx={{ margin: "16px 0", padding: "8px 18px", borderRadius: "12px" }}
          >
            <Delete /> &nbsp; Delete Image
          </Button>
        </DialogContent>
        <DialogActions>
          <DialogBtn onClick={handleCloseImageDialog}>Cancel</DialogBtn>
          <DialogBtn
            onClick={() => {
              if (
                profilePictureURL.length <= PROFILE_PICTURE_MAX_LENGTH &&
                profilePictureURL.startsWith("https://")
              ) {
                handleCloseImageDialog();
                setUser({ ...user, profilePicture: profilePictureURL });
              }
            }}
          >
            Save
          </DialogBtn>
        </DialogActions>
      </Dialog>
    </>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 80px 90px;
  border-radius: 50px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: #f5f5f5;
  color: black;
  border: 4px solid #b624ff;
  box-shadow: 0 0 18px 0 #b624ffbf;
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const StyledInput = styled(TextField)`
  & .MuiInputBase-root {
    border-radius: 16px;
    width: 250px;
  }
`;
const SaveBtn = styled.button`
  width: 250px;
  border: none;
  background: #b624ff;
  color: white;
  font-size: 18px;
  padding: 14px;
  border-radius: 16px;
  cursor: pointer;
`;

const UserName = styled.span`
  font-size: 20px;
  font-weight: 500;
`;

const CreatedAtDate = styled.span`
  font-style: italic;
  font-weight: 300;
  opacity: 0.8;
`;