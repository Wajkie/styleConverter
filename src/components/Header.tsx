import { motion } from 'framer-motion';
import { headerLinks, npmIcon, githubIcon } from '../data/links';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: 'backOut' }
  }
};

export function Header() {
  return (
    <motion.header 
      className="row mb-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="col">
        <div className="text-center">
          <motion.h1 
            className="display-4 mb-2"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            🎨 Tailwind to CSS Modules Converter
          </motion.h1>
          <motion.p 
            className="lead text-muted"
            variants={itemVariants}
          >
            Automated conversion tool with SCSS mixins and semantic selectors
          </motion.p>
          <motion.div 
            className="d-flex justify-content-center gap-3 mb-3 align-items-center flex-wrap"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {[
              { text: '1.6s conversion time', bg: 'success' },
              { text: '70% success rate', bg: 'info' },
              { text: '31 unknown classes', bg: 'warning' }
            ].map((badge, idx) => (
              <span 
                key={idx}
                className={`badge bg-${badge.bg}`}
              >
                {badge.text}
              </span>
            ))}
          </motion.div>
          <motion.div 
            className="d-flex justify-content-center gap-3 align-items-center flex-wrap"
            variants={containerVariants}
          >
            {headerLinks.map((link, index) => (
              <motion.div 
                key={link.href} 
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index > 0 && <span style={{ color: '#6c757d' }}>•</span>}
                <a 
                  href={link.href}
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ 
                    textDecoration: 'none', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.5rem' 
                  }}
                >
                  <motion.span
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {link.icon === 'npm' ? npmIcon : githubIcon}
                  </motion.span>
                  <span style={{ color: '#0d6efd' }}>{link.label}</span>
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
