import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookLib</h2>
            <p className='fs-17'>BookLib is a great place to find used books and textbooks, rare books, out of print books, and more. If you're looking for books from independent publishers, this is one of the best resources online. There are over 270 million books and tens of millions of other items like movies and music.

            <p className='fs-17'>The site's advanced book search tool lets you locate books by title, author, subject, keyword, ISBN, price range, publication year, free shipping eligibility, language, binding type, attribute (e.g., signed or first edition), and more. There's also a handy multiple ISBN search box that lets you find bundle discounts.</p>
</p>
          </div>
        </div>
      </div>
    </section>
)
}

export default About
