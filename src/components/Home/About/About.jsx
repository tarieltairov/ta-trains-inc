import React, { useEffect, useState } from "react";
import style from "./About.module.scss";
import BoltIcon from "../../../assets/svg/Icon-bolt.svg";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import ContentHeadTitle from "../../components/ContentHeadTitlte/ContentHeadTitle";
import truck1 from "../../../assets/new/truck1.jpg"
import truck2 from "../../../assets/new/truck2.jpg"
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: "(max-width: 992px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const animate = open
    ? {
      position: "fixed",
      width: isMobile ? "95%" : "80vw",
      height: "70vh",
      clipPath: "none",
      padding: "40px 5px",
    }
    : {
      position: "absolute",
      height: `${isMobile ? "348px" : isLaptop ? "552px" : "512px"}`,
      width: `${isMobile ? "320px" : isLaptop ? "508px" : "470px"}`,
      clipPath: "polygon(50% 0, 100% 24%, 100% 76%, 50% 100%, 0 76%, 0 24%)",
    };

  const animateShadow = open
    ? {
      position: "fixed",
      width: "100vw",
      height: "100vh",
      borderRadius: "0%",
      background: "rgba(0, 0, 0, 0.5)",
      zIndex: 13,
    }
    : {
      width: "10px",
      height: "10px",
      borderRadius: "50%",
      background: "transparent",
    };

  return (
    <div className={style.main}>
      <div id={"about"} className="container">
        <div className={style.block}>
          <div className={style.firstBlock}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }} className={style.heading}>
              <ContentHeadTitle title={"ABOUT US"} />
            </motion.div>
            <div className={style.content}>
              <motion.h4
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi velit suscipit error est magnam, modi unde corrupti ullam numquam odio, quos ipsum sunt itaque sit magni aspernatur esse quisquam dicta!
              </motion.h4>
              <motion.abbrdiv className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: -100 },
                }}
              >
                <Image src={BoltIcon} />
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias natus id nulla quibusdam perspiciatis voluptates dicta unde eveniet adipisci repellat, esse, harum sint doloribus voluptate incidunt commodi, facere nostrum assumenda.
                </p>
              </motion.abbrdiv>
              <motion.div className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, x: 0 },
                  hidden: { opacity: 0, x: 100 },
                }}>
                <Image src={BoltIcon} />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, repellendus sit aperiam iure, dolore impedit eius ullam cumque tempora incidunt sunt libero expedita, fuga voluptas fugiat? Distinctio, dolore odio. Quasi.
                </p>
              </motion.div>
            </div>
            <div className={style.buttons}>
              <a href="/#contacts">
                <button>Contact Us</button>
              </a>
            </div>
          </div>
          <motion.div animate={animateShadow} className={style.shadow} />
          <motion.div
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, x: 0 },
            hidden: { opacity: 0, x: 100 },
          }}>
            <Carousel activeIndex={index} onSelect={handleSelect} className={style.slider}>
              <Carousel.Item>
                <Image src={truck1} width={900} height={600} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={truck2} width={900} height={600} />
              </Carousel.Item>
            </Carousel>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default About;
