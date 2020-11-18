import * as React from "react";
import { motion } from "framer-motion";
const Bar = ({theme}) => (
  <motion.div
    className={` ${theme ? "" : "container_light"} container`}
    initial={{ scale: 2, }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      damping: 70
    }}
    
  >
       
    </motion.div>
);


export default Bar
