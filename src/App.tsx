import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { Changelog } from './components/Changelog';
import { PreviewTab } from './components/PreviewTab';
import { ComparisonTab } from './components/ComparisonTab';
import { TestFeaturesTab } from './components/TestFeaturesTab';
import { ConversionReportTab } from './components/ConversionReportTab';
import { DuplicatesReportTab } from './components/DuplicatesReportTab';
import './App.css';

type TabType = 'preview' | 'comparison' | 'testFeatures' | 'conversion' | 'duplicates' | 'changelog';

function App() {
  const [activeTab, setActiveTab] = useState<TabType>('comparison');

  return (
    <div className="app-container">
      <div className="container-fluid py-4">
        <Header />

        <main>
          <ul className="nav-tabs">
            {[
              { id: 'preview', icon: '👁️', label: 'Live Component Preview' },
              { id: 'comparison', icon: '📊', label: 'Before/After Code' },
              { id: 'testFeatures', icon: '🧪', label: 'Test Features' },
              { id: 'conversion', icon: '📋', label: 'Conversion Report' },
              { id: 'duplicates', icon: '🔍', label: 'Duplicate Properties' },
              { id: 'changelog', icon: '📝', label: 'Changelog' }
            ].map((tab) => (
              <li key={tab.id}>
                <button 
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id as TabType)}
                >
                  {tab.icon} {tab.label}
                </button>
              </li>
            ))}
          </ul>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ width: '100%' }}
            >
              {activeTab === 'preview' && <PreviewTab />}
              {activeTab === 'comparison' && <ComparisonTab />}
              {activeTab === 'testFeatures' && <TestFeaturesTab />}
              {activeTab === 'conversion' && <ConversionReportTab />}
              {activeTab === 'duplicates' && <DuplicatesReportTab />}
              {activeTab === 'changelog' && <Changelog />}
            </motion.div>
          </AnimatePresence>
        </main>

        <footer className="text-center mt-5 pb-4">
          <p className="text-muted">
            © {new Date().getFullYear()} Fredrik Wiking
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
