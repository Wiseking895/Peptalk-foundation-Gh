export default function Donate() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="bg-white shadow-xl rounded-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Make a Donation</h1>
        <p className="text-gray-600 mb-8">
          Your support helps us empower lives through education, health,
          career guidance, and economic empowerment.
        </p>

        {/* Payment form will live here */}
        <p className="text-sm text-gray-400">
          Mobile Money payment integration coming next.
        </p>
      </div>
    </div>
  );
}
