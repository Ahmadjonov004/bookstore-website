import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "profileData";

export default function ProfileForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    middleName: "",
    address: "",
    phone: "",
  });

  // Ma'lumotlarni localStorage'dan olish
  useEffect(() => {
    const savedData = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedData) {
      setForm(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(form));
    console.log("LocalStorage saqlandi:", form);
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <p className="text-sm text-gray-500 mb-1">Bosh sahifa • Profile</p>
      <h1 className="text-3xl font-semibold mb-2">{form.firstName}</h1>
      <p className="text-gray-600 mb-6">Sozlamalar</p>

      <form
        onSubmit={handleSubmit}
        className="border border-blue-500 rounded-2xl p-6 sm:p-8 space-y-6"
      >
        <h2 className="text-lg font-semibold">Ma’lumotlarim</h2>

        <div className="grid sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm mb-1">Ism</label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Familiya</label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Otasining ismi</label>
            <input
              type="text"
              name="middleName"
              value={form.middleName}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 border-t pt-6">
          <div>
            <label className="block text-sm mb-1">Yashash manzil</label>
            <input
              type="text"
              name="address"
              value={form.address}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Telefon raqam</label>
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 active:scale-95 transition"
          >
            Saqlash
          </button>
        </div>
      </form>
    </section>
  );
}
