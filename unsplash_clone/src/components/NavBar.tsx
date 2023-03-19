import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  InputBase,
  IconButton,
  Button,
} from "@mui/material";

import { Search } from "@mui/icons-material";
import icon from "../assets/unsplash_icon.png";
import MenuIcon from "@mui/icons-material/Menu";
const NavBar = () => {
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }} elevation={0}>
      <Toolbar>
        <img src={icon} className="w-6 h-6 mr-5" />

        <InputBase
          sx={{
            backgroundColor: "#EEEEEE",
            gap: 2,
            borderRadius: 3,
            width: "100vh",
          }}
          placeholder="Search for images"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <IconButton>
              <Search />
            </IconButton>
          }
        />
        <Tabs sx={{ marginLeft: "auto" }}>
          <Tab
            label="Explore"
            sx={{
              fontSize: "12px",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <Tab
            label="Advertise"
            sx={{
              fontSize: "12px",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <Tab
            label="Unsplash +"
            sx={{
              fontSize: "12px",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <span className="bg-gray-400 w-[1px] h-8"></span>
          <Tab
            label="Login"
            sx={{
              fontSize: "12px",
              "&:hover": {
                color: "black",
              },
            }}
          />
          <span className="text-black mt-2">/</span>
          <Tab
            label="Sign Up"
            sx={{
              fontSize: "12px",
              "&:hover": {
                color: "black",
              },
            }}
          />
        </Tabs>
        <Button
          variant="outlined"
          sx={{ fontSize: "10px", color: "black", borderColor: "black" }}
        >
          Submit a photo
        </Button>
        <div className="ml-4">
          <MenuIcon sx={{ color: "black" }} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
