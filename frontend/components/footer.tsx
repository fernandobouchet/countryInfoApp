export default function Footer() {
  return (
    <footer className="mx-auto p-2 bg-background border-t border-gray-500 mt-40">
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">© 2024</span>
        <a
          href="https://github.com/fernandobouchet/countryInfoApp"
          target="_blank"
          className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
        >
          Github
        </a>
      </div>
    </footer>
  );
}
