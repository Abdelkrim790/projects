import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar311 from '../components/navbar311'
import FAQ5 from '../components/faq5'
import Footer3 from '../components/footer3'
import './services.css'

const Services = (props) => {
  return (
    <div className="services-container">
      <Helmet>
        <title>Services - Pristine Defensive Vulture</title>
        <meta
          property="og:title"
          content="Services - Pristine Defensive Vulture"
        />
      </Helmet>
      <Navbar311
        link1={
          <Fragment>
            <span className="services-text10">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="services-text11">About Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="services-text12">Services</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="services-text13">Shop</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="services-text14">Contact Us</span>
          </Fragment>
        }
        rootClassName="navbar311root-class-name2"
      ></Navbar311>
      <FAQ5
        content1={
          <Fragment>
            <span className="services-text15">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="services-text18">
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="services-text21">Services</span>
          </Fragment>
        }
        heading2={
          <Fragment>
            <span className="services-text22">Still have a question?</span>
          </Fragment>
        }
        faq1Answer={
          <Fragment>
            <span className="services-text23">
              Browse the site via secure connection for a reliable online
              shopping experience. We are committed to maintaining a secure
              connection on our website to ensure the trust of our customers.
            </span>
          </Fragment>
        }
        faq2Answer={
          <Fragment>
            <span className="services-text24">
              Delivery times are given for information purposes only; they
              depend in particular on the availability of the products and the
              delivery address. Delivery times vary from 1 to 3 days maximum
              after validation of your order.
            </span>
          </Fragment>
        }
        faq4Answer={
          <Fragment>
            <span className="services-text25">
              <span>
                For any questions regarding the tracking of your order, do not
                hesitate to contact our customer service. You can reach us at
                the following coordinates:
              </span>
              <br></br>
              <span>Telephone:  99 999 999 </span>
              <br></br>
              <span>Email address: livraison@Onlygaming.tn</span>
              <br></br>
              <span>WhatsApp:99 999 999</span>
            </span>
          </Fragment>
        }
        faq5Answer={
          <Fragment>
            <span className="services-text33">
              <span>
                We offer a variety of payment methods for a hassle-free shopping
                experience. Choose from our favorite options, such as:
              </span>
              <br></br>
              <span>- Cash</span>
              <br></br>
              <span>- Credit Card</span>
              <br></br>
              <span>- Checks</span>
              <br></br>
              <span>- POS</span>
              <br></br>
              <span>- Bank Transfers</span>
            </span>
          </Fragment>
        }
        faq7Answer={
          <Fragment>
            <span className="services-text45">
              <span>
                Les frais de Livraison sont calculés en fonction du poids et du
                volume de la commande :
              </span>
              <br></br>
              <span>
                - Livraison gratuite pour un seul colis dont le montant est
                supérieur ou égal à 300 dinars et le poids est inférieur ou égal
                à 30Kg.
              </span>
              <br></br>
              <span>
                - Livraison coûte 7,5 dinars : si votre achat est inférieur à
                300 dinars.
              </span>
              <br></br>
              <span>
                - Livraison coûte 30 dinars : si le colis dépasse 30 Kg (par
                rapport volume et poids).
              </span>
            </span>
          </Fragment>
        }
        faq8Answer={
          <Fragment>
            <span className="services-text53">
              Enjoy a worry-free online shopping experience with our secure
              payment solution, which guarantees the safety of all your
              electronic transactions. We use state-of-the-art encryption
              protocols to ensure that your payment data is secure at every step
              of the process.
            </span>
          </Fragment>
        }
        faq1Question={
          <Fragment>
            <span className="services-text54">
              <span>Secure connection</span>
              <br></br>
            </span>
          </Fragment>
        }
        faq2Question={
          <Fragment>
            <span className="services-text57">Delivery Times</span>
          </Fragment>
        }
        faq4Question={
          <Fragment>
            <span className="services-text58">Customer Support</span>
          </Fragment>
        }
        faq5Question={
          <Fragment>
            <span className="services-text59">
              <span>Modes de Paiement</span>
              <span></span>
            </span>
          </Fragment>
        }
        faq7Question={
          <Fragment>
            <span className="services-text62">Shipping Costs</span>
          </Fragment>
        }
        faq8Question={
          <Fragment>
            <span className="services-text63">Secure Payment</span>
          </Fragment>
        }
        rootClassName="faq5root-class-name"
      ></FAQ5>
      <Footer3
        link2={
          <Fragment>
            <span className="services-text64">FAQs</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="services-text65">Réparation Et Garantie</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="services-text66">
              Ouvert tous les jours de 8h00 à 19h00
            </span>
          </Fragment>
        }
        logoSrc="/images-1500h.png"
        termsLink={
          <Fragment>
            <span className="services-text67">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="services-text68">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="services-text69">Privacy Policy</span>
          </Fragment>
        }
        rootClassName="footer3root-class-name2"
      ></Footer3>
    </div>
  )
}

export default Services
