import { scale, slide } from '@/shared/utils/animations';
import { motion } from 'framer-motion';
import { FC } from 'react';

interface Props {
  data: any;
  isActive: boolean;
  setSelectedIndicator: any;
  handleClick: () => void;
}

const Index: FC<Props> = ({
  data,
  isActive,
  setSelectedIndicator,
  handleClick,
}) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className="relative flex items-center gap-3 group cursor-pointer"
      onMouseEnter={() => setSelectedIndicator(href)}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
      onClick={handleClick}
    >
      {/*  Indicator Dot */}
      <motion.div
        className="h-2 w-2 rounded-full bg-white"
        variants={scale}
        animate={isActive ? 'open' : 'closed'}
      />

      {/*  Text */}
      <motion.div
        tabIndex={0}
        className={`
          text-xl sm:text-2xl md:text-3xl
          font-semibold tracking-wide
          transition-all duration-300
          ${
            isActive
              ? 'text-white'
              : 'text-white/60 group-hover:text-white'
          }
        `}
        whileHover={{ x: 8 }}
      >
        {title}
      </motion.div>

      {/*  Underline (premium touch) */}
      <motion.span
        className="absolute left-0 -bottom-1 h-[2px] bg-white"
        initial={{ width: 0 }}
        animate={{ width: isActive ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default Index;