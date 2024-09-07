'use client'
import { motion } from "framer-motion"
export default function SpringButton() {
  return (
    <motion.button
    className="mx-auto bg-cyan-500 text-white py-2  px-4 rounded"
    style={{ minWidth: "130px" }} 
    whileHover={{ width: "180px" }} 
    transition={{ type: "spring", stiffness: 300 }}
  >
    Get started
  </motion.button>
  )
}
