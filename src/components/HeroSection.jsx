export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row bg-purple-50 items-center justify-evenly p-6 h-full">
          <div className="w-full md:w-1/2 lg:w-1/4 text-center md:text-left p-6">
            <h1 className="text-gray-700 text-3xl md:text-4xl font-extrabold mb-4">
              Pet Store & Beyond
            </h1>
            <p className="text-gray-500 text-lg mb-6">
              This is a sample landing page, created with Figma and Anima. No
              coding involved.
            </p>
            <button className="bg-orange-400 text-gray-900 px-6 py-3 rounded-lg hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-orange-300 transition duration-300">
              Get Started
            </button>
          </div>

          <div className="w-full md:w-1/2 lg:w-1/4 rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/cat-01.jpg"
              alt="Hero Image"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
  )
}
