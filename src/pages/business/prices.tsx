import './prices.css';

import React, { useEffect } from 'react';

function PricingPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/pricing-table.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="business_prices_page_contianer">
      {/* Live */}
      <div style={{ backgroundColor: '#3f51b5' }}>
        <h2 style={{ color: '#fff', marginTop: '2rem', textAlign: 'center' }}>欧元区</h2>
        {/* @ts-ignore: Live-EUR */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1NhbvGDfpKDtUNgncj7TTmDN"
          publishable-key="pk_live_51HqdzoDfpKDtUNgnMQxyO3NPLAxBb1IS53DE9YXgmV9w5rEwsAOBaohqyL7bNTVjZQ8N4Ry0R9XXDIW9q0aMZFk100OtkFDHRx"
        />
      </div>

      {/* Test */}
      <div style={{ display: 'none', backgroundColor: '#3f51b5' }}>
        <h2 style={{ color: '#fff', marginTop: '2rem', textAlign: 'center' }}>欧元区(测试)</h2>
        {/* @ts-ignore: Test-EUR */}
        <stripe-pricing-table
          pricing-table-id="prctbl_1NhXXMDfpKDtUNgnT5a7WDKY"
          publishable-key="pk_test_51HqdzoDfpKDtUNgns7gfUm2rLbJAqgKVTiJVBpkX2ViLKkmLiV11eXasYcJjUsj6ARpDhju4yAFMiWAEl3ynE2T100S1mBLctz"
        />
      </div>
    </div>
  );
}

export default PricingPage;
