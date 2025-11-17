import UserDashboardBefore from '../features/userDashboard_before/UserDashboard';
import UserDashboardAfter from '../features/userDashboard_after/UserDashboard';

export function PreviewTab() {
  return (
    <div className="row g-3">
      <div className="col-lg-6">
        <div className="card h-100">
          <div className="card-header bg-warning">
            <h2 className="mb-0">BEFORE: Original Tailwind Classes</h2>
          </div>
          <div className="card-body">
            <UserDashboardBefore />
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="card h-100">
          <div className="card-header bg-success text-white">
            <h2 className="mb-0">AFTER: CSS Modules with SCSS</h2>
          </div>
          <div className="card-body">
            <UserDashboardAfter />
          </div>
        </div>
      </div>
    </div>
  );
}
