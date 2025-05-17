import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Chat-app MERN",
    img: "/chat.jpg",
    desc: "Aplikasi di samping adalah hasil karya saya yang dibuat dengan mengikuti tutorial dari channel YouTube 'As a Programmer.' Aplikasi ini memiliki fitur utama berupa chat realtime.",
    url: "#",
  },
  {
    id: 2,
    title: "Portfolio React",
    img: "/portfolio.jpg",
    desc: "Website di samping adalah portofolio pribadi saya yang dibuat dengan mengikuti tutorial dari YouTuber 'Lama Dev.' Website ini dibangun menggunakan React Native dan dilengkapi dengan efek parallax untuk tampilan yang menarik.",
    url: "https://portfolio-rafi-theta.vercel.app/",
  },
  {
    id: 3,
    title: "Startnews Mobile",
    img: "/startmob.png",
    desc: "Aplikasi di samping adalah hasil UAS saya dalam mata kuliah Pemrograman Mobile. Aplikasi ini merupakan versi mobile dari website dengan fitur seperti dashboard admin, kategori berita, detail berita, dan lainnya. Dibangun menggunakan React Native untuk pengalaman pengguna yang responsif.",
    url: "https://drive.google.com/drive/folders/1SaLXtn7igC6V_cYQADa5sy1rMq0uYyJL?usp=sharing",
  },
  {
    id: 4,
    title: "Startnews Web",
    img: "/startnews.png",
    desc: "Aplikasi di samping adalah hasil UAS saya dalam mata kuliah Pemrograman Website. Website ini memiliki fitur seperti dashboard admin, kategori berita, detail berita, dan lainnya. Dibangun menggunakan Laravel, saya berkontribusi lebih banyak pada pengembangan bagian backend.",
    url: "#",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.url}>Soon</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
