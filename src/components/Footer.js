import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p> {currentYear} © Evaldas Pranckevicius</p>
    </footer>
  );
}
export default Footer;
