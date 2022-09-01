import React, { useState } from "react";
import { Button, Error, Input, FormField, Label } from "./styles";

function LoginForm({ onLogin, setCurrentMember }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  

  function HandleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((member) => setCurrentMember(member));
      } else {
        r.json().then((err) => setErrors(err.errors));
        errorSpace = <Error key={errors}>{errors}</Error>
        console.log(errorSpace)
        errorSpace.forceUpdate()
      }
    });
  }
  console.log({errors})

  let errorSpace = <div></div>;

  return (
    <form onSubmit={HandleSubmit}>
      <div>
        <Label htmlFor="username">Username</Label>
        <Input
          type="text"
          id="username"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <FormField>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </FormField>
      <FormField>
        <Button variant="fill" color="primary" type="submit">
          {isLoading ? "Loading..." : "Login"}
        </Button>
      </FormField>
      <FormField>
        {errorSpace}
      </FormField>
    </form>
  );
}

//console.log(errors) - this results in a string of errors we need to know if we want to produce an array of errors or a single error

export default LoginForm;