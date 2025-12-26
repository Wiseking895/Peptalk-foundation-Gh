import { useState } from "react";

export default function DonationSection() {
  const [amount, setAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [network, setNetwork] = useState("MTN");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: backend integration will replace this
    console.log({
      amount,
      phone,
      network,
    });

    alert("Donation flow will start here (MoMo Ghana)");
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Support Our Mission
        </h2>
        <p className="text-gray-600 mb-10 max-w-3xl mx-auto">
          Your donation helps us educate, inspire, and empower individuals
          through health, wealth creation, career guidance, and education.
        </p>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6"
        >
          {/* Amount */}
          <div className="text-left">
            <label className="block mb-2 font-semibold">Donation Amount (GHS)</label>
            <input
              type="number"
              required
              placeholder="e.g. 50"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Phone */}
          <div className="text-left">
            <label className="block mb-2 font-semibold">Mobile Money Number</label>
            <input
              type="tel"
              required
              placeholder="024XXXXXXX"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          {/* Network */}
          <div className="text-left">
            <label className="block mb-2 font-semibold">Network</label>
            <select
              value={network}
              onChange={(e) => setNetwork(e.target.value)}
              className="w-full border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="MTN">MTN</option>
              <option value="VODAFONE">Vodafone</option>
              <option value="AIRTELTIGO">AirtelTigo</option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-bold py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Donate Now
          </button>
        </form>
      </div>
    </section>
  );
}
