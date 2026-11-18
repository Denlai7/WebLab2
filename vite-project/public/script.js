function saveSystemInfo() {
  const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language,
    vendor: navigator.vendor,
    cookiesEnabled: navigator.cookieEnabled,
    cpuCores: navigator.hardwareConcurrency,
    online: navigator.onLine,
    screen: `${screen.width}x${screen.height}`,
  };
  for (const [key, value] of Object.entries(info)) {
    localStorage.setItem(key, String(value));
  }
}

function renderStorage(list) {
  list.textContent = '';
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const row = document.createElement('p');
    row.textContent = `${key}: ${localStorage.getItem(key)}`;
    list.append(row);
  }
}



async function loadComments(section) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/21/comments`);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const comments = await response.json();
    comments.forEach((c) => {
      const article = document.createElement('article');
      const title = document.createElement('h3');
      title.textContent = c.name;
      const text = document.createElement('p');
      text.textContent = c.body;
      const author = document.createElement('small');
      author.textContent = c.email;
      article.append(title, text, author);
      section.append(article);
    });
  } catch (error) {
    const message = document.createElement('p');
    message.textContent = `Could not load comments: ${error.message}`;
    section.append(message);
  }
}


function openModal() {
  if (sessionStorage.getItem('feedbackClosed')) return;
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `
    <div class="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
      <h2 id="contact-title">Feedback</h2>
      <form action="https://formspree.io/f/xzeeyvlo" method="POST">
        <label for="f-name">Name</label>
        <input type="text" id="f-name" name="name" required>
        <label for="f-email">Email</label>
        <input type="email" id="f-email" name="email" required>
        <label for="f-phone">Phone number</label>
        <input type="tel" id="f-phone" name="phone">
        <label for="f-message">Message</label>
        <textarea id="f-message" name="message" rows="4" required></textarea>
        <div class="modal-actions">
          <button type="submit">Send</button>
          <button type="button" id="modal-close">Close</button>
        </div>
      </form>
    </div>`;
  document.body.append(overlay);
  overlay.querySelector('#modal-close').addEventListener('click', () => {
    sessionStorage.setItem('feedbackClosed', '1');
    overlay.remove();
  });
}

// =====================================

function themeByTime() {
  const hours = new Date().getHours();
  return hours >= 7 && hours < 21 ? 'light' : 'dark';
}

function applyTheme(theme) {
  document.body.classList.toggle('dark-mode', theme === 'dark');
}

function createToggle() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';
  button.textContent = 'Toggle theme';
  button.addEventListener('click', () => {
    applyTheme(document.body.classList.contains('dark-mode') ? 'light' : 'dark');
  });
  document.body.append(button);
}



function init() {
  saveSystemInfo();

  const reviews = document.createElement('section');
  reviews.className = 'extra';
  reviews.innerHTML = '<h2>Reviews</h2>';

  const footer = document.createElement('footer');
  footer.className = 'extra';
  footer.innerHTML = '<h3>Stored in this browser</h3><div id="storage-list"></div>';

  document.body.append(reviews, footer);
  loadComments(reviews);
  renderStorage(footer.querySelector('#storage-list'));

  applyTheme(themeByTime());
  createToggle();
  setTimeout(openModal, 60000);
}

init();
