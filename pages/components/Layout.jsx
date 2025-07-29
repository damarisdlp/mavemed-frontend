// components/Layout.jsx

export default function Layout({ children }) {
  return (
    <div className="min-h-screen w-full flex flex-col bg-white text-black overflow-x-hidden">
      {children}
    </div>
  );
}