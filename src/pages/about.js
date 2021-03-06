import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/tla-logo-tealwhite.png"
import BgSection from "../components/bgSection"

import photoStudio from "../images/whoweare-01.jpg"
import photoPrinter from "../images/whoweare-02.png"
import icons from "../images/icons.png"
import markSignature from "../images/Mark-signature.png"
import whychoose01 from "../images/whychooseus-01.jpg"
import whychoose02 from "../images/whychooseus-02.png"
import bmo from "../images/logos/BMO-logo.png"
import canadagoose from "../images/logos/canadagoose-logo.png"
import coke from "../images/logos/coke-logo.png"
import hd from "../images/logos/homedepot-logo.png"
import lg from "../images/logos/LG-logo.png"
import molson from "../images/logos/molson-logo.png"
import nike from "../images/logos/nike-logo.png"
import noble from "../images/logos/noble-logo.png"
import philips from "../images/logos/philips-logo.png"
import raps from "../images/logos/raptors-logo.png"
import scotia from "../images/logos/scotiabankarena-logo.png"
import shoppers from "../images/logos/shoppers-logo.png"
import smokes from "../images/logos/smokes-logo.png"
import tml from "../images/logos/tml-logo.png"
import tfc from "../images/logos/torontoFC-logo.png"

import styles from "../components/about.module.css"

const IndexPage = () => (
  <Layout>
    <SEO title="About Us" />

    <BgSection
      className={`${styles.tlaSection} ${styles.opener}`}
      bgImage="tlaOpenerImage"
    >
      <img src={logo} className={styles.tlaLogo} alt="TLA Graphics Logo" />
      <p className={styles.white_text}>
        Transforming Ideas into Stunning Visuals
      </p>
    </BgSection>

    <div className={`${styles.tlaSection} ${styles.whoweare}`}>
      <div className={styles.whowearePhotoContainer}>
        <img src={photoStudio} alt="design studio" />
        <img src={photoPrinter} alt="printer" />
      </div>
      <div className={styles.whoweareTextContainer}>
        <h1>Who we are</h1>
        <hr />
        <p>
          TLA Graphics is a tight-knit team of strategic visual communicators
          who work hard to clarify your desired outcome, understand your unique
          challenges, and translate the resulting ideas into stunning visuals
          that communicate your brand.
        </p>
      </div>
    </div>

    <div className={`${styles.tlaSection} ${styles.keySection}`}>
      <h1>Key Advantages</h1>

      <div className={styles.parallelogram}>
        <p>
          Nimble six-person team — we operate like a speedboat vs. an oil tanker
        </p>
      </div>
      <div className={styles.parallelogram}>
        <p>Printing 98.3% of pantone colours</p>
      </div>
      <div className={styles.parallelogram}>
        <p>Deep expertise in innovation</p>
      </div>
      <div className={styles.parallelogram}>
        <p>Second generation family business</p>
      </div>
      <div className={styles.parallelogram}>
        <p>3M Preferred Partner &amp; Trulife partner</p>
      </div>
    </div>

    <div className={`${styles.tlaSection} ${styles.whatwedo}`}>
      <div className={styles.whatwedoTextContainer}>
        <h1>What we do</h1>
        <hr />
        <p>
          Clients call us graphic engineers and strategic partners, but at the
          end of the day we simply take care of every visual need for your
          business, inside and out. We bring your ideas to life by running them
          through our internal innovation process while pushing the physical
          limits of media to create stunning visual products that support your
          brand.
        </p>
      </div>
      <div className={styles.whatwedoPhotoContainer}>
        <img
          src={icons}
          alt="design &amp; planning, pre-production, production, installation, shipping &amp; pick-up"
        />
      </div>
    </div>

    <div className={`${styles.tlaSection} ${styles.whychooseus}`}>
      <div className={styles.whychooseusPhotoContainer}>
        <img src={whychoose01} alt="precision cutter by Zund" />
        <img src={whychoose02} alt="meeting room" />
      </div>

      <div className={styles.whychooseusTextContainer}>
        <h1>Why choose us</h1>
        <hr />
        <p>
          Our intense focus on attention to detail, exquisite production quality
          and lightning fast speed underpin everything we do.
        </p>
        <p>
          As your graphics partner, you can depend on our expert team going
          above and beyond to breathe new life into an existing product or solve
          a new challenge with a creative solution. And we’re on time, every
          time.
        </p>
      </div>
    </div>

    <div className={`${styles.tlaSection} ${styles.promiseSection}`}>
      <h1>Our promise to you</h1>

      <div className={styles.parallelogram}>
        <p>Never sacrifice speed over quality</p>
      </div>
      <div className={styles.parallelogram}>
        <p>Meticulous attention to detail</p>
      </div>
      <div className={styles.parallelogram}>
        <p>Multiple eyes checking every project</p>
      </div>
      <div className={styles.parallelogram}>
        <p>Cutting-edge technology</p>
      </div>
    </div>
    <div className={`${styles.tlaSection} ${styles.brandSection}`}>
      <h1>Companies we work with </h1>
      <div className={styles.brandContainer}>
        <img
          src={philips}
          alt="logo philips"
          className={styles.tlaBrands}
          title="Philips"
        />
        <img
          src={coke}
          alt="logo coke"
          className={styles.tlaBrands}
          title="Coca-Cola"
        />
        <img
          src={noble}
          alt="logo noble"
          className={styles.tlaBrands}
          title="Noble"
        />
        <img
          src={scotia}
          alt="logo scotia"
          className={styles.tlaBrands}
          title="Scotiabank Arena"
        />
        <img
          src={nike}
          alt="logo nike"
          className={styles.tlaBrands}
          title="Nike"
        />
        <img
          src={raps}
          alt="logo raps"
          className={styles.tlaBrands}
          title="Toronto Raptors"
        />
        <img
          src={molson}
          alt="logo molson"
          className={styles.tlaBrands}
          title="Molson"
        />
        <img
          src={canadagoose}
          alt="logo canadagoose"
          className={styles.tlaBrands}
          title="Canada Goose"
        />
        <img
          src={hd}
          alt="logo hd"
          className={styles.tlaBrands}
          title="Home Depot"
        />
        <img
          src={smokes}
          alt="logo smokes"
          className={styles.tlaBrands}
          title="Smokes Poutinerie"
        />
        <img
          src={bmo}
          alt="logo bmo"
          className={styles.tlaBrands}
          title="BMO Field"
        />
        <img
          src={tfc}
          alt="logo tfc"
          className={styles.tlaBrands}
          title="Toronto FC"
        />
        <img src={lg} alt="logo lg" className={styles.tlaBrands} title="LG" />
        <img
          src={shoppers}
          alt="logo shoppers"
          className={styles.tlaBrands}
          title="Shoppers Drugmart"
        />
        <img
          src={tml}
          alt="logo tml"
          className={styles.tlaBrands}
          title="Toronto Maple Leafs"
        />
      </div>
    </div>

    <div className={`${styles.tlaSection} ${styles.thinkitSection}`}>
      <div className={styles.thinkit}>
        <h1>You imagine it, we produce it.</h1>
        <p className={styles.doitLead}>
          We provide creative solutions for a multitude of truly unique and
          custom projects. From custom single-piece orders to duplicates in the
          thousands—we do it all!
        </p>
        <div className={styles.doitRow}>
          <p className={styles.doitColumn}>
            Our no-boundaries approach to a project ensures success in{" "}
            <strong>
              developing exclusive and one of a kind experiences to fit your
              brand purpose.
            </strong>
          </p>
          <p className={styles.doitColumn}>
            At TLA Graphics we recognize the needs of a brand as{" "}
            <strong>individualistic and unlike anything else. </strong>We
            acknowledge these differences by implementing a process which
            operates in this same way. No two projects are alike and{" "}
            <strong>
              we persistently encourage new challenges and push the limits of
              what is possible.
            </strong>
          </p>
          <p className={styles.doitColumn}>
            If you have a project in mind please discuss it with us and we’ll be
            happy to find the correct process and{" "}
            <strong>materials specific to your unique brand needs.</strong>
          </p>
        </div>
      </div>
    </div>

    <BgSection
      className={`${styles.tlaSection} ${styles.thanks}`}
      bgImage="tlaThanksImage"
    >
      <div className={`${styles.thanksContainer} ${styles.white_text}`}>
        <p>
          I would personally like to thank you for this opportunity. TLA’s
          objective is to become a valued resource partner that can assist with
          your team’s challenging development strategies, client deliverables,
          as well as the demands of driving new business. We understand that
          every project must hit its mark.
        </p>
        <p>
          As president of TLA Graphics I can promise that everyone is here to
          provide support to you and your team. We will work tirelessly to earn
          your trust.
        </p>
        <p>Sincerely, Mark White</p>
        <img
          className={styles.signature}
          src={markSignature}
          alt="Signature Mark White"
        />
        {/* <p>
          <a href="mailto:info@tlagraphics.ca">info@tlagraphics.ca</a>
        </p> */}
        {/* <p>158 Don Hillock Dr. Unit 11, Aurora, ON L4G 0G9</p> */}
        {/* <p>
          <a href="tel:905-726-2600">905.726.2600</a>
        </p> */}
      </div>
    </BgSection>
  </Layout>
)

export default IndexPage
