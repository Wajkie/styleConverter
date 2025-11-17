import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import conversionReport from '../../CONVERSION_REPORT.md?raw';

export function ConversionReportTab() {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h2 className="mb-0">📋 Conversion Report</h2>
      </div>
      <div className="card-body markdown-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{conversionReport}</ReactMarkdown>
      </div>
    </div>
  );
}
