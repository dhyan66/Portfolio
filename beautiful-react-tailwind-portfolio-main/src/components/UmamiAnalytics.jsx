import { useEffect } from 'react';

const UmamiAnalytics = () => {
  useEffect(() => {
    // Only load Umami if both website ID and script URL are provided
    const websiteId = import.meta.env.VITE_UMAMI_WEBSITE_ID;
    const scriptUrl = import.meta.env.VITE_UMAMI_SCRIPT_URL;

    if (!websiteId || !scriptUrl) {
      console.warn('Umami analytics not configured. Please set VITE_UMAMI_WEBSITE_ID and VITE_UMAMI_SCRIPT_URL in your .env file');
      return;
    }

    // Check if script already exists
    if (document.querySelector(`script[data-website-id="${websiteId}"]`)) {
      return;
    }

    // Create and inject the Umami script
    const script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.setAttribute('data-website-id', websiteId);
    script.src = scriptUrl;

    document.head.appendChild(script);

    // Cleanup function
    return () => {
      const existingScript = document.querySelector(`script[data-website-id="${websiteId}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default UmamiAnalytics;
