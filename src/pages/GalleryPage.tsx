import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import "../assets/styles/global.css";
import { Images } from "../data/imageData";
import { type Category, CategoryList, type SortBy } from "../types/types";
import { formatAssetPath } from "../utils/asset";

const isSortBy = (value: string | null): value is SortBy =>
  value !== null && ["Relevance", "Location", "Date"].includes(value);

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortBy>("Relevance");
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [imagesShow, setImagesShow] = useState<number>(10);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const toggleFlip = (url: string) => {
    setFlippedIds((prev) =>
      prev.includes(url) ? prev.filter((u) => u !== url) : [...prev, url]
    );
  };

  const handleSort = (option: string | null) => {
    setSortBy(isSortBy(option) ? option : "Relevance");
  };

  const handleSearch = (text: string) => {
    setSearch(text);
  };

  // Filtering
  const filtered = Images.filter((img) => {
    const matchesCategory =
      activeCategory == "All" || img.category?.includes(activeCategory);

    const matchesSearch =
      img.location.toLowerCase().includes(search.toLowerCase()) ||
      img.caption.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Sorting
  const sorted = [...filtered];
  if (sortBy === "Location") {
    sorted.sort((a, b) => a.location.localeCompare(b.location));
  } else if (sortBy === "Date") {
    sorted.sort((a, b) => a.date.getTime() - b.date.getTime());
  }

  // Slicing
  const visibleImages = sorted.slice(0, imagesShow);
  return (
    <div>
      {/* Banner */}
      <div className="relative lg:h-145 md:h-125 w-full mb-5">
        <img
          src={formatAssetPath("/marcos-paulo-prado-QYVCzK-bnYU-unsplash.jpg")}
          className="object-cover w-full h-full"
          alt="Banner background"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bitgrid">Hello, My Name is Jenny</h1>
        </div>
      </div>

      {/* Search */}
      <div className="flex justify-center items-end w-full h-auto">
        <input
          type="text"
          placeholder="Search..."
          className="lg:w-xl w-md s:w-sm border-b "
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>

      {/* Category (stub) + Sort  */}
      <div className="flex justify-items-start w-full p-6 sm:p-5">
        <div className="flex flex-1 space-x-4 sm:space-x-3 w-full">
          {CategoryList.map((label) => (
            <button
              key={label}
              onClick={() => setActiveCategory(label as Category)}
              className={`text-white text-lg lg:text-[1.2rem] relative pb-1 transition-all duration-300 ease-in-out cursor-pointer
        ${
          activeCategory === label
            ? 'after:content-[""] after:absolute after:left-0 after:bottom-0 after:w-full after:h-0.5 after:bg-blue-500'
            : "hover:opacity-70"
        }
      `}
            >
              {label}
            </button>
          ))}
        </div>
        <div>
          <Menu>
            <MenuButton className=" text-blue-400 text-lg lg:text-xl ">
              Sort By: {sortBy || "Relevance"}
            </MenuButton>
            <MenuItems
              anchor="bottom"
              className="backdrop-blur text-white p-2 shadow w-auto "
            >
              {["Relevance", "Location", "Date"].map((option) => (
                <MenuItem key={option}>
                  <button
                    className="block w-full text-left hover:bg-gray-500 px-2 py-1 rounded"
                    onClick={() => handleSort(option)}
                  >
                    {option}
                  </button>
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>

      {/* Image Gallery */}
      <div
        className={
          sortBy != "Location" && sortBy != "Date"
            ? "columns-2 sm:columns-3 md:columns-4 gap-4 mb-10 px-4"
            : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        }
      >
        {visibleImages.map(({ url, caption, date, location }) => (
          <div
            key={url}
            className="mb-4 break-inside-avoid perspective cursor-pointer hover:scale-105 transition-transform duration-500"
            onClick={() => toggleFlip(url)}
          >
            <div
              className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedIds.includes(url) ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="relative w-full backface-hidden">
                <img
                  src={formatAssetPath(url)}
                  alt={caption}
                  className="w-full h-auto object-cover rounded"
                />
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 overflow-hidden rounded">
                <img
                  src={url}
                  className="absolute inset-0 w-full h-full object-cover blur-sm z-0"
                  alt="background blur"
                />
                <div className="absolute inset-0 bg-black/50 z-10 rounded" />
                <div className="relative z-20 text-white text-center px-4 py-6 flex flex-col justify-center h-full space-y-2">
                  <p className="lg:text-lg  md:text-lg text-md font-semibold">{caption}</p>
                  <p className="text-sm lg:text-md">{location}</p>
                  <p className="text-sm lg:text-md">
                    {date.toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less */}
      <div className="flex justify-center mt-6 space-x-4">
        {imagesShow < sorted.length && (
          <button
            onClick={() => setImagesShow((prev) => prev + 10)}
            className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Show More
          </button>
        )}
        {imagesShow >= sorted.length &&
          sorted.length > 10 &&
          imagesShow > 10 && (
            <button
              onClick={() => setImagesShow(10)}
              className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Show Less
            </button>
          )}
      </div>
    </div>
  );
}
