import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

const logPageChange = (pathname, search = '') => {
  const page = pathname + search;
  const { location } = window;
  ReactGA.set({
    page,
    location: `${location.origin}${page}`,
  });
  ReactGA.pageview(page);
};

class GoogleAnalytics extends Component {
  componentDidMount() {
    const { location } = this.props;
    const { pathname, search } = location;
    logPageChange(pathname, search);
  }

  componentDidUpdate({ location: prevLocation }) {
    const {
      location: { pathname, search },
    } = this.props;
    const isDifferentPathname = pathname !== prevLocation.pathname;
    const isDifferentSearch = search !== prevLocation.search;

    if (isDifferentPathname || isDifferentSearch) {
      logPageChange(pathname, search);
    }
  }

  render() {
    return null;
  }
}

GoogleAnalytics.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
  }).isRequired,
};

const RouteTracker = () => <Route component={GoogleAnalytics} />;

export { GoogleAnalytics, RouteTracker };
