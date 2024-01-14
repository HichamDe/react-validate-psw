import { useEffect, useState } from "react";


function App() {
  const [contraints, setContraints] = useState("");
  const [inp1, setInp1] = useState("");
  const [inp2, setInp2] = useState("");

  // this function will check if a string contains a set of
  // rules for strong password standards
  function checkMissingContraints(password) {
    setContraints({
      length: password.length > 8,
      lowercase: /.*[a-z]/g.test(password),
      uppercase: /.*[A-Z]/g.test(password),
      number: /.*[0-9]/g.test(password),
      symbol: /.*[!@#\$%\^\&*\)\(+=._-]/g.test(password)
    });
  }

  // Executed when all the required inputs are filled up
  function submit(e) {
    e.preventDefault();
    if (!(inp1 == inp2)) {
      alert('Enter the same password !');
    } else {
      alert("Strong Password")
    }

  }

  useEffect(() => {
    checkMissingContraints(inp1);
  }, [inp1]);

  return (
    <div className="flex justify-center items-center h-[100vh]">

      <div class="w-full max-w-sm p-4 bg-white border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form class="space-y-6" onSubmit={submit} action="#">
          <h5 class="text-xl font-medium text-gray-900 dark:text-white">SignUp to our platform</h5>

          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
            <input onChange={(e) => { setInp1(e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
            <input onChange={(e) => setInp2(e.target.value)} type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
          </div>

          <div class="flex items-start">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <a href="#" class="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
          </div>
          <section className="">

            {!contraints.length ? <p className="text-red-500">Greater Then 8 Charachters</p> : ""}
            {!contraints.uppercase ? <p className="text-red-500">At Least 1 UpperCase</p> : ""}
            {!contraints.lowercase ? <p className="text-red-500"> At Least 1 LowerCase</p> : ""}
            {!contraints.number ? <p className="text-red-500">At Least 1 Number</p> : ""}
            {!contraints.symbol ? <p className="text-red-500">At Least 1 Symbol</p> : ""}

          </section>
          <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
          <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
