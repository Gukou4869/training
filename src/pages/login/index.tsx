import { useState } from "react";

import { useRouter } from "next/router";

import { signUp } from "@/lib/firebase/utils/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async () => {
    const { error, result } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    return router.push("/");
  };
  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Sign up</h1>
        <form className="form" onSubmit={handleForm}>
          <label htmlFor="email">
            <p>Email</p>
            <input
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@mail.com"
              required
              type="email"
            />
          </label>
          <label htmlFor="password">
            <p>Password</p>
            <input
              id="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
              type="password"
            />
          </label>
          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
