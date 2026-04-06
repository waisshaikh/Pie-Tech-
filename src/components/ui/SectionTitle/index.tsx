import { FC, HTMLAttributes } from "react";

interface SectionHeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  title: string;
  subtitle?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  subtitleClassName?: string;
}

const SectionHeading: FC<SectionHeadingProps> = ({
  title,
  subtitle,
  as: Tag = "h2",
  className = "",
  subtitleClassName = "",
  ...props
}) => {
  return (
    <div className="w-full text-center mb-12">
      <Tag
        className={`font-extrabold leading-tight text-[8vw] md:text-[4vw] lg:text-[3vw] ${className}`}
        {...props}
      >
        {title}
      </Tag>

      {subtitle && (
        <p
          className={`mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base md:text-lg ${subtitleClassName}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;


