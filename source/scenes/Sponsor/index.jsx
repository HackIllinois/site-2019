import ReactGA from 'react-ga';
ReactGA.initialize('UA-46010489-4'); //imports and initializes react packages for GA

const Sponsor = () => {
  window.location = '/assets/sponsorship-2019.pdf';
  return null;
};

function initializeReactGA() {
  ReactGA.initialize('UA-46010489-4'); //initializes Google Analytics to correct code
  ReactGA.pageview('Sponsor'); //pageview data from goes under 'Sponsor' on GA
}

export default Sponsor;
