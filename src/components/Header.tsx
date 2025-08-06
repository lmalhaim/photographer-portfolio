

export default function Header() {
    return (      <header
        className={` top-0 w-full z-50  backdrop-blur-xs ${
          activeTab === "Gallery" ? "absolute" : "relative"
        }`}
      >
        <div className="max-w-7xl ml-3  mr-3 mx-auto px-2 py-5 flex justify-between items-center">
          {/* Logo or site name */}
          <div className="text-white text-2xl tracking-wider font-kanit">
            Jenny's Shutter
          </div>

          {/* Tabs */}
          <nav className="flex space-x-8">
            {TabList.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-white relative pb-1 transition-all duration-300 ease-in-out
                ${
                  activeTab === tab
                    ? "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-blue-500"
                    : "hover:text-blue-400"
                }
              `}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </header>); 
}