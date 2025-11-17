import React from 'react';
import { motion } from 'framer-motion';

interface ChangelogEntry {
  version: string;
  date: string;
  changes: {
    type: 'feature' | 'improvement' | 'fix';
    description: string;
  }[];
}

const changelog: ChangelogEntry[] = [
  {
    version: '1.1.0',
    date: '2025-11-17',
    changes: [
      {
        type: 'feature',
        description: 'Added configuration file support - Create style-convert.config.js to customize paths, file extensions, and naming conventions'
      },
      {
        type: 'feature',
        description: 'Support for .jsx and .js files - No longer limited to TypeScript! Now works with JavaScript files too'
      },
      {
        type: 'improvement',
        description: 'Configurable file extensions - Choose which file types to process'
      }
    ]
  },
  {
    version: '1.0.3',
    date: '2025-11-17',
    changes: [
      {
        type: 'improvement',
        description: 'Removed unnecessary demo dependencies from the CLI package'
      },
      {
        type: 'improvement',
        description: 'Reduced package size and installation time'
      }
    ]
  },
  {
    version: '1.0.0',
    date: '2025-11-17',
    changes: [
      {
        type: 'feature',
        description: 'Initial release of style-converter CLI'
      },
      {
        type: 'feature',
        description: 'Convert Tailwind and Bootstrap classes to CSS Modules'
      },
      {
        type: 'feature',
        description: 'Automatic TSX file updates with --replace flag'
      },
      {
        type: 'feature',
        description: 'Generate detailed conversion reports'
      }
    ]
  }
];

export const Changelog: React.FC = () => {
  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'feature': return '✨';
      case 'improvement': return '⚡';
      case 'fix': return '🐛';
      default: return '📦';
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const entryVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  const changeVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0
    }
  };

  return (
    <motion.div 
      style={{ maxWidth: '56rem', margin: '0 auto', padding: '1.5rem' }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.h2 
        style={{ fontSize: '1.875rem', fontWeight: 'bold', marginBottom: '2rem', color: 'hsl(var(--foreground))' }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Changelog
      </motion.h2>
      <motion.div 
        style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
        variants={containerVariants}
      >
        {changelog.map((entry, entryIdx) => (
          <motion.div 
            key={entry.version} 
            style={{ borderLeft: '4px solid hsl(var(--primary))', paddingLeft: '1.5rem', paddingBottom: '1.5rem' }}
            variants={entryVariants}
            whileHover={{ x: 10, borderLeftWidth: '6px' }}
            transition={{ duration: 0.2 }}
          >
            <motion.div 
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', flexWrap: 'wrap' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: entryIdx * 0.1 }}
            >
              <motion.span 
                style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'hsl(var(--foreground))' }}
                whileHover={{ scale: 1.1 }}
              >
                v{entry.version}
              </motion.span>
              <span style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>{entry.date}</span>
              {entry.version === changelog[0].version && (
                <motion.span 
                  style={{ padding: '0.25rem 0.5rem', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', fontSize: '0.75rem', borderRadius: '9999px', fontWeight: '600' }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                >
                  Latest
                </motion.span>
              )}
            </motion.div>
            <motion.ul 
              style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}
              variants={containerVariants}
            >
              {entry.changes.map((change, idx) => (
                <motion.li 
                  key={idx} 
                  style={{ display: 'flex', alignItems: 'start', gap: '0.75rem' }}
                  variants={changeVariants}
                  whileHover={{ x: 5 }}
                >
                  <motion.span 
                    style={{ 
                      padding: '0.25rem 0.5rem', 
                      borderRadius: '0.25rem', 
                      fontSize: '0.75rem', 
                      fontWeight: '600',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      whiteSpace: 'nowrap',
                      ...(change.type === 'feature' ? {
                        background: 'hsl(142 76% 25%)',
                        color: 'hsl(142 76% 90%)',
                        border: '1px solid hsl(142 76% 30%)'
                      } : change.type === 'improvement' ? {
                        background: 'hsl(200 95% 25%)',
                        color: 'hsl(200 95% 90%)',
                        border: '1px solid hsl(200 95% 30%)'
                      } : {
                        background: 'hsl(0 84% 25%)',
                        color: 'hsl(0 84% 95%)',
                        border: '1px solid hsl(0 84% 30%)'
                      })
                    }}
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{getTypeIcon(change.type)}</span>
                    <span style={{ textTransform: 'capitalize' }}>{change.type}</span>
                  </motion.span>
                  <span style={{ color: 'hsl(var(--foreground))', flex: 1, lineHeight: '1.6' }}>{change.description}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};
