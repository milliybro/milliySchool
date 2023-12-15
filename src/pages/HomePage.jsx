import React, { useEffect } from "react";

import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import preschool from "../assets/preschool.jpg";
import primarySchool from "../assets/primarySchool.jpg";
import secondarySchool from "../assets/secondary.jpg";



const HomePage = ({ debts }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="home" className="py-5 my-5">
      <div className="main-screen__background">
        <div className="main-screen__back-desktop">
          <video
            loading="lazy"
            data-ignore
            playsinline
            loop
            muted
            autoPlay
            id="myVideo"
            class="viewplay"
            preload="metadata"
          >
            <source
              src="//wist.uz/wp-content/themes/wist/assets/video/wist-intro.mp4"
              type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
            />
          </video>
        </div>
      </div>
      <div className="container">
        <h1 className=" header__1">
          2023-2024-o'quv yili <br /> uchun qabul boshlandi
        </h1>
      </div>

      <div id="welcome" className="container">
        <div className="welcome__content">
          <div data-aos="fade-right" className="welcome__content-left">
            <h2>Milliy Schoolga Xush kelibsiz!</h2>
            <h4>
              Toshkentdagi birinchi milliy maktabiga (MS) xush kelibsiz,
              2023-yil sentabr oyida ochilgan zamonaviy dizayndagi, maqsadli
              qurilgan kampusda joylashgan maktab. Milliy School 2 yoshdan 18
              yoshgacha bo‘lgan bolalar uchun to‘liq ta’limni taklif etadi. Eng
              yaxshi xalqaro, Misr, Saudiya Arabistoni, Fransiya, Britaniya va
              Oʻzbekiston oʻquv dasturlari.
            </h4>
            <h4>
              MS Cambridge Assessment International Education (CAIE), Pearson
              Edexcel imtihonlari uchun vakolatli imtihon markazi, shuningdek,
              Xalqaro maktablar kengashi (MDH) aʼzosi. Bizning dasturlarimiz,
              shuningdek, Xalqaro erta yoshdagi o'quv dasturi (IEYC) va Xalqaro
              boshlang'ich o'quv dasturini (IPC) o'z ichiga oladi. MS barcha
              bitiruvchi talabalarimizni universitet yo'l-yo'riqlari bilan
              qo'llab-quvvatlaydi va Universitetlar va Kollejlarga Qabul
              Xizmatlari (UCAS) bilan ro'yxatdan o'tgan markazdir.
            </h4>
          </div>
          <div data-aos="fade-left" className="welcome__content-right">
            <img src="/logo.png" alt="" />
            <div className="welcome__content-img">
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/caie.svg"
                alt=""
              />
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/pearson.svg"
                alt=""
              />
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/cis.png"
                alt=""
              />
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/ieyc.svg"
                alt=""
              />
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/ipc.svg"
                alt=""
              />
              <img
                src="https://wist.uz/wp-content/themes/wist/assets/img/curriculum/ucas.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <div id="course" className="container">
        <div className=" class">
          <div className="preschool-content">
            <div class="preschool-text school-text">
              <h2>Maktabgacha ta'lim</h2>
              <p>2-6 yosh</p>
            </div>
            <div class="overlay">
              <img src={preschool} alt="Avatar" class="image" />
            </div>
          </div>
          <div className="primarySchool-content">
            <div class="primarySchool-text school-text">
              <h2>Boshlang'ich ta'lim</h2>
              <p>7-11 yosh</p>
            </div>
            <div class="overlay">
              <img src={primarySchool} alt="Avatar" class="image" />
            </div>
          </div>
          <div className="secondary-content">
            <div class="secondary-text school-text">
              <h2>Umumiy ta'lim</h2>
              <p>11-18 yosh</p>
            </div>
            <div class="overlay">
              <img src={secondarySchool} alt="Avatar" class="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
