import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import React, { useState } from "react";
import waterFall from "../assets/waterFall.jpg";
const PageSearch = () => {
  const [search, setSearch] = useState<string>();
  return (
    <div
      style={{
        backgroundImage: `url(${waterFall})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex justify-center items-center"
    >
      <div className="">
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
      </div>
    </div>
  );
};

export default PageSearch;
