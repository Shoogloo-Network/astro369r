"use client";
import React, { useState } from "react";
import styles from "../../pooja.module.css";
import "../../globals.css";
import Link from 'next/link';
const ContainerPooja = ({ pickIndex }) => {
  const sidebarData = [
    {
      title: "Grah Shanti",
      url: "/pooja",
      submenu: [
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
      ],
    },
    {
      title: "Job & Business",
      url: "/pooja",
      submenu: [
        {
          title: "Creative Ideation",
          url: "pooja/job-and-bussiness/creative",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
      ],
    },
    {
      title: "Marriage & Divorce",
      url: "/pooja",
      submenu: [
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
      ],
    },
    {
      title: "Progeny",
      url: "/pooja",
      submenu: [
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
        {
          title: "Creative Ideation",
          url: "/pooja",
        },
      ],
    },
  ];
  const CardsPooja = [
    {
      imageUrl: "hanumanjiboondi.jpg",
      title: "Hanuman Sindoor/ Boondi Arpan",
      description:
        "Increase Happiness & Act As a Protector Against Troubles Increase Happiness & Act As a Protector Against",
      date: "01 Oct 2024",
    },
    {
      imageUrl: "hanumanjisakti.jpg",
      title: "Hanuman Chalisa and Aarti",
      description:
        "Get Rid of Health Issues & Attract a Healthy Body, Mind & Life Increase Happiness & Act As a Protector Against",
      date: "01 Oct 2024",
    },
    {
      imageUrl: "bindispell.jpg",
      title: "Love Binding Spell",
      description:
        "Creates A Strong Connection Between Two People In Love Increase Happiness & Act As a Protector Against",
      date: "01 Oct 2024",
    },
  ];

  const CardsPoojaWithoutBtn = [
    {
      imageUrl: "hanumanjiboondi.jpg",
      title: "Hanuman Sindoor/ Boondi Arpan",
      description:
        "Increase Happiness & Act As a Protector Against Troubles Increase Happiness & Act As a Protector Against",
      authorName: "John Doe",
    },
    {
      imageUrl: "hanumanjisakti.jpg",
      title: "Hanuman Chalisa and Aarti",
      description:
        "Get Rid of Health Issues & Attract a Healthy Body, Mind & Life Increase Happiness & Act As a Protector Against",
      authorName: "John Doe",
    },
    {
      imageUrl: "bindispell.jpg",
      title: "Love Binding Spell",
      description:
        "Creates A Strong Connection Between Two People In Love Increase Happiness & Act As a Protector Against",
      authorName: "John Doe",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const styleVisible = { display: "block" };
  const styleNotVisible = { display: "none" };
  const activeStyle = {
    color: "#fff !important",
    backgroundColor: "#0073e6",
    padding: "8px 15px",
    borderRadius: "5px",
    marginLeft: "-14px",
  };

  return (
    <div className={styles.containerPooja}>
      {/* Sidebar */}
      <aside className={styles.sidebarPooja}>
        <h3 className={styles.size1}>All Classes</h3>
        <ul className={styles.size2}>
          {sidebarData.map((item, index) => (
            <div key={index}>
              <li
                onClick={() => {
                  handleItemClick(index);
                  pickIndex(index);
                }}
                className={
                  activeIndex === index ? "activeHover" : "activeAnchor"
                }
                style={activeIndex === index ? activeStyle : undefined}
              >
                <Link href="#">{item.title}</Link>
              </li>
              <ul
                className={styles.submenuPooja}
                style={activeIndex === index ? styleVisible : styleNotVisible}
              >
                {item.submenu.map((submenuItem, subIndex) => (
                  <li key={subIndex}>
                    <Link href="pooja/job-and-bussiness/creative">{submenuItem.title}</Link>
                    
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </aside>
      {/* Main Content */}
      <main className={styles.mainContentPooja}>
        {/* Banner */}
        {/* Featured Classes */}
        <section className={styles.featuredPooja}>
          <div className={styles.sectionHeaderPooja}>
            <h2 className={styles.size1}>Book Online Puja &amp; Anushthan</h2>
          </div>
          <div className={styles.cardsPooja}>
            {CardsPooja.map((item, index) => {
              return (
                <div className={styles.cardPooja} key={index}>
                  <img src={item.imageUrl} alt={item.title} />
                  <h3 className={styles.size2}>{item.title}</h3>
                  <p className={styles.txtsize}>{item.description}</p>
                  <div className={styles.cardPoojaBookNow}>
                    <span>{item.date}</span>
                    <button className={styles.viewAllPooja}>Book Now</button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        {/* Popular Classes */}
        <section className={styles.popularPooja}>
          <div className={styles.sectionHeaderPooja}>
            <h2 className={styles.size1}>
              Popular Creativity &amp; Inspiration Classes
            </h2>
            <button className={styles.viewAllPooja}>View All</button>
          </div>
          <div className={styles.cardsPooja}>
            {CardsPoojaWithoutBtn.map((item, index) => {
              return (
                <div className={styles.cardPooja} key={index}>
                  <img src={item.imageUrl} alt={item.title} />
                  <h3 className={styles.size2}>{item.title}</h3>
                  <p className={styles.txtsize}>{item.description}</p>
                  <div className={styles.cardPoojaBookNow}>
                    <span>{item.authorName}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ContainerPooja;
