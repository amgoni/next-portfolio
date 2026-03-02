export default function Footer() {
  return (
    <footer id="footer" className="bg-dark-text text-white dark:bg-black">
      <p className="py-4 text-center text-base">
        &copy; Amin Goni, {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}
