import { useState, useRef, useEffect } from "react";

interface FilterItemsProps {
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  products: {
    label: string;
  }[];
}

function FilterItems({
  selectedCategory,
  setSelectedCategory,
  products,
}: FilterItemsProps) {
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const uniqueCategories = Array.from(
    new Set(products.map((product) => product.label))
  );
  const categories = ["Barchasi", ...uniqueCategories];

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setShowMobileFilters(false);
  };

  // tashqariga bosilganda menyuni yopish
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowMobileFilters(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container max-w-[1200px] px-[10px] mx-auto my-0 relative z-10">
      <div className="py-[6px] md:py-[8px] flex justify-between items-center border-y relative">
        {/* Desktop filters */}
        <div className="hidden md:flex justify-center items-center gap-[15px] md:gap-[50px] text-[11px] md:text-[14px] pl-[10px] md:pl-[20px]">
          {categories.map((category) => (
            <p
              key={category}
              className={`cursor-pointer transition duration-300 hover:text-black ${
                selectedCategory === category
                  ? "text-black font-semibold underline underline-offset-4"
                  : "text-[#BBBBBB]"
              }`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </p>
          ))}
        </div>

        {/* Mobile: Filter button */}
        <div className="md:hidden flex items-center justify-end w-full relative">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="cursor-pointer p-[5px] border rounded-[5px] text-[12px] transition duration-300 hover:shadow-[0_5px_5px_rgba(0,0,0,0.15)] mr-[15px]"
          >
            Filtr
          </button>

          {showMobileFilters && (
            <div
              ref={dropdownRef}
              className="absolute top-[40px] right-0 bg-white shadow-lg rounded-lg py-2 w-[160px] border z-50 animate-fade-in"
            >
              {categories.map((category) => (
                <p
                  key={category}
                  className={`px-4 py-2 text-sm cursor-pointer transition hover:bg-gray-100 ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "text-gray-700"
                  }`}
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FilterItems;
