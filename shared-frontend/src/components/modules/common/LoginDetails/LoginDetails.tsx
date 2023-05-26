import { Visibility, VisibilityOff } from "@mui/icons-material";
import { Box, Button, IconButton, Stack } from "@mui/material";

import styled from "@emotion/styled";
import Colors from "@j2w/shared-frontend/utils/styles/Colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomLabel from "./CustomLabel";
import CustomTextField from "./CustomTextField";

const CustomField = styled(CustomTextField)({
  ".css-md26zr-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "38px",
  },
});

const CustomPassField = styled(CustomField)({
  ".css-154xyx0-MuiInputBase-root-MuiOutlinedInput-root": {
    borderRadius: "38px",
  },
});
export default function LoginDetails() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = {
      emaoil: email,
      password: password,
    };
    console.log(data);
    navigate("/dashboard");
  };

  return (
    <form style={{ maxWidth: 480, margin: "auto", padding: "20px" }}>
      <Stack
        spacing={1}
        direction="column"
        display="flex"
        alignItems="flex-start"
      >
        <CustomLabel color={Colors.LOGIN_PAGE_TYPO}>Email address</CustomLabel>
        <CustomField
          placeholder="Enter your email ID"
          value={email}
          onChange={setEmail}
          sx={{ borderRadius: "38px" }}
        />
        <CustomLabel color={Colors.LOGIN_PAGE_TYPO}>Password</CustomLabel>
        <CustomPassField
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          value={password}
          onChange={setPassword}
          endIcon={
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleTogglePassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          }
          sx={{ borderRadius: "38px" }}
        />
        <Box display="flex" alignSelf="flex-end">
          <Button
            style={{
              color: Colors.LOGIN_BUTTON,
              textDecorationLine: "underline",
            }}
            variant="text"
          >
            forgot password
          </Button>
        </Box>
      </Stack>
      <Box mt={4}>
        <Button
          onClick={handleSubmit}
          type="submit"
          style={{
            width: "100%",
            height: "50px",
            background: Colors.LOGIN_BUTTON,
            color: Colors.WHITE,
            borderRadius: "37px",
          }}
        >
          Login to your account
        </Button>
      </Box>
    </form>
  );
}
