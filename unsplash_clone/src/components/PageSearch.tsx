import { Search } from "@mui/icons-material";
import { IconButton, InputBase } from "@mui/material";
import React, { useState } from "react";
import waterFall from "../assets/waterFall.jpg";
import { image } from "../types";
type allProps = {
  searchApi: (values: string | undefined) => void;
};
const PageSearch = ({ searchApi }: allProps) => {
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
                  console.log(search);
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
