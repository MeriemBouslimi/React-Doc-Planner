import React from 'react';
import './Navmenu/navmenu.css';
import NavMenu from './Navmenu/Navmenu';
import './App.css';
import Service from './Service-elements/Service';
import Imagep from './images/screen-market.png';
import Imaged from './images/screen-saas.png';
import Brands from './Brands/Brands';
import Cards from './Cards/Cards';
import Slider from './Slider/Slider';


const menuItem = [{ link: "http://localhost:3002/", title: "About us" },
{ link: "https://www.docplanner.com/career", title: "Career" },
{ link: "#", title: "Departement", items: ["Marketing & PR", "Customer Success & Sales", "IT, Product, Design & UX", "Finance & Administration", "HR & more"] }]

const listofservices = [{ check: true, title1: 'For patients', title2: 'Find a doctor, book a visit and solve any health-related doubt', imag: <img src={Imagep} alt='imagep'></img>, country: ['Choose country', 'Argentina', 'Australia', 'Brazil', 'Chile', 'Colombia', 'Czech', 'France', 'Italy', 'Mexico', 'Peru', 'Poland', 'Portugal', 'Spain', 'Turkey', 'UK'] },
{ check: false, title1: 'For doctors', title2: 'Save time managing visits and cut no-shows by half', imag: <img src={Imaged} alt='imaged'></img> },]



function App() {
  return (
    <div>
      <NavMenu listofitems={menuItem} />

      <section className="lead">
        <img className="img-lead" src="https://www.docplanner.com/img/sygnet.png" alt="logo" />
        <h1 className="title-marketing">Making the healthcare experience more human</h1>
        <div className="lead-txt">
          <p className="lead-paragraph"> We want patients to find the perfect doctor and book an appointment in the
              most easy way. The patient
              journey should be enjoyable, and that's why we are always next to them: to help them find the best
                    possible care. Anytime, anywhere.</p>
          <p className="lead-paragraph">We also help doctors to better manage their practice and build their online
              reputation. With our
              integrated end-to-end solution, doctors are able not only to improve their online presence, but also
              to
                    devote their time to what really matters their patients </p>
        </div>
      </ section>
      <Service listofservices={listofservices} />
      <div className="brand-section-inner"> <h2 class="slogan-doctors">We are a global company
     with local culture</h2>
        <Brands />

      </div>
      <div className="stats">
        <div className="left-col">
          <h3 class="slogan-stats">The world's <br /> biggest healthcare platform</h3>
          <p>We work from 6 offices all over the world, bringing Docplanner <br /> Group to life in almost 20
                    countries.</p>
          <img className="logo-stats" src="https://www.docplanner.com/img/logo.png" alt="lgo" />
        </div>
        <Cards />
      </div>
      <section class="offices">
        <div class="head-offices">
          <h3 class="slogan-stats">Improve the lives of millions. Change yours forever</h3>
          <p class="leader">More than 1000 team mates share our same vision, goals and passion. With offices in
              Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never
                    stops.</p>
        </div>
      </section>
      <section >
        <Slider/>
      </section>
      <footer>
    <p>We are leaders in 10 countries: <a href="*">Poland</a>, <a href="*">Turkey</a>, <a href="*">Spain</a>, <a
            href="*">Italy</a>, <a href="*">Czech Republic</a>, <a href="*">Mexico</a>, <a href="*">Colombia</a>, <a
            href="*">Brazila</a>, <a href="*">Argentina</a>
        and <a href="*">Chile</a></p>
    <p class="footer-uses">This site uses cookies to deliver services in accordance with this Privacy Policy. You
        can specify the
        conditions for storing or accessing cookies on your browser.
    </p>
    <p>www.docplanner.com © 2019</p>
</footer>
    </div>);
}

export default App;
