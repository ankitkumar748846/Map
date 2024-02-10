// import { Link } from "react-router-dom";
// import PageNav from "../components/PageNav";
// import styles from "./HomePage.module.css";
// import { useTranslation } from "react-i18next";

// function HomePage() {

//   const { t } = useTranslation();
//   return (
//     <div>
//     <main className={styles.homepage}>
//       <PageNav />
//       <section>
//         <h1>
//           {t("home.banner_text_1")}
//           <br />
//           {t("home.banner_text_2")}
//         </h1>
//         <h2>{t("home.sub_text_1")}</h2>
//         <Link to="/app" className="cta">
//           {t("home.start_tracking")}
//         </Link>
//       </section>
//     </main>

//     <footer>
//       <div className="footer-content">
//         <h3>Maply</h3>
//         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora ratione earum sequi.</p>
//         <ul className="socials">
//           {/* <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li> */}
//           <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
//           <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
//           <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
//           <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
//         </ul>

//       </div>
//       <div className="footer-bottom">
//         <p>copyright &copy;2024 Maply. designed by <span>Ankit Kumar</span></p>
//       </div>
//     </footer>

//     </div>

//   );
// }

// export default HomePage;

import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./HomePage.module.css";
import { useTranslation } from "react-i18next";

function HomePage() {
  const { t } = useTranslation();
  return (
    <div>
      <main className={styles.homepage}>
        <PageNav />
        <section>
          <h1>
            {t("home.banner_text_1")}
            <br />
            {t("home.banner_text_2")}
          </h1>
          <h2>{t("home.sub_text_1")}</h2>
          <Link to="/app" className="cta">
            {t("home.start_tracking")}
          </Link>
        </section>
      </main>

      <footer className={styles.footer}>

        <div className={styles.socialIcons}>
          <a href="https://www.linkedin.com/in/ankit-kum/">
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
          
        </div>
        <div className={styles.footerBottom}>
          <p>
             Copyright &copy;2024 Maply.  Designed by{" "}
            <span className={styles.designer}>Ankit Kumar</span>
            <span className={styles.designer}>Vidya Sagar</span>
            <span className={styles.designer}>Debajyoti Das</span>

          </p>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
