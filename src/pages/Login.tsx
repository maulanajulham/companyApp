import Logo from "@/assets/logo.png";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      
      {/* Kartu Formulir */}
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-xl shadow-2xl">
          <div className="flex flex-row jusrify-center items-center gap-3">
            <img 
                src={Logo} 
                alt="Nama Perusahaan Logo" 
                className="w-15 ml-5" 
                loading="lazy"
         />
        <h2 className="text-xl font-bold text-center text-gray-900">
          PT. Diamond Propertindo
        </h2>

          </div>
          

        <form className="space-y-6">
          
          {/* Grup Input Email */}
          <div>
            <label 
              htmlFor="email" 
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                //onChange={(e) => setEmail(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Masukkan email Anda"
              />
            </div>
          </div>

          {/* Grup Input Password */}
          <div>
            <label 
              htmlFor="password" 
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
               // onChange={(e) => setPassword(e.target.value)}
                className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Masukkan password Anda"
              />
            </div>
          </div>

          {/* Tombol Login */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default Login