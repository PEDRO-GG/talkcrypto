import Head from "next/head";

export default function Login() {
  return (
    <div className="flex flex-col items-center h-screen ">
      <Head>
        <title>Login</title>
      </Head>
      <h1 className="mt-10 mb-12 text-6xl">Sign In</h1>
      <form className="sm:w-96 w-72">
        <div className="mb-4">
          <label className="block mb-2 font-light text-md" htmlFor="username">
            Username
          </label>
          <input
            className="w-full p-4 font-light leading-tight border border-gray-500 appearance-none bg-drabya-gray focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            id=""
            placeholder="Username"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-light text-md" htmlFor="password">
            Password
          </label>
          <input
            className="w-full p-4 font-light leading-tight border border-gray-500 appearance-none bg-drabya-gray focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            id=""
            placeholder="Password"
          />
        </div>

        <div className="flex justify-center mb-5">
          <button
            className="inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase bg-black rounded hover:shadow-lg focus:outline-none hover:bg-white hover:text-black"
            type="button"
          >
            LOGIN
          </button>
        </div>
        <p className="font-light text-center text-md">
          Don't have an account?{" "}
          <a className="font-bold text-black underline cursor-pointer text-md">
            Create
          </a>
        </p>
      </form>
    </div>
  );
}
