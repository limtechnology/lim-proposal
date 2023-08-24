import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { format } from "date-fns";

const LearText = () => {
  const [isVisibile, setVisibility] = useState(false);
  const [presnetationVisible, setPresentationVisibility] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setVisibility(true);
      setTimeout(() => {
        setPresentationVisibility(true)
      }, 2000)
    }, 2300);
  });

  const prettyDate = format(new Date(), "MMM yyyy");

  return (
    <div>
      <motion.div
        className="opacity-0 items-center justify-center flex"
        animate={isVisibile ? { opacity: 100 } : undefined}
        transition={isVisibile ? { ease: "easeOut", duration: 5 } : undefined}
      >
        <svg
          className="fill-white h-56 w-auto"
          id="logo-text"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 300 136"
        >
          <g class="logo-text-lear">
            <path
              class="logo-text-lear-l path"
              d="M25.1,43h15.4C57,43,63.1,32.4,63.1,25.6h1.5v19.2H0v-1.5c7.2,0,16-0.1,16-6V7.6c0-6-8.8-6-16-6V0.1h41.2v1.5c-7.2,0-16,0.1-16,6V43z"
            ></path>
            <path
              class="logo-text-lear-e path"
              d="M112.6,43c16.5,0,22.6-10.6,22.6-17.4h1.5v19.2H72.1v-1.5c7.2,0,16-0.1,16-6V7.5c0-6-8.8-6-16-6V0h64.6v19.3h-1.5c0-6.8-6.1-17.4-22.6-17.4H97.2v19.6c13.2,0,17.6-4.7,17.6-10.7h1.5V34h-1.5c0-6-4.4-10.7-17.6-10.7V43H112.6z"
            ></path>
            <path
              class="logo-text-lear-a path"
              d="M179.7,0.1h2.3l19.5,35.8c3.8,6.9,10.7,7.5,18.3,7.5v1.5h-40.2v-1.5c6.2,0,13.1-0.6,13.1-4c0-1.5-0.8-3-2.5-6h-25.7l-0.6,1c-0.8,1.5-1.2,2.9-1.2,4.1c0,3.9,3,4.9,11.9,4.9v1.5h-31.9v-1.5c7.1,0,14.7-1,18.4-8.1L179.7,0.1z M165.6,31.5h23.8L177.2,8.7L165.6,31.5z"
            ></path>
            <path
              class="logo-text-lear-r path"
              d="M259.1,23.3c14,0,15.5,17.6,27.3,17.6c8.1,0,11.4-9,12.1-15.2h1.4c-0.7,11.2-7.7,19.5-19.5,19.5c-10.5,0-15.1-5.8-20.3-14.9c-4-6.9-5.4-7.1-20.1-7.1v14.1c0,6,8.8,6,16,6v1.5H215v-1.5c7.2,0,16-0.1,16-6V7.6c0-6-8.8-6-16-6V0h40.5c15.6,0,31.3,3.3,31.3,11.5C286.8,23.1,259.1,23.3,259.1,23.3z M240.1,21.5h15.5c15.5,0,19.2-6.2,19.2-10c0-3.3-3.6-9.5-19.3-9.5h-15.4V21.5z"
            ></path>
          </g>

          <g class="logo-text-investment">
            <path
              class="logo-text-investment-i path"
              d="M65.3,72.2h2.1v11.6h-2.1V72.2z"
            ></path>
            <path
              class="logo-text-investment-n path"
              d="M77,72.2h1.9l6.3,8.1v-8.1h2v11.6h-1.7L79,75.6v8.3h-2V72.2z"
            ></path>
            <path
              class="logo-text-investment-v path"
              d="M95.7,72.2H98l3.6,9l3.5-9h2.2L102.4,84h-1.8L95.7,72.2z"
            ></path>
            <path
              class="logo-text-investment-e path"
              d="M115.7,72.2h8.7v1.8h-6.7v3h5.9v1.8h-5.9V82h6.7v1.8h-8.8V72.2z"
            ></path>
            <path
              class="logo-text-investment-s path"
              d="M132.6,82.2l1.2-1.5c1.1,1,2.3,1.5,3.7,1.5c1.3,0,2.1-0.6,2.1-1.5v0c0-0.8-0.5-1.3-2.7-1.8c-2.5-0.6-3.9-1.3-3.9-3.5v0c0-2,1.7-3.4,4-3.4c1.7,0,3.1,0.5,4.3,1.5l-1.1,1.5c-1.1-0.8-2.1-1.2-3.2-1.2c-1.2,0-1.9,0.6-1.9,1.4v0c0,0.9,0.5,1.3,2.8,1.8c2.5,0.6,3.8,1.5,3.8,3.4v0c0,2.2-1.7,3.5-4.2,3.5C135.7,84,134,83.4,132.6,82.2z"
            ></path>
            <path
              class="logo-text-investment-t path"
              d="M153.2,74.1h-3.7v-1.9h9.6v1.9h-3.7v9.8h-2.1V74.1z"
            ></path>
            <path
              class="logo-text-investment-m path"
              d="M167.6,72.2h2.2l3.6,5.5l3.6-5.5h2.2v11.6h-2.1v-8.4l-3.7,5.5h-0.1l-3.7-5.5v8.3h-2V72.2z"
            ></path>
            <path
              class="logo-text-investment-e2 path"
              d="M188.7,72.2h8.7v1.8h-6.7v3h5.9v1.8h-5.9V82h6.7v1.8h-8.8V72.2z"
            ></path>
            <path
              class="logo-text-investment-n2 path"
              d="M206.3,72.2h1.9l6.3,8.1v-8.1h2v11.6h-1.7l-6.5-8.3v8.3h-2V72.2z"
            ></path>
            <path
              class="logo-text-investment-t2 path"
              d="M228.9,74.1h-3.7v-1.9h9.6v1.9H231v9.8h-2.1V74.1z"
            ></path>
          </g>

          <g class="logo-text-management">
            <path
              class="logo-text-management-m path"
              d="M58.1,96.9h2.2l3.6,5.5l3.6-5.5h2.2v11.6h-2.1v-8.4l-3.7,5.5h-0.1l-3.7-5.5v8.3h-2V96.9z"
            ></path>
            <path
              class="logo-text-management-a path"
              d="M83.3,96.8h1.9l5.2,11.7h-2.2l-1.2-2.8h-5.6l-1.2,2.8h-2.1L83.3,96.8z M86.2,103.9l-2-4.7l-2,4.7H86.2z"
            ></path>
            <path
              class="logo-text-management-n path"
              d="M98.8,96.9h1.9l6.3,8.1v-8.1h2v11.6h-1.7l-6.5-8.3v8.3h-2V96.9z"
            ></path>
            <path
              class="logo-text-management-a2 path"
              d="M122.7,96.8h1.9l5.2,11.7h-2.2l-1.2-2.8h-5.6l-1.2,2.8h-2.1L122.7,96.8z M125.7,103.9l-2-4.7l-2,4.7H125.7z"
            ></path>
            <path
              class="logo-text-management-g path"
              d="M137,102.7L137,102.7c0-3.3,2.5-6.1,6.1-6.1c2.1,0,3.3,0.6,4.5,1.6l-1.3,1.5c-0.9-0.8-1.8-1.2-3.3-1.2c-2.2,0-3.8,1.9-3.8,4.1v0c0,2.4,1.6,4.2,4,4.2c1.1,0,2.1-0.3,2.8-0.9v-2.2h-3V102h5v4.9c-1.2,1-2.8,1.8-4.9,1.8C139.4,108.7,137,106.1,137,102.7z"
            ></path>
            <path
              class="logo-text-management-e path"
              d="M157.1,96.9h8.7v1.8h-6.7v3h5.9v1.8h-5.9v3.1h6.7v1.8h-8.8V96.9z"
            ></path>
            <path
              class="logo-text-management-m2 path"
              d="M174.8,96.9h2.2l3.6,5.5l3.6-5.5h2.2v11.6h-2.1v-8.4l-3.7,5.5h-0.1l-3.7-5.5v8.3h-2V96.9z"
            ></path>
            <path
              class="logo-text-management-e2 path"
              d="M195.8,96.9h8.7v1.8h-6.7v3h5.9v1.8h-5.9v3.1h6.7v1.8h-8.8V96.9z"
            ></path>
            <path
              class="logo-text-management-n2 path"
              d="M213.5,96.9h1.9l6.3,8.1v-8.1h2v11.6H222l-6.5-8.3v8.3h-2V96.9z"
            ></path>
            <path
              class="logo-text-management-t path"
              d="M236.1,98.8h-3.7v-1.9h9.6v1.9h-3.7v9.8h-2.1V98.8z"
            ></path>
          </g>

          <g class="logo-text-rule">
            <path
              class="path"
              d="M149.3,136c0-6-8.8-6-16-6v-1.5h33.3v1.5c-7.2,0-16,0.1-16,6"
            ></path>
          </g>
        </svg>
      </motion.div>
      <motion.div
        className="mt-40 opacity-0 font-mono"
        animate={presnetationVisible ? { opacity: 100 } : undefined}
        transition={presnetationVisible ? { ease: "easeOut", duration: 3 } : undefined}
      >
        <h3 className="text-center text-white text-3xl mt-20 font-normal uppercase">
          Portfolio Analysis
        </h3>
        <h4 className="text-center text-white text-2xl font-light mt-6">
          {prettyDate}
        </h4>
      </motion.div>
    </div>
  );
};

export default LearText;
