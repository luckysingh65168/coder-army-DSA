import { motion } from 'framer-motion';

const ProgressBar = ({ value, index, compareIndex, sorted }) => {
  return (
    <motion.div
      className={`h-16 w-full rounded-xl ${sorted ? 'bg-green-400' : index === compareIndex ? 'bg-red-400' : 'bg-primary'}`}
      initial={{ width: '0%' }}
      animate={{ width: `${value}%` }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white">{value}</div>
    </motion.div>
  );
};

export default ProgressBar;
