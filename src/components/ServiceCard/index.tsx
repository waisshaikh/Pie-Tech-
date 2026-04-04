"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { useInView } from "react-intersection-observer";

/* ================= TYPES ================= */

interface ServiceCardData {
  title: string;
  services: string[][];
  description: string;
  number: string | number;
  classes?: string;
}

interface Props {
  card: ServiceCardData;
}

/* ================= COMPONENT ================= */

const ServiceCard: FC<Props> = ({
  card: { title, services, description, number, classes = "" },
}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="px-[6vw] md:px-[3vw] pb-[10vw] last:pb-[14vw]"
    >
      {/* TITLE */}
      <h4 className="text-[4vw] md:text-[6vw] font-light md:mt-[2vw]">
        {title}
      </h4>

      {/* CONTENT */}
      <div
        className={`flex items-start gap-[3vw] pt-[3vw] md:flex-col ${classes}`}
      >
        {/* SERVICES */}
        <div className="flex-1 md:mb-[3vw]">
          <div className="flex flex-wrap gap-y-[2vw] md:gap-y-[1.5vw]">
            {services.map((serviceGroup, i) => (
              <ul
                key={i}
                className="flex items-center gap-[4vw] text-[1.8vw] md:text-[3vw] font-semibold"
              >
                {serviceGroup.map((s) => (
                  <li
                    key={s}
                    className="flex items-center gap-[0.6vw]"
                  >
                    <span className="h-[1vw] w-[1vw] md:h-[2vw] md:w-[2vw] rounded-full bg-white/40" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="relative flex-1">
          <p className="relative z-10 line-clamp-4 text-[1.6vw] md:text-[3vw] font-medium leading-relaxed md:mt-[3vw]">
            {description}
          </p>

          {/* BIG NUMBER */}
          <span className="absolute right-[4vw] top-[1vw] z-0 text-[14vw] md:text-[26vw] font-extrabold text-gray-300/20">
            {number}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;





// import { FC } from 'react';
// import { useInView } from 'react-intersection-observer';

// interface Props {
//   card: any;
// }

// const Index: FC<Props> = ({ card: { title, services, description, number, classes } }) => {
//   const { ref } = useInView({
//     triggerOnce: true,
//     threshold: 0.6,
//   });
//   return (
//     <div ref={ref} key={number} className="px-[6vw] md:px-[3vw] pb-[9.5vw] last:pb-[13vw]">
//       <h4 className="text-[3.7vw] md:text-[7vw] md:mt-[3vw] font-light">{title}</h4>
//       <div className={`flex items-start space-x-[3vw] md:space-x-0 pt-[3vw] first:border-none md:flex-col ${classes}`}>
//         <div className="flex-1 md:mb-[2vw]">
//           <div className="flex flex-wrap space-y-[2vw] md:space-y-[1.5vw]  ">
//             {services.map((service: string[], i: number) => {
//               return (
//                 <ul key={i} className="flex items-center space-x-[5vw] text-[1.7vw] md:text-[3vw] md: font-semibold">
//                   {service.map((s) => (
//                     <li key={s} className="flex items-center space-x-[0.6vw]">
//                       <div className="h-[1.2vw] w-[1.2vw] rounded-full bg-[#fff]/40"></div>
//                       <p>{s}</p>
//                     </li>
//                   ))}
//                 </ul>
//               );
//             })}
//           </div>
//         </div>

//         <div className="relative flex-1 ">
//           <p className="relative z-[2000] line-clamp-4 text-[1.5vw] md:text-[3vw] font-medium leading-[1.7] md:text-balance md:leading-[1.5] md:mt-[3vw]">{description}</p>
//           <div className="absolute right-[6vw] top-[1.8vw] z-[1] text-right text-[16vw] font-extrabold tracking-[5%] text-gray-1 md:text-[28vw] md:top-0">
//             {number}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Index;
