import ProductCardBefore from '../features/productCard_before/ProductCard';
import ProductCardAfter from '../features/productCard_test/ProductCard';
import LoginFormBefore from '../features/loginForm_before/LoginForm';
import LoginFormAfter from '../features/loginForm_test/LoginForm';
import NavbarBefore from '../features/navbar_before/Navbar';
import NavbarAfter from '../features/navbar_test/Navbar';
import StatsGridBefore from '../features/statsGrid_before/StatsGrid';
import StatsGridAfter from '../features/statsGrid_test/StatsGrid';
import AlertBannerBefore from '../features/alertBanner_before/AlertBanner';
import AlertBannerAfter from '../features/alertBanner_test/AlertBanner';

export function TestFeaturesTab() {
  return (
    <div className="row g-4">
      <div className="col-12">
        <h2 className="mb-3">🧪 Component Tests</h2>
      </div>
      
      {/* Product Card */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="mb-0">Product Card - Before</h3>
          </div>
          <div className="card-body">
            <ProductCardBefore />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Product Card - After</h3>
          </div>
          <div className="card-body">
            <ProductCardAfter />
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="mb-0">Login Form - Before</h3>
          </div>
          <div className="card-body">
            <LoginFormBefore />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Login Form - After</h3>
          </div>
          <div className="card-body">
            <LoginFormAfter />
          </div>
        </div>
      </div>

      {/* Navbar */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="mb-0">Navbar - Before</h3>
          </div>
          <div className="card-body">
            <NavbarBefore />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Navbar - After</h3>
          </div>
          <div className="card-body">
            <NavbarAfter />
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="mb-0">Stats Grid - Before</h3>
          </div>
          <div className="card-body">
            <StatsGridBefore />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Stats Grid - After</h3>
          </div>
          <div className="card-body">
            <StatsGridAfter />
          </div>
        </div>
      </div>

      {/* Alert Banner */}
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-warning">
            <h3 className="mb-0">Alert Banner - Before</h3>
          </div>
          <div className="card-body">
            <AlertBannerBefore />
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-header bg-success text-white">
            <h3 className="mb-0">Alert Banner - After</h3>
          </div>
          <div className="card-body">
            <AlertBannerAfter />
          </div>
        </div>
      </div>
    </div>
  );
}
