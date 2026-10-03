import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import Toast from './components/Toast';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import BathDivisionPage from './pages/BathDivisionPage';
import HomeTextilePage from './pages/HomeTextilePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Sync browser title with the active page
  useEffect(() => {
    switch (activePage) {
      case 'home':
        document.title = 'Nexa Textile | Bath & Home Textile Solutions';
        break;
      case 'profile':
        document.title = 'Corporate Profile | Nexa Textile';
        break;
      case 'bath-division':
        document.title = 'Bath Division — Towels & Bathrobes | Nexa Textile';
        break;
      case 'home-textile':
        document.title = 'Home Textile — Bed Linen & Throws | Nexa Textile';
        break;
      case 'contact':
        document.title = 'Contact & Export Desk | Nexa Textile';
        break;
      default:
        document.title = 'Nexa Textile | Seamless Thread Connection';
    }
  }, [activePage]);

  const handleOpenProductModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseProductModal = () => {
    setSelectedProduct(null);
  };

  const showToast = (msg) => {
    setToastMessage(msg);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#0F172A] selection:bg-[#0D6E77] selection:text-white">
      {/* Premium Sticky Navigation */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Main Page Content */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage
            setActivePage={setActivePage}
            onOpenProductModal={handleOpenProductModal}
          />
        )}
        {activePage === 'profile' && (
          <ProfilePage setActivePage={setActivePage} />
        )}
        {activePage === 'bath-division' && (
          <BathDivisionPage
            setActivePage={setActivePage}
            onOpenProductModal={handleOpenProductModal}
          />
        )}
        {activePage === 'home-textile' && (
          <HomeTextilePage
            setActivePage={setActivePage}
            onOpenProductModal={handleOpenProductModal}
          />
        )}
        {activePage === 'contact' && (
          <ContactPage onInquirySubmitted={showToast} />
        )}
      </main>

      {/* Corporate Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Interactive Product Specifications Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={handleCloseProductModal}
          onInquirySubmitted={showToast}
        />
      )}

      {/* Global Action Toast */}
      {toastMessage && (
        <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
      )}
    </div>
  );
}
