export default function Footer() {
  return (
    <footer>
      <p>
        &copy; Made with<span role="image">☕</span> {new Date().getFullYear()}.
        <a href="https://pawan-port.vercel.app/" className="footer-name">
          &nbsp;<span>Pawan Kumar</span>
        </a>
      </p>
    </footer>
  );
}
