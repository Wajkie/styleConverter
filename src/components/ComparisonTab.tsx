import { beforeCode, afterCode } from '../data/codeExamples';

export function ComparisonTab() {
  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h2 className="mb-0">📝 Before: Tailwind TSX</h2>
          </div>
          <div className="card-body">
            <pre className="code-block"><code>{beforeCode}</code></pre>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h2 className="mb-0">✨ After: CSS Modules SCSS</h2>
          </div>
          <div className="card-body">
            <pre className="code-block"><code>{afterCode}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}
