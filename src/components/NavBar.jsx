export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-12 py-4">
      <div className="text-black font-bold">PETWORLD</div>
      <div className="hidden md:flex">
        <ul className="flex space-x-8">
          <li className="text-black hover:text-white">Home</li>
          <li className="text-black hover:text-white">Shop</li>
          <li className="text-black hover:text-white">About</li>
          <li className="text-black hover:text-white">Contact</li>
        </ul>
      </div>
      <div className="bg-white p-2">
        <button className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition">
          Login
        </button>
      </div>
    </div>
  );
}
