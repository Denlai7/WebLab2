import { useEffect, useState } from 'react';

function Footer() {
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    localStorage.setItem('userAgent', navigator.userAgent);
    localStorage.setItem('platform', navigator.platform);

    const saved = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      saved[key] = localStorage.getItem(key);
    }
    setInfo(saved);
  }, []);

  return (
    <footer>
      <small>&copy; 2026 My Website</small>
      <ul>
        {Object.entries(info).map(([key, value]) => (
          <li key={key}>{key}: {value}</li>
        ))}
      </ul>
    </footer>
  );
}


export default Footer;