export default function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 px-8 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <span className="text-xl font-bold text-gray-900">NextBites 🍳</span>
        <span className="text-sm text-gray-500">Fresh recipes daily</span>
      </div>
    </nav>
  );
}