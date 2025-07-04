window.klaroConfig = {
  acceptAll: true,
  privacyPolicy: '/privacy',
  translations: {
    en: {
      consentModal: {
        title: 'Cookies en este sitio',
        description: 'Usamos cookies para mejorar tu experiencia.',
      },
      purposes: {
        analytics: 'analytics',
      },
    },
  },
  services: [
    {
      name: 'google-analytics',
      title: 'Google Analytics',
      purposes: ['analytics'],
      cookies: [/^_ga/, /^_gid/],
      default: false,
      required: false,
      onAccept: () => {
        document.querySelectorAll('script[type="text/plain"][data-cookiecategory="analytics"]').forEach(el => {
          const script = document.createElement('script');
          script.innerHTML = el.innerHTML;
          el.parentNode.replaceChild(script, el);
        });
      },
    }
  ]
};
