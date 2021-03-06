import React, {FC, ReactChild, ReactNode} from 'react'
import { motion, MotionProps } from "framer-motion";
import variants from './variants'
export {variants}
export type AnimationType = "zoom" | "zoomOver" | "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight"

interface Props extends MotionProps{
   children: ReactChild | ReactNode;
   type?: AnimationType;
}

export const AnimateBox: FC<Props> = ({children, type, ...props}) => {
   type = type || "zoom"
   let _variants = variants.zoomOver
   if(variants.hasOwnProperty(type)){
      _variants = (variants as any)[type]
   }

   return (
      <motion.div
         initial="initial"
         animate="animate"
         exit="exit"
         variants={_variants}
         {...props}
      >
         {children}
      </motion.div>
   )
}
