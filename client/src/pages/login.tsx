import axios from "axios";
import { useRouter } from "next/dist/client/router";
import Head from "next/head";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useAuthDispatch, useAuthState } from "../context/auth";
import ErrorMessage from "../components/ErrorMessage";
import InputGroup from "../components/InputGroup";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string[]>([]);
  const router = useRouter();
  const dispatch = useAuthDispatch();
  const { authenticated } = useAuthState();

  if (authenticated) router.push("/");

  const submitForm = async (event: FormEvent) => {
    event.preventDefault();

    try {
      const res = await axios.post("/auth/signIn", {
        username: username,
        password: password,
      });
      dispatch({ type: "LOGIN", payload: res.data.username });
      localStorage.setItem("accessToken", res.data.accessToken);
      router.push("/");
    } catch (error) {
      let errors = error.response.data.message;
      if (typeof errors === "string") {
        setMessage([errors]);
      } else {
        setMessage(errors);
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Login</title>
      </Head>
      <h1 className="mt-10 mb-12 text-6xl">Sign In</h1>
      <form className="sm:w-96 w-72" onSubmit={submitForm}>
        <InputGroup
          type="text"
          label="Username"
          error={message.length > 0}
          value={username}
          setValue={setUsername}
        />
        <InputGroup
          type="password"
          label="Password"
          error={message.length > 0}
          value={password}
          setValue={setPassword}
        />

        <div className="flex justify-center mb-5">
          <button
            className="inline-block px-6 py-2 text-xs font-medium text-center text-white uppercase bg-black rounded hover:shadow-lg hover:bg-white hover:text-black"
            type="submit"
          >
            LOGIN
          </button>
        </div>
        <p className="font-light text-center text-md">
          Don't have an account?{" "}
          <Link href="/register">
            <a className="font-bold text-black underline cursor-pointer text-md">
              Create
            </a>
          </Link>
        </p>
      </form>
      <ErrorMessage show={message.length > 0} errors={message} />
    </div>
  );
}
