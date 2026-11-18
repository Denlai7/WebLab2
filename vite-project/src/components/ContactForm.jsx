import { useEffect, useState } from 'react';

function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('feedbackClosed')) return;
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function close() {
    sessionStorage.setItem('feedbackClosed', '1');
    setIsOpen(false);
  }

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal" role="dialog" aria-modal="true" aria-labelledby="contact-title">
            <h2 id="contact-title">Feedback</h2>
            <form action="https://formspree.io/f/xzeeyvlo" method="POST">
              <label htmlFor="f-name">Name</label>
              <input type="text" id="f-name" name="name" required />
              <label htmlFor="f-email">Email</label>
              <input type="email" id="f-email" name="email" required />
              <label htmlFor="f-phone">Phone number</label>
              <input type="tel" id="f-phone" name="phone" />
              <label htmlFor="f-message">Message</label>
              <textarea id="f-message" name="message" rows="4" required />
              <div className="modal-actions">
                <button type="submit">Send</button>
                <button type="button" onClick={close}>Close</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;