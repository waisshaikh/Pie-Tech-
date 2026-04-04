"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Mail,
  MapPin,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

/* ================= ANIMATION ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

/* ================= HERO ================= */

function ContactHero() {
  return (
    <section className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-24 text-center overflow-hidden">

      {/* Glow */}
      <div className="absolute inset-0 -z-10 flex justify-center">
        <div className="h-72 w-72 rounded-full bg-orange-500/20 blur-[140px]" />
      </div>

      <motion.span
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-100 dark:bg-white/5 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 mb-8"
      >
        <Sparkles size={16} />
        Contact Pie Tech Solutions
      </motion.span>

      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.1 }}
        className="text-4xl md:text-6xl font-extrabold text-black dark:text-white mb-6"
      >
        Let’s Build Something{" "}
        <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
          Great
        </span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-3xl text-lg md:text-xl text-gray-600 dark:text-gray-400"
      >
        Have a project in mind or need expert digital solutions?
        Reach out to Pie Tech Solutions and let’s turn your ideas into reality.
      </motion.p>
    </section>
  );
}

/* ================= WHY CONTACT US ================= */

function WhyContactUs() {
  const points = [
    {
      icon: <ShieldCheck size={26} />,
      title: "Trusted Expertise",
      desc: "Our experienced professionals deliver secure, scalable digital solutions tailored to your business needs.",
    },
    {
      icon: <Clock size={26} />,
      title: "Quick Response",
      desc: "We ensure fast communication, transparent updates, and timely project execution.",
    },
    {
      icon: <Users size={26} />,
      title: "Client-Focused Approach",
      desc: "We align technology and strategy to deliver measurable business impact.",
    },
  ];

  return (
    <section className="relative mx-auto max-w-[1200px] px-6 py-28">

      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-bold text-black dark:text-white text-center mb-4"
      >
        Why Work With Us
      </motion.h2>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mx-auto max-w-3xl text-center text-gray-600 dark:text-gray-400 mb-16"
      >
        We build long-term partnerships focused on growth, performance,
        and real business results.
      </motion.p>

      <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
        {points.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-10"
          >
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
              {item.icon}
            </div>

            <h4 className="text-xl font-semibold text-black dark:text-white mb-3">
              {item.title}
            </h4>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

/* ================= CONTACT INFO ================= */

function ContactInfo() {
  const info = [
    { icon: <Mail size={22} />, title: "Email", value: "info@pietechsolutions@gmail.com" },
    { icon: <Phone size={22} />, title: "Phone", value: "+91 89100 34602" },
    { icon: <MapPin size={22} />, title: "Location", value: "Kolkata, India" },
  ];

  return (
    <div className="space-y-6">
      {info.map((item, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-6"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
              {item.icon}
            </div>

            <div>
              <h4 className="text-black dark:text-white font-semibold">
                {item.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-400">
                {item.value}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* ================= CONTACT FORM ================= */

function ContactForm() {
  return (
    <motion.form
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      className="rounded-3xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 p-10 space-y-6"
    >
      <h3 className="text-2xl font-semibold text-black dark:text-white">
        Send Us a Message
      </h3>

      <input
        type="text"
        placeholder="Your Name"
        className="w-full rounded-xl bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/10 p-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
      />

      <input
        type="email"
        placeholder="Your Email"
        className="w-full rounded-xl bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/10 p-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
      />

      <textarea
        rows={5}
        placeholder="Your Message"
        className="w-full rounded-xl bg-gray-100 dark:bg-black border border-gray-300 dark:border-white/10 p-4 text-black dark:text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500"
      />

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-10 py-4 font-semibold text-black hover:opacity-90 transition"
      >
        <Send size={16} /> Send Message
      </button>
    </motion.form>
  );
}

/* ================= MAP ================= */

function MapSection() {
  return (
    <section className="mx-auto max-w-[1200px] px-6 pb-28">
      <h3 className="text-3xl font-bold text-black dark:text-white mb-6">
        Find Us in Kolkata
      </h3>

      <div className="overflow-hidden rounded-3xl border border-gray-200 dark:border-white/10">
        <iframe
          title="Pie Tech Solutions Kolkata"
          src="https://www.google.com/maps?q=Kolkata,India&output=embed"
          className="h-[380px] w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  );
}

/* ================= PAGE ================= */

export default function ContactPage() {
  return (
    <main className="bg-white dark:bg-bg-1">
      <ContactHero />
      <WhyContactUs />

      <section className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-14 py-24">
        <ContactInfo />
        <ContactForm />
      </section>

      <MapSection />
    </main>
  );
}






// "use client";

// import { motion } from "framer-motion";
// import {
//   Clock,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   ShieldCheck,
//   Sparkles,
//   Users,
// } from "lucide-react";

// /* ================= ANIMATIONS ================= */
// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0 },
// };

// /* ================= HERO ================= */
// function ContactHero() {
//   return (
//     <section className="relative mx-auto max-w-[1200px] px-6 pt-32 pb-24 text-center overflow-hidden">
//       {/* Glow */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="absolute inset-0 -z-10 flex justify-center"
//       >
//         <div className="h-72 w-72 rounded-full bg-orange-500/20 blur-[140px]" />
//       </motion.div>

//       <motion.span
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 mb-8"
//       >
//         <Sparkles size={16} />
//         Contact Pie Tech Solutions
//       </motion.span>

//       <motion.h1
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.1 }}
//         className="text-4xl md:text-6xl font-extrabold text-white mb-6"
//       >
//         Let’s Build Something{" "}
//         <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
//           Great
//         </span>
//       </motion.h1>

//       <motion.p
//         variants={fadeUp}
//         initial="hidden"
//         animate="visible"
//         transition={{ delay: 0.2 }}
//         className="mx-auto max-w-3xl text-lg md:text-xl text-gray-400"
//       >
//         Have a project in mind or need expert digital solutions?
//         Reach out to Pie Tech Solutions and let’s turn your ideas into reality.
//       </motion.p>
//     </section>
//   );
// }

// /* ================= WHY CONTACT US ================= */
// function WhyContactUs() {
//   const points = [
//     {
//       icon: <ShieldCheck size={26} />,
//       title: "Trusted Expertise",
//       desc: "Our experienced professionals deliver secure, scalable, and future-ready digital solutions tailored to your business needs.",
//     },
//     {
//       icon: <Clock size={26} />,
//       title: "Quick Response",
//       desc: "We value your time. Our team ensures fast communication, transparent updates, and timely project execution.",
//     },
//     {
//       icon: <Users size={26} />,
//       title: "Client-Focused Approach",
//       desc: "We work as an extension of your team, aligning technology and strategy to deliver measurable business impact.",
//     },
//   ];

//   return (
//     <section className="relative mx-auto max-w-[1200px] px-6 py-28 overflow-hidden">
      
//       {/* Soft background glow */}
//       <div className="absolute inset-0 -z-10 flex justify-center">
//         <div className="h-96 w-96 rounded-full bg-orange-500/10 blur-[160px]" />
//       </div>

//       {/* Heading */}
//       <motion.h2
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-4xl md:text-5xl font-bold text-white text-center mb-4"
//       >
//         Why Work With Us
//       </motion.h2>

//       <motion.p
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         transition={{ delay: 0.1 }}
//         className="mx-auto max-w-3xl text-center text-gray-400 mb-16"
//       >
//         We don’t just deliver projects — we build long-term partnerships focused
//         on growth, performance, and real business results.
//       </motion.p>

//       {/* Cards */}
//       <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10">
//         {points.map((item, i) => (
//           <motion.div
//             key={i}
//             variants={fadeUp}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             transition={{ delay: i * 0.15 }}
//             whileHover={{ y: -10, scale: 1.02 }}
//             className="group relative rounded-3xl border border-white/10 bg-white/5 p-10 transition"
//           >
//             {/* Gradient hover glow */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 to-amber-300/20 opacity-0 blur-xl group-hover:opacity-100 transition" />

//             <div className="relative z-10">
//               {/* Icon */}
//               <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
//                 {item.icon}
//               </div>

//               <h4 className="text-xl font-semibold text-white mb-3">
//                 {item.title}
//               </h4>

//               <p className="text-gray-400 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }


// /* ================= CONTACT INFO ================= */
// function ContactInfo() {
//   const info = [
//     {
//       icon: <Mail size={22} />,
//       title: "Email",
//       value: "info@pietechsolutions@gmail.com",
//     },
//     {
//       icon: <Phone size={22} />,
//       title: "Phone",
//       value: "+91 89100 34602",
//     },
//     {
//       icon: <MapPin size={22} />,
//       title: "Location",
//       value: "Kolkata, India",
//     },
//   ];

//   return (
//     <div className="space-y-6">
//       {info.map((item, i) => (
//         <motion.div
//           key={i}
//           variants={fadeUp}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ delay: i * 0.1 }}
//           whileHover={{ y: -8, scale: 1.02 }}
//           className="group relative rounded-3xl border border-white/10 bg-white/5 p-6 transition"
//         >
//           {/* Hover glow */}
//           <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/20 to-amber-300/20 opacity-0 blur-xl group-hover:opacity-100 transition" />

//           <div className="relative z-10 flex items-center gap-4">
//             {/* Icon */}
//             <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-400/10 text-orange-400">
//               {item.icon}
//             </div>

//             {/* Text */}
//             <div>
//               <h4 className="text-white font-semibold">{item.title}</h4>
//               <p className="text-gray-400">{item.value}</p>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// }


// /* ================= CONTACT FORM ================= */
// function ContactForm() {
//   return (
//     <motion.form
//       variants={fadeUp}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       className="relative rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur space-y-6"
//     >
//       {/* Form glow */}
//       <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-400/10 to-amber-300/10 opacity-30 -z-10" />

//       <div>
//         <h3 className="text-2xl font-semibold text-white mb-1">
//           Send Us a Message
//         </h3>
//         <p className="text-gray-400 text-sm">
//           Tell us about your project and we’ll get back to you shortly.
//         </p>
//       </div>

//       <input
//         type="text"
//         placeholder="Your Name"
//         className="w-full rounded-xl bg-black border border-white/10 p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
//       />

//       <input
//         type="email"
//         placeholder="Your Email"
//         className="w-full rounded-xl bg-black border border-white/10 p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
//       />

//       <textarea
//         rows={5}
//         placeholder="Your Message"
//         className="w-full rounded-xl bg-black border border-white/10 p-4 text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20 transition"
//       />

//       <motion.button
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         type="submit"
//         className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 px-10 py-4 font-semibold text-black shadow-lg hover:opacity-90 transition"
//       >
//         <Send size={16} /> Send Message
//       </motion.button>
//     </motion.form>
//   );
// }


// /* ================= MAP ================= */
// function MapSection() {
//   return (
//     <section className="mx-auto max-w-[1200px] px-6 pb-28">
//       <motion.h3
//         variants={fadeUp}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="text-3xl font-bold text-white mb-6"
//       >
//         Find Us in Kolkata
//       </motion.h3>

//       <div className="overflow-hidden rounded-3xl border border-white/10">
//         <iframe
//           title="Pie Tech Solutions Kolkata"
//           src="https://www.google.com/maps?q=Kolkata,India&output=embed"
//           className="h-[380px] w-full border-0"
//           loading="lazy"
//         />
//       </div>
//     </section>
//   );
// }

// /* ================= PAGE ================= */
// export default function ContactPage() {
//   return (
//     <main className="text-white">
//       <ContactHero />
//       <WhyContactUs />

//       {/* Info + Form in one row */}
//       <section className="mx-auto max-w-[1200px] px-6 grid lg:grid-cols-2 gap-14 py-24">
//         <ContactInfo />
//         <ContactForm />
//       </section>

//       <MapSection />
//     </main>
//   );
// }







