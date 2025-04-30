import React, { useState } from 'react';

interface SmsVerificationModalProps {
  phone: string;
  onClose: () => void;
  onSuccess: (token: string) => void; // Tokenni qabul qiladigan tip
}

const SmsVerificationModal: React.FC<SmsVerificationModalProps> = ({ phone, onClose, onSuccess }) => {
  const [smsCode, setSmsCode] = useState('');

  const handleSmsSubmit = () => {
    // Faraz qilamiz, SMS kodni to'g'ri kiritganimizda, tokenni olish mumkin
    const token = 'some-fake-token'; // Bu yerdan haqiqiy tokenni olish kerak bo'ladi
    onSuccess(token); // onSuccess funksiyasiga token yuboramiz
  };

  return (
    <div className="modal">
      <h2>SMS Kodni kiriting</h2>
      <p>Telefon raqamingiz: {phone}</p>
      <input
        type="text"
        value={smsCode}
        onChange={(e) => setSmsCode(e.target.value)}
        placeholder="SMS kodni kiriting"
      />
      <button onClick={handleSmsSubmit}>Tasdiqlash</button>
      <button onClick={onClose}>Yopish</button>
    </div>
  );
};

export default SmsVerificationModal;
