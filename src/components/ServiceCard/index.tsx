// "use client";

// import { motion } from "framer-motion";
// import { FC } from "react";
// import { useInView } from "react-intersection-observer";

// /* ================= TYPES ================= */

// interface ServiceCardData {
//   title: string;
//   services: string[][];
//   description: string;
//   number: string | number;
//   classes?: string;
// }

// interface Props {
//   card: ServiceCardData;
// }

// /* ================= COMPONENT ================= */

// const ServiceCard: FC<Props> = ({
//   card: { title, services, description, number, classes = "" },
// }) => {
//   const { ref, inView } = useInView({
//     triggerOnce: true,
//     threshold: 0.3,
//   });

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, y: 60 }}
//       animate={inView ? { opacity: 1, y: 0 } : {}}
//       transition={{ duration: 0.6 }}
//       className="px-[6vw] md:px-[3vw] pb-[10vw] last:pb-[14vw]"
//     >
//       {/* TITLE */}
//       <h4 className="text-[4vw] md:text-[6vw] font-light md:mt-[2vw]">
//         {title}
//       </h4>

//       {/* CONTENT */}
//       <div
//         className={`flex items-start gap-[3vw] pt-[3vw] md:flex-col ${classes}`}
//       >
//         {/* SERVICES */}
//         <div className="flex-1 md:mb-[3vw]">
//           <div className="flex flex-wrap gap-y-[2vw] md:gap-y-[1.5vw]">
//             {services.map((serviceGroup, i) => (
//               <ul
//                 key={i}
//                 className="flex items-center gap-[4vw] text-[1.8vw] md:text-[3vw] font-semibold"
//               >
//                 {serviceGroup.map((s) => (
//                   <li
//                     key={s}
//                     className="flex items-center gap-[0.6vw]"
//                   >
//                     <span className="h-[1vw] w-[1vw] md:h-[2vw] md:w-[2vw] rounded-full bg-white/40" />
//                     <span>{s}</span>
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//         </div>

//         {/* DESCRIPTION */}
//         <div className="relative flex-1">
//           <p className="relative z-10 line-clamp-4 text-[1.6vw] md:text-[3vw] font-medium leading-relaxed md:mt-[3vw]">
//             {description}
//           </p>

//           {/* BIG NUMBER */}
//           <span className="absolute right-[4vw] top-[1vw] z-0 text-[14vw] md:text-[26vw] font-extrabold text-gray-300/20">
//             {number}
//           </span>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// export default ServiceCard;




