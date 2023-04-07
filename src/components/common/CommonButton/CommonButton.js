import React from "react";
import Button from "@mui/material/Button";

//This is our reusuable button component

const CommonButton = ({ children, color, disabled, size, sx, variant }) => {
  return (
    <div>
      {/* The sx prop is better at overriding styles vs. the class prop, it's better performance */}
      <Button
        color={color}
        disabled={disabled}
        size={size}
        variant={variant}
        sx={sx}
      >
        {children}
        {/* The content of the component, this is from the Button API page */}
      </Button>
    </div>
  );
};

export default CommonButton;
