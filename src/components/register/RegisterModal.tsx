import React, { useEffect, useState } from 'react';
const LOCAL_STORAGE_KEY = "registerModal";
interface RegisterModalProps {
  onClose: () => void;
  onSuccess: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({ onClose, onSuccess }) => {
  const [fullName, setFullName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('+998');
  const [accepted, setAccepted] = useState(false);

  const [form, setForm] = useState({
    fullName: "",
    address: "",
    phone:"",
  });

  useEffect(() => {
      const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedData) {
        setForm(JSON.parse(savedData));
      }
    }, []);

  const handleSubmit = (e: React.FormEvent) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
    e.preventDefault();
    
    if (accepted) {
      console.log({ fullName, address, phone });
      onSuccess(); 
    } else {
      alert("Iltimos, ommaviy ofertaga rozilik bering.");
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
          Ro‘yxatdan o‘tish
        </h2>
        <p className="text-center text-sm text-gray-500 mb-6">
          Iltimos quyidagi ma’lumotlarni kiriting
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              F.I.SH
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="F.I.SH kiriting"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Yashash manzil
            </label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Yashash manzilingizni kiriting"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Telefon raqam
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+998"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              id="terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
              Ommaviy <a href="#" className="text-blue-600 hover:underline">oferta</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-black text-white rounded-lg font-medium transition hover:bg-gray-900 active:scale-95"
          >
            Keyingi
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;