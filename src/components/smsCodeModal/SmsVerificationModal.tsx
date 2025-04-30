import React, { useState } from 'react';

interface SmsVerificationModalProps {
  phone: string;
  onClose: () => void;
  onSuccess: (token: string) => void; 
}

const SmsVerificationModal: React.FC<SmsVerificationModalProps> = ({ phone, onClose, onSuccess }) => {
  const [smsCode, setSmsCode] = useState('');

  const handleSmsSubmit = () => {
   
    const token = 'some-fake-token'; 
    onSuccess(token); 
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
