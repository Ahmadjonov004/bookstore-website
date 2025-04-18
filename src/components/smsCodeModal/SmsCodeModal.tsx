import React, { useState } from 'react';

interface SmsVerificationModalProps {
  phone: string;
  onClose: () => void;
  onSuccess: () => void;
}

const SmsCodeModal: React.FC<SmsVerificationModalProps> = ({ phone, onClose, onSuccess }) => {
  const [code, setCode] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredCode = code.join('');
    if (enteredCode.length === 6) {
      console.log("Tasdiqlash kodi:", enteredCode);
      onSuccess();
    } else {
      alert("Iltimos, 6 xonali kodni to‘liq kiriting.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 className="text-center text-2xl font-bold text-gray-900 mb-1">
          {phone}
        </h2>
        <p className="text-center text-sm text-gray-600 mb-4">
          Telefon raqamiga yuborilgan <strong>SMS kodni</strong> kiriting
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex justify-center gap-2">
            {code.map((digit, index) => (
              <input
                key={index}
                id={`code-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="w-10 h-12 text-center text-lg border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ))}
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg font-medium transition hover:bg-gray-900 active:scale-95 mt-4"
          >
            Keyingi
          </button>
        </form>
      </div>
    </div>
  );
};

export default SmsCodeModal;
