"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const Footer = () => {
  const [email, setEmail] = useState('');

  const footerLinks = {
    // company: {
    //   title: "Company",
    //   links: [
    //     { name: "About Us", href: "/about" },
    //     { name: "Meet the Team", href: "/team" },
    //     { name: "Careers", href: "/careers" },
    //     { name: "Press & Media", href: "/press" },
    //     { name: "Contact Us", href: "/contact" }
    //   ]
    // },
    services: {
      title: "Our Services",
      links: [
        { name: "Talk to Astrologer", href: "/talk" },
        { name: "Chat with Astrologer", href: "/chat" },
        { name: "Video Consultation", href: "/video" },
        { name: "Book Puja", href: "/puja" },
        { name: "Horoscope Reports", href: "/reports" }
      ]
    },
    support: {
      title: "Support",
      links: [
        { name: "Help Center", href: "/help" },
        { name: "Terms of Service", href: "/terms" },
        { name: "Privacy Policy", href: "/privacy" },
        { name: "FAQ", href: "/faq" },
        { name: "Blog", href: "/blog" }
      ]
    },
    connect: {
      title: "Connect with Us",
      links: [
        { name: "Facebook", href: "https://facebook.com", icon: "fab fa-facebook-f" },
        { name: "Twitter", href: "https://twitter.com", icon: "fab fa-twitter" },
        { name: "Instagram", href: "https://instagram.com", icon: "fab fa-instagram" },
        { name: "LinkedIn", href: "https://linkedin.com", icon: "fab fa-linkedin-in" },
        
      ]
    }
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription for:', email);
    // Add your newsletter subscription logic here
    setEmail('');
  };
const currentDate = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {Object.entries(footerLinks).map(([key, section]) => (
              <div key={key} className="footer-column">
                <h3 className="footer-title">{section.title}</h3>
                <ul className="footer-links" >
                  {section.links.map((link, index) => (
                    <li key={index} >
                      {key === 'connect' ? (
                        <Link href={link.href} aria-hidden="true">
                          {/* <i  style={{paddingRight: "15px"}} />   className={link.icon} */}
                          <span>{link.name}</span>
                        </Link>
                      ) : (
                        <Link href={link.href} aria-hidden="true">
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="footer-column center">
              <h3 className="footer-title">Newsletter</h3>
              <p className="newsletter-text">
                Subscribe to our newsletter for daily horoscopes and updates
              </p>
              <form onSubmit={handleNewsletterSubmit} className="newsletter-form" style={{display: "flex",flexDirection: "column",alignItems: "center",marginTop: "0px"}}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{width: "100%", padding: "10px", marginBottom: "0px", borderRadius: "5px", border: "1px solid #ccc"}}
                />
                <button type="submit" style={{width: "100%", padding: "10px", borderRadius: "5px", border: "none", backgroundColor: "#007bff", color: "#fff", cursor: "pointer"}}>Subscribe</button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentDate} Astro369. All rights reserved.
            </p>
            <div className="footer-bottom-links">
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
              <Link href="/cookies">Cookies</Link>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
