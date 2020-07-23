import ReactGA from 'react-ga';

const googleAnalytics = () => {
  ReactGA.initialize('UA-173368431-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
}

export default googleAnalytics