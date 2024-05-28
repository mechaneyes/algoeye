"use client";

import styles from "@/app/styles/index.module.css";
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
          <div className={styles.background1}>
            {/* // ————————————————————————————————————o————————————————————————————————————o contact section -->
                  // ————————————————————————————————————o contact section —>
              //  */}
            <section className="section section--title">
              <div className="title">
                <img alt="ray weitzeberg logo" src="images/initials.png" />
                <h1>Ray Weitzenberg</h1>
                <h2>Benevolent Creator</h2>
              </div>
              <div className="connect-icons">
                <div className="connect-icons__item">
                  <img alt="phone icon" src="images/phone.svg" />
                </div>
                <div className="connect-icons__item">
                  <img alt="sms icon: text bubble" src="images/sms.svg" />
                </div>
                <div className="connect-icons__item">
                  <a href="mailto:ray@mechaneyes.com" className={styles.link2}>
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
                  <h5>Name</h5>
                  <p>Ray Weitzenberg</p>
                </li>
                <li>
                  <h5>Mobile</h5>
                  <p>718.682.2628</p>
                </li>
                <li>
                  <h5>Email</h5>
                  <p>
                    <a
                      className={styles.raymechaneyescom}
                      href="mailto:ray@mechaneyes.com"
                      target="_blank"
                    >
                      ray@mechaneyes.com
                    </a>
                  </p>
                </li>
                <li>
                  <h5>Company</h5>
                  <p>Mechaneyes</p>
                </li>
                <li>
                  <h5>Employee ID</h5>
                  <p>303.808.909</p>
                </li>
                <li>
                  <h5>Department</h5>
                  <p>Art+Tech</p>
                </li>
              </ul>
              <div className="save-vcard">
                <SaveVCard />
                <div className="save-vcard__icon">
                  <img
                    alt=""
                    src="images/saveContacts.svg"
                  />
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
              <div className={styles.container24}>
                <div className={styles.div}>
                  <p>Fusing Art and Technology to Inspire Delight and Wonder</p>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o location -->
                  // ————————————————————————————————————o location —>
              //  */}
            <section className="section">
              <div className="section-header">
                <img
                  className="location-icon"
                  alt="location icon: map pin"
                  src="images/location.svg"
                />
                <h2>Location</h2>
              </div>
              <div className={styles.container26}>
                <div className={styles.list1}>
                  <div className={styles.div}>394 Myrtle Ave, #99</div>
                </div>
                <div className={styles.link14}>
                  <a
                    className={styles.showOnMap}
                    href="https://www.google.com/maps/search/394+Myrtle+Ave%2C+%2399"
                    target="_blank"
                  >
                    Show on Map
                  </a>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o links -->
                  // ————————————————————————————————————o links —>
              //  */}
            <section className="section">
              <div className="section-header">
                <img alt="Links icon: globe icon" src="images/webLinks.svg" />
                <h2>Links</h2>
              </div>
              <div className={styles.container29}>
                <div className={styles.list2}>
                  <div className={styles.item10}>
                    <div className={styles.list1}>
                      <div className={styles.container9}>
                        <a
                          className={styles.raymechaneyescom}
                          href="https://mechaneyes.com/"
                          target="_blank"
                        >
                          Mechaneyes
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item10}>
                    <div className={styles.list1}>
                      <div className={styles.container9}>
                        <a
                          className={styles.raymechaneyescom}
                          href="https://bsky.app/profile/mechaneyes.bsky.social"
                          target="_blank"
                        >
                          Bluesky
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item10}>
                    <div className={styles.list1}>
                      <div className={styles.container9}>
                        <a
                          className={styles.raymechaneyescom}
                          href="https://hypermute.com/@mechaneyes"
                          target="_blank"
                        >
                          Mastodon
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item10}>
                    <div className={styles.list1}>
                      <div className={styles.container9}>
                        <a
                          className={styles.raymechaneyescom}
                          href="https://github.com/mechaneyes"
                          target="_blank"
                        >
                          GitHub
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={styles.item14}>
                    <div className={styles.container9}>
                      <a
                        className={styles.raymechaneyescom}
                        href="https://www.instagram.com/mechaneyes"
                        target="_blank"
                      >
                        Effing Insta
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* // ————————————————————————————————————o————————————————————————————————————o gallery -->
                  // ————————————————————————————————————o gallery —>
              //  */}
            <section className="section">
              <div className={styles.overlayshadow}>
                <img
                  className={styles.mechaneyesvialinkedingifIcon}
                  alt=""
                  src="images/mechaneyes.jpg"
                />
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdfce5dab1714404860/17144048601yp2t0.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.yp2t0MjpgIcon}
                    alt=""
                    src="images/untitled.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdec9bf2a1714404844/1714404844zgs2ob.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.zgs2obMjpgIcon}
                    alt=""
                    src="images/willoughbyWinter.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe7bb118c1714404987/1714404987008nxd.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.nxdMjpgIcon}
                    alt=""
                    src="images/atlanticTerminal.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbdc9b35bc1714404809/1714404809pap0cd.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.zgs2obMjpgIcon}
                    alt=""
                    src="images/pacificDesignCenter.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe0e6e5fa1714404878/171440487845oogn.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.zgs2obMjpgIcon}
                    alt=""
                    src="images/americanRiverVortex.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fbe395fb351714404921/17144049212akgko.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.akgkoMjpgIcon}
                    alt=""
                    src="images/noOrdinaryMonkey.jpg"
                  />
                </a>
              </div>
              <div className={styles.overlayshadow}>
                <a
                  href="https://cdn0030.qrcodechimp.com/qr/PROD/662fbc9257136710286b5fb5/ga/662fc1d11b30f1714405841/1714405841h86s10.jpg"
                  className={styles.link4}
                >
                  <img
                    className={styles.h86s10MjpgIcon}
                    alt=""
                    src="images/hetal.jpg"
                  />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
