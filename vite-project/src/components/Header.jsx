function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

function Header({ theme, onToggleTheme }) {
  return (
    <header>
      <h1>Khrystyna Sidelnyk</h1>
      <p>Aspiring Data &amp; AI Security Specialist | Microsoft Purview Intern | Compliance, DLP &amp; AI Governance</p>
      <address>
        <p>Location: Lviv, Ukraine</p>
        <p>Email: <a href="mailto:khrystyna.sidelnyk@gmail.com">khrystyna.sidelnyk@gmail.com</a></p>
        <p>LinkedIn: <a href="https://www.linkedin.com/in/khrystynasidelnyk-482425375" target="_blank" rel="noopener noreferrer">linkedin.com/in/khrystynasidelnyk-482425375</a></p>
        <li>
  <button
    type="button"
    className="nav-toggle"
    onClick={onToggleTheme}
    aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
  >
    {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
  </button>
</li>
      </address>

      <nav aria-label="Resume sections">
        <ul>
          <li><a href="#about">About me</a></li>
          <li><a href="#experience">Work experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#certifications">Certifications</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
