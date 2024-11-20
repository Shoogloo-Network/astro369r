"use client";
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import '../globals.css';

const menuCategories = [
  {
    title: "Daily Predictions",
    items: [
      {
        image: "/period-problems-v1.jpg",
        title: "Daily Horoscope",
        description: "Get your daily astrological guidance"
      },
      {
        image: "/period-problems-v1.jpg",
        title: "Daily Tarot",
        description: "Daily tarot card readings and insights"
      }
    ]
  },
  {
    title: "Life Guidance",
    items: [
      {
        image: "/period-problems-v1.jpg",
        title: "Career Astrology",
        description: "Professional path and opportunities"
      },
      {
        image: "/period-problems-v1.jpg",
        title: "Love & Relationships",
        description: "Relationship guidance and compatibility"
      }
    ]
  },
  {
    title: "Specialized Readings",
    items: [
      {
        image: "/period-problems-v1.jpg",
        title: "Vedic Astrology",
        description: "Traditional Indian astrological readings"
      },
      {
        image: "/period-problems-v1.jpg",
        title: "Numerology",
        description: "Numbers and their influence on your life"
      }
    ]
  }
];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginMenuOpen, setIsLoginMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);
  const [showmenu , setShowmenu] = useState(false);
  const [dropdownStates, setDropdownStates] = useState({
    advisors: false,
    predictions: false,
  });
  const menuTimeoutRef = useRef(null);
  const loginMenuRef = useRef(null);
  useEffect(() => {
    const updateView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    updateView(); // Initial check
    window.addEventListener('resize', updateView);

    return () => {
      window.removeEventListener('resize', updateView);
    };
  }, []);
  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginMenuRef.current && !loginMenuRef.current.contains(event.target)) {
        setIsLoginMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (menuTimeoutRef.current) clearTimeout(menuTimeoutRef.current);
    };
  }, []);

  
  const toggleMobileMenu = () => {
    if (isMobileView) {
      
          setIsMobileMenuOpen(!isMobileMenuOpen);
          setShowmenu(!showmenu);
       
    }
  };

  const toggleLoginMenu = (e) => {
    e.stopPropagation();
    setIsLoginMenuOpen(!isLoginMenuOpen);
  };

  const handleDropdownClick = (dropdownName, e) => {
    e.preventDefault();
    setDropdownStates(prev => ({
      ...prev,
      [dropdownName]: !prev[dropdownName]
    }));
  };

  return (
    <>
      <header className="container-fullWidth headerRes">
        <nav className="navbar container">
          <Link href="/" className="anchorLogo">
            <Image
              src="/astro369logo1.png"
              alt="Astro369 logo"
              width={100}
              height={44}
              className="logoImage"
              priority
            />
          </Link>

          <div className="logo-container">
            <ul>
              <li><Link href="/advisors">All Advisors</Link></li>
              <li><Link href="/consult">Video Consult</Link></li>
              <li 
                className="mega-hover"
                onMouseEnter={() => setShowMegaMenu(true)}
                onMouseLeave={() => setShowMegaMenu(false)}
              >
                <Link href="#">Predictions</Link>
                {showMegaMenu && (
                  <section 
                    className="menu-section container"
                    onMouseEnter={() => setShowMegaMenu(true)}
                    onMouseLeave={() => setShowMegaMenu(false)}
                  >
                    <div className="container" >
                      <div className="mega-menu">
                        <div className="row" >
                          {menuCategories.map((category, index) => (
                            <div className="col-md-3" key={index} >
                              <div className="mega-menu-column">
                                <h3>{category.title}</h3>
                                {category.items.map((item, itemIndex) => (
                                  <div className="submenu-header-div" key={itemIndex} >
                                    <Image
                                      src={item.image}
                                      alt={item.title}
                                      width={60}
                                      height={60}
                                      className="submenu-header-image"
                                    />
                                    <div className="submenu-header-right-div">
                                      <h4>{item.title}</h4>
                                      <p>{item.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </li>
              <li><Link href="/astro-shop">Mart</Link></li>
              <li><Link href="/pooja">Pooja</Link></li>
            </ul>
          </div>

          <div className="menu-container">
            <div className="menu-container-parent">
              <div className="security-container">
                <select name="Security" id="Security" className="txtsize">
                 
                  <option value="DataSecurity" defaultValue={true} >ENG</option>
                  <option value="Help">HINDI</option>
                </select>
              </div>
              
              <div className="user-profile-container" ref={loginMenuRef}>
                <div className="user-profile" onClick={toggleLoginMenu}>
                  <i className="fa-solid fa-user"></i>
                </div>
                {isLoginMenuOpen && (
                  <div className="login-hover">
                    <ul>
                      <li id="login">
                        <Link href="/loginSignup">Login/Signup</Link>
                      </li>
                      <hr />
                      <li><Link href="/profile">Profile</Link></li>
                      <hr />
                      <li><Link href="/my-order">My Orders</Link></li>
                      <hr />
                      <li><Link href="/loginSignup">Signout</Link></li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className="container-fullWidth headerResMobile">
        <div className="headerMobileCombine">
          <Link href="/" className="anchorLogo">
            <Image
              src="/astro369logo1.png"
              alt="Logo"
              width={100}
              height={44}
              className="logoImage"
              priority
            />
          </Link>
          <div className="hamburger-icon" onClick={toggleMobileMenu}>
            &#9776;
          </div>
        </div>
        
      {
        showmenu &&(  <nav className={`navbar navbarMobile container ${isMobileMenuOpen ? 'active' : ''}`}>
          <div className="logo-container">
            <ul>
              <li className={`dropdown ${dropdownStates.advisors ? 'active' : ''}`}>
                <a href="#" className="dropbtn" onClick={(e) => handleDropdownClick('advisors', e)}>
                  All Advisors 
                  <span className="icon dropdown-icon">
                    {dropdownStates.advisors ? '▲' : '▼'}
                  </span>
                </a>
                <ul className="dropdown-content">
                  <li><Link href="#">Name 1</Link></li>
                  <li><Link href="#">Name 2</Link></li>
                  <li><Link href="#">Name 3</Link></li>
                  <li><Link href="#">Name 4</Link></li>
                </ul>
              </li>
              
              <li><Link href="/consult">Video Consult</Link></li>
              
              <li className={`dropdown ${dropdownStates.predictions ? 'active' : ''}`}>
                <a href="#" className="dropbtn" onClick={(e) => handleDropdownClick('predictions', e)}>
                  Predictions 
                  <span className="icon dropdown-icon">
                    {dropdownStates.predictions ? '▲' : '▼'}
                  </span>
                </a>
                <ul className="dropdown-content">
                  <li><Link href="#">Daily Prediction</Link></li>
                  <li><Link href="#">Weekly Prediction</Link></li>
                  <li><Link href="#">Monthly Prediction</Link></li>
                  <li><Link href="#">Yearly Prediction</Link></li>
                </ul>
              </li>
              
              <li><Link href="/mart">Mart</Link></li>
              <li><Link href="/pooja">Pooja</Link></li>
            </ul>
          </div>
        </nav>)
      }
      </header>

      <hr className="hr-line"/>
    </>
  );
};

export default Header;
