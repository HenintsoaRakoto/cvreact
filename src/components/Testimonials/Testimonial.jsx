import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Je suis absolument ravi de la qualité de service que j'ai reçue. L'équipe a été incroyablement efficace et professionnelle tout au long du processus, et a été en mesure de répondre rapidement à toutes mes questions et préoccupations.",
    },
    {
      img: profilePic2,
      review:
        " Le service que j'ai reçu était de la plus haute qualité, et j'ai été impressionnée par l'attention au détail et le niveau de personnalisation offerts. Je recommanderais certainement ce service",
    },
    {
      img: profilePic3,
      review:
        "Je suis pleinement satisfait du service que j'ai reçu. L'entreprise a su répondre à toutes mes attentes en fournissant un produit de qualité supérieure dans les délais impartis. Le personnel était compétent et professionnel.",
    },
    {
      img: profilePic4,
      review:
        "Il m'a tenu informé tout au long du processus. Je suis impressionné par leur engagement envers la satisfaction du client et je recommanderais certainement leurs services à d'autres. Merci encore pour cette expérience positive.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Les clients obtiennent toujours </span>
        <span>un Travail Exceptionnel <br /></span>
        <span style={{alignItems:"center"}}>de ma part...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
