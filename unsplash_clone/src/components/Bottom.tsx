import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Bottom = () => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="mt-16 fixed z-50 bg-white w-full">
      <Box sx={{ width: "100%" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="wrapped label tabs example"
        >
          <Tab value="one" label="Editorial" wrapped />
          <Tab value="two" label="Wallpapers" />
          <Tab value="three" label="3D renders" />
        </Tabs>
      </Box>
    </div>
  );
};
export default Bottom;
