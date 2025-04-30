import { useState } from "react";

const languages = [
  { code: "uz", label: "O'zb", flag: "https://flagcdn.com/w40/uz.png" },
  { code: "ru", label: "Русс", flag: "https://flagcdn.com/w40/ru.png" },
  { code: "en", label: "Eng", flag: "https://flagcdn.com/w40/gb.png" },
];

function LanguageSelector() {
  const [selectedLang, setSelectedLang] = useState("uz");
  const [open, setOpen] = useState(false);

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-2 px-3 py-1  rounded-md hover:shadow-sm bg-[#EDEEF2] text-xs"
      >
        <img src={currentLang?.flag} alt={currentLang?.label} className="w-4 h-3" />
        <span>{currentLang?.label}</span>
      </button>

      {open && (
        <div className="absolute mt-2 w-15 bg-white border rounded-md shadow-md z-50 text-xs">
          {languages.map((lang) => (
            <div
              key={lang.code}
              onClick={() => {
                setSelectedLang(lang.code);
                setOpen(false);
              }}
              className="flex items-center gap-2 px-2 py-1 hover:bg-gray-100 cursor-pointer"
            >
              <img src={lang.flag} alt={lang.label} className="w-4 h-3" />
              <span>{lang.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LanguageSelector;
