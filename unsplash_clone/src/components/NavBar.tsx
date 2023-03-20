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

import { useState } from "react";
import { image } from "../types";

type allProps = {
  allData: image[];
  searchApi: (values: string | undefined) => void;
};

const NavBar = ({ searchApi }: allProps) => {
  const [search, setSearch] = useState<string>();
  return (
    <AppBar position="fixed" sx={{ backgroundColor: "white" }} elevation={0}>
      <Toolbar>
        <img src={icon} className="w-6 h-6 mr-5" />

        <InputBase
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          sx={{
            backgroundColor: "#EEEEEE",
            gap: 2,
            borderRadius: 3,
            width: "90vh",
          }}
          placeholder="Search for images"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <IconButton>
              <Search
                onClick={(e) => {
                  e.preventDefault();
                  if (search) searchApi(search);
                }}
              />
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
