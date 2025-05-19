import ReactPixel from 'react-facebook-pixel';

const pixelId = '8251171835007509';

export const initFacebookPixel = () => {
  ReactPixel.init(pixelId);
  ReactPixel.pageView();
};

export const trackViewContent = () => {
  ReactPixel.track('ViewContent');
};

export const trackLead = () => {
  ReactPixel.track('Lead');
};
