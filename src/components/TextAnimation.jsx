import { motion } from 'framer-motion';

const TextAnimation = ({ text }) => {
    const words = text.split(" ");  

    const containerVariants = {
        hidden: { opacity: 1 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.20, 
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                y: { type: "spring", stiffness: 100 },
                opacity: { duration: 0.2 }
            }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="header__introduction"
        >
            {words.map((word, index) => (
                <motion.span key={index} variants={itemVariants} style={{ display: 'inline-block', marginRight: '8px' }}>
                    {word}
                </motion.span>
            ))}
        </motion.div>
    );
};

export default TextAnimation;
