import { motion } from "framer-motion"

export default function FramerMotion() {
    const boxVariant = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 }
    }
    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2 }}
            >
                <p>Framer Motion</p>
            </motion.div>

            <motion.button
                whileTap={{ scale: 2 }}
                whileHover={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 400, duration: 0.5 }}
            >
                click
            </motion.button>

            <motion.div
                variants={boxVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 2 }}
            >
                <p>varian</p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                <p>Section On View</p>
            </motion.div>

            <motion.div drag dragConstraints={{ left: 0, right: 300 }}>
                Drag aku →
            </motion.div>
        </>
    )
}