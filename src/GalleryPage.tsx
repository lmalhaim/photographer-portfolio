import { useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {  Images } from "./data/imageData";
import { CategoryList, type Category } from "./types/types";
import "./global.css";

export default function Gallery() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<string | null>(null);
  const [flippedIds, setFlippedIds] = useState<number[]>([]);
  const [imagesShow, setImagesShow] = useState<number>(10);
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const toggleFlip = (id: number) => {
    setFlippedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const handleSort = (option: string | null) => {
    setSortBy(option);
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
    sorted.sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  // Slicing
  const visibleImages = sorted.slice(0, imagesShow);
  return (
    <div>
      {/* Banner */}
      <div className="relative h-100 w-full mb-5">
        <img
          src="/marcos-paulo-prado-QYVCzK-bnYU-unsplash.jpg"
          className="object-cover w-full h-full"
          alt="Banner background"
        />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 flex items-center justify-center text-white text-center p-4">
          <h1 className="text-4xl font-bitgrid">Hello, My Name is Jenny</h1>
        </div>
      </div>

      {/* Search + Sort */}
      <div className="flex items-center justify-center space-x-4 w-full mb-8">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 border border-neutral-300 rounded p-2"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <Menu>
          <MenuButton className="border border-neutral-300 rounded p-2">
            Sort By: {sortBy || "Relevance"}
          </MenuButton>
          <MenuItems
            anchor="bottom"
            className="bg-white text-black p-2 rounded shadow"
          >
            {["Relevance", "Location", "Date"].map((option) => (
              <MenuItem key={option}>
                <button
                  className="block w-full text-left hover:bg-gray-100 px-2 py-1 rounded"
                  onClick={() =>
                    handleSort(option === "Relevance" ? null : option)
                  }
                >
                  {option}
                </button>
              </MenuItem>
            ))}
          </MenuItems>
        </Menu>
      </div>

      {/* Category (stub) */}
      <div className="flex items-center justify-center space-x-6 w-full mb-10">
        {CategoryList.map((label) => (
          <button
            key={label}
            onClick={() => setActiveCategory(label as Category)}
            className={`text-white relative pb-1 transition-all duration-300 ease-in-out cursor-pointer
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

      {/* Image Gallery */}
      <div className="columns-2 sm:columns-3 md:columns-4 gap-4 mb-10 px-4">
        {visibleImages.map(({ url, caption, date, location }, id) => (
          <div
            key={id}
            className="mb-4 break-inside-avoid perspective cursor-pointer"
            onClick={() => toggleFlip(id)}
          >
            <div
              className={`relative w-full transition-transform duration-700 transform-style-preserve-3d ${
                flippedIds.includes(id) ? "rotate-y-180" : ""
              }`}
            >
              {/* Front */}
              <div className="relative w-full backface-hidden">
                <img
                  src={url}
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
                  <p className="text-lg font-semibold">{caption}</p>
                  <p className="text-sm">{location}</p>
                  <p className="text-sm">
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
