'use client'; // Mark it as a Client Component

import { useEffect } from 'react';

const RedirectPage = () => {
  useEffect(() => {
    const userAgent = navigator.userAgent;
    const appStoreLink = 'https://apps.apple.com/pk/app/real-racing-3/id556164350'; // Replace with your App Store link
    const playStoreLink = 'https://play.google.com/store/apps/details?id=com.king.candycrushsaga'; // Replace with your Play Store link

    if (/iPhone|iPad|iPod/.test(userAgent)) {
      window.location.href = appStoreLink; // Redirect to App Store
    } else if (/Android/.test(userAgent)) {
      window.location.href = playStoreLink; // Redirect to Play Store
    } else {
      // Optional: Handle unsupported devices
      window.location.href = playStoreLink; // Fallback or optional
    }
  }, []);

  return null; // No UI needed
};

export default RedirectPage;