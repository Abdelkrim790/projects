import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar31 from '../components/navbar31'
import Banner21 from '../components/banner21'
import CTA5 from '../components/cta5'
import FAQ8 from '../components/faq8'
import Footer3 from '../components/footer3'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container1">
      <Helmet>
        <title>Pristine Defensive Vulture</title>
        <meta property="og:title" content="Pristine Defensive Vulture" />
      </Helmet>
      <Navbar31
        link1={
          <Fragment>
            <span className="home-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text12">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text13">Shop</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text14">Contact Us</span>
          </Fragment>
        }
        logoSrc="/images-1500h.png"
        link1Url="/"
        link3Url="/services"
        rootClassName="navbar31root-class-name"
      ></Navbar31>
      <Banner21
        action1={
          <Fragment>
            <span className="home-text15">Start Exploring</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text16">
              Embark on a journey like never before and experience the thrill of
              a lifetime.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text17">Discover the Ultimate Adventure</span>
          </Fragment>
        }
        video1Poster="https://images.unsplash.com/photo-1513807762437-8c8dee6b3776?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEyM3x8Z2FtaW5nfGVufDB8fHx8MTczNjA4Mzg2Mnww&amp;ixlib=rb-4.0.3&amp;w=1400"
        rootClassName="banner21root-class-name"
      ></Banner21>
      <CTA5
        action1={
          <Fragment>
            <span className="home-text18">Sign Up</span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text19">
              Our journey began with a commitment t​o quality and performance.
              From a small startup, we&apos;ve evolved into a leading
              manufacturer focused on delivering cutting-edge technology and
              building strong customer relationships
            </span>
          </Fragment>
        }
        image1Src="/high-end-gaming-computer-1400w.jpg"
        cTA5Id="CTA5"
      ></CTA5>
      <FAQ8
        action={
          <Fragment>
            <span className="home-text20">Contact</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text21">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text22">FAQs</span>
          </Fragment>
        }
        faq3Question={
          <Fragment>
            <span className="home-text23">
              Do I need to have prior experience for the adventures?
            </span>
          </Fragment>
        }
        faq1Question4={
          <Fragment>
            <span className="home-text24">Frequently Asked Questions</span>
          </Fragment>
        }
        faq2Question1={
          <Fragment>
            <span className="home-text25">Frequently Asked Questions</span>
          </Fragment>
        }
      ></FAQ8>
      <Footer3
        link2={
          <Fragment>
            <span className="home-text26">FAQs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text27">SAV</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text28">Réparation Et Garantie</span>
          </Fragment>
        }
        logoSrc="/images-1500h.png"
        termsLink={
          <Fragment>
            <span className="home-text29">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text30">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text31">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name"
      ></Footer3>
      <div className="home-container2"></div>
    </div>
  )
}

export default Home
