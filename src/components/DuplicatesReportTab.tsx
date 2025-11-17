import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import duplicatesReport from '../../PROPERTY_DUPLICATES_REPORT.md?raw';

export function DuplicatesReportTab() {
  return (
    <div className="card">
      <div className="card-header bg-info text-white">
        <h2 className="mb-0">🔍 Duplicate CSS Properties Report</h2>
      </div>
      <div className="card-body markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{duplicatesReport}</ReactMarkdown>
      </div>
    </div>
  );
}
