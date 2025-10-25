interface UserData {
  name: string;
  email: string;
  password: string;
}

const Forms = () => {
  const formAction = async (formData: FormData) => {
    const userData: UserData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    console.log(userData);
  };

  return (
    <form action={formAction}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        className="border-2 border-black rounded"
      />

      <br />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        className="border-2 border-black rounded"
      />
      <br />

      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        id="password"
        className="border-2 border-black rounded"
      />

      <br />

      <button
        type="submit"
        className="mt-10 flex w-3.5 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden"
      >
        Submit
      </button>
    </form>
  );
};
export default Forms;
