"use client";
import React from 'react';
import "../../globals.css";
import "../../styles.css";
const Articles = () => {
  const articles = [
    {
      image: "coronavirus.jpg",
      category: "CORONAVIRUS",
      title: "12 Coronavirus Myths and Facts That You Should Be Aware Of",
      author: "Dr. Diana Borgio"
    },
    {
      image: "vitamins.jpg",
      category: "VITAMINS AND SUPPLEMENTS",
      title: "Eating Right to Build Immunity Against Cold and Viral Infections",
      author: "Dr. Diana Borgio"
    }
  ];

  return (
    <section className="articles-section container">
      <div className="intro-container">
        <h1 className="intro-title size2xl">
          Read top articles from health experts
        </h1>
        <p className="intro-description txtsize">
          Health articles that keep you informed about good health practices and
          achieve your goals.
        </p>
        <button className="intro-button txtsize">See all articles</button>
      </div>
      <div className="articles-container">
        {articles.map((article, index) => (
          <div key={index} className="article-card">
            <img
              src={article.image}
              alt={article.category.toLowerCase()}
              className="article-image"
            />
            <h3 className="article-category txtsizesm">{article.category}</h3>
            <h1 className="article-title size2">{article.title}</h1>
            <p className="article-author txtsize">{article.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles; 