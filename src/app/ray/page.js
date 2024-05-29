"use client";

import "@/app/styles/styles.scss";

import SaveVCard from "@/app/components/vcard";

export default function Ray() {
  return (
    <div className="vcard">
      <div className="vcard__outer">
        <div className="vcard__inner">
          <div className="hero">
            <img
              className="hero__image"
              alt="hero image"
              src="images/hero.jpg"
            />
          </div>
          <div className="main-container">
            {/* // ————————————————————————————————————o————————————————————————————————————o contact section -->
                  // ————————————————————————————————————o contact section —>
              //  */}
            <section className="section section--title">
              <div className="title">
                <img alt="ray weitzeberg logo" src="images/initials.png" />
                <h1>Ray Weitzenberg</h1>
                <h3>Benevolent Creator</h3>
              </div>
              <div className="connect-icons">
                <div className="connect-icons__item">
                  <img alt="phone icon" src="images/phone.svg" />
                </div>
                <div className="connect-icons__item">
                  <img alt="sms icon: text bubble" src="images/sms.svg" />
                </div>
                <div className="connect-icons__item">
                  <a href="mailto:ray@mechaneyes.com">
                    <img
                      alt="email icon: envelope image"
                      src="images/mail.svg"
                    />
                  </a>
                </div>
                <div className="connect-icons__item">
                  <a href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399">
                    <img
                      alt="location icon: map pin"
                      src="images/location.svg"
                    />
                  </a>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o contact section -->
                  // ————————————————————————————————————o contact section —>
              //  */}
            <section className="section section--contact">
              <div className="section-header">
                <img
                  alt="contact icon: phone handset"
                  src="images/contact.svg"
                />
                <h2>Contact</h2>
              </div>
              <ul>
                <li>
                  <h4>Name</h4>
                  <p>Ray Weitzenberg</p>
                </li>
                <li>
                  <h4>Mobile</h4>
                  <p>718.682.2628</p>
                </li>
                <li>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:ray@mechaneyes.com" target="_blank">
                      ray@mechaneyes.com
                    </a>
                  </p>
                </li>
                <li>
                  <h4>Company</h4>
                  <p>Mechaneyes</p>
                </li>
                <li>
                  <h4>Employee ID</h4>
                  <p>303.808.909</p>
                </li>
                <li>
                  <h4>Department</h4>
                  <p>Art+Tech</p>
                </li>
              </ul>
              <div className="save-vcard">
                <SaveVCard />
                <div className="save-vcard__icon">
                  <img alt="" src="images/saveContacts.svg" />
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o summary -->
                  // ————————————————————————————————————o summary —>
              //  */}
            <section className="section">
              <div className="section-header">
                <img
                  alt="summary icon: speech bubble with 'i' inside"
                  src="images/summary.svg"
                />
                <h2>Summary</h2>
              </div>
              <p>
                Fusing Art and Technology to
                <br />
                Inspire Delight and Wonder
              </p>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o location -->
                  // ————————————————————————————————————o location —>
              //  */}
            <section className="section section--location">
              <div className="section-header">
                <img
                  className="location-icon"
                  alt="location icon: map pin"
                  src="images/location.svg"
                />
                <h2>Location</h2>
              </div>
              <p>394 Myrtle Ave, #99</p>
              <div className="location-button">
                <a
                  href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399"
                  target="_blank"
                >
                  Show on Map
                </a>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o links -->
                  // ————————————————————————————————————o links —>
              //  */}
            <section className="section section--links">
              <div className="section-header">
                <img alt="Links icon: globe icon" src="images/webLinks.svg" />
                <h2>My Digital Footprint</h2>
              </div>
              <ul>
                <li>
                  <a href="https://mechaneyes.com/" target="_blank">
                    Mechaneyes
                  </a>
                </li>
                <li>
                  <a
                    href="https://bsky.app/profile/mechaneyes.bsky.social"
                    target="_blank"
                  >
                    Bluesky
                  </a>
                </li>
                <li>
                  <a href="https://hypermute.com/@mechaneyes" target="_blank">
                    Mastodon
                  </a>
                </li>
                <li>
                  <a href="https://github.com/mechaneyes" target="_blank">
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/mechaneyes"
                    target="_blank"
                  >
                    Instagarbage <span className="italicize">(fuck zuck)</span>
                  </a>
                </li>
              </ul>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o gallery -->
                  // ————————————————————————————————————o gallery —>
              //  */}
            <section className="section section--gallery">
              <img alt="mechaneyes logo" src="images/mechaneyes.gif" />
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdfce5dab1714404860/17144048601yp2t0.jpg">
                <img alt="untitled" src="images/untitled.jpg" />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdec9bf2a1714404844/1714404844zgs2ob.jpg">
                <img
                  alt="tree branches covered in snow"
                  src="images/willoughbyWinter.jpg"
                />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe7bb118c1714404987/1714404987008nxd.jpg">
                <img
                  alt="lined ceiling with fluorescent light tubes"
                  src="images/atlanticTerminal.jpg"
                />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdc9b35bc1714404809/1714404809pap0cd.jpg">
                <img
                  alt="shapes decending down stairwell"
                  src="images/pacificDesignCenter.jpg"
                />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe0e6e5fa1714404878/171440487845oogn.jpg">
                <img
                  alt="distorted image with river wrapping around person in canoe"
                  src="images/americanRiverVortex.jpg"
                />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe395fb351714404921/17144049212akgko.jpg">
                <img
                  alt="dancer lit from behind by strobe light"
                  src="images/noOrdinaryMonkey.jpg"
                />
              </a>
              <a href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fc1d11b30f1714405841/1714405841h86s10.jpg">
                <img
                  alt="portrait of some woman named, hetal"
                  src="images/hetal.jpg"
                />
              </a>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
