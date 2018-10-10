import React, { Component } from 'react';
import ReactGA from 'react-ga';
import { Route } from 'react-router-dom';

type props = {
  location: {
    pathname: string,
    search: string,
  },
};

const logPageChange = (pathname, search = '') => {
  const page = pathname + search;
  const { location } = window;
  ReactGA.set({
    page,
    location: `${location.origin}${page}`,
  });
  ReactGA.pageview(page);
};

class GoogleAnalytics extends Component<props> {
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

const RouteTracker = () => <Route component={GoogleAnalytics} />;

export { GoogleAnalytics, RouteTracker };
