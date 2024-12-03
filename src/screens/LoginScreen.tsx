import { useState } from "react";
//import "./Login.less";
import { TextField, Button, Typography } from "@mui/material";
import { chatService } from "../components/Service.ts";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [register, setRegister] = useState(false);

  const loginRegister = () => {
    if (register) {
      chatService.send({
        type: "register",
        email,
        password,
        displayName,
        staySignedIn: true,
      });
    } else {
      chatService.send({
        type: "login",
        email,
        password,
        staySignedIn: true,
      });
    }
  };

  return (
    <div className="Login">
      <span
        onClick={() => document.documentElement.classList.toggle("theme-light")}
        className="logo"
      >
        🗪
      </span>
      <Typography variant="h4" sx={{ marginBottom: 4 }}>
        {register ? "Register" : "Login"}
      </Typography>

      <TextField
        type="email"
        label="Email (someone@example.com)"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        type="password"
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onKeyPress={(e) => e.key === "Enter" && loginRegister()}
        fullWidth
        margin="normal"
      />
      {register && (
        <TextField
          type="text"
          label="Display Name (Agent Smith)"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          fullWidth
          margin="normal"
        />
      )}
      <Button
        type="button"
        onClick={loginRegister}
        variant="contained"
        sx={{ marginTop: 2 }}
      >
        <span className="material-symbols-outlined">login</span>
        {register ? " Register" : " Login"}
      </Button>

      <p>
        {register ? "Switch back to " : "Have no account yet? Go and "}
        <a
          href=""
          onClick={(e) => {
            e.preventDefault();
            setRegister(!register);
          }}
        >
          {register ? "Login" : "Register"}
        </a>
      </p>
    </div>
  );
};

export default LoginScreen;
