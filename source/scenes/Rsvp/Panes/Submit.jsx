// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import loader from 'assets/loader.svg';
import rsvp from 'services/api/rsvp';
import { invalidateData } from 'services/rsvp/actions';
import FormContext from 'components/FormContext';

import './SubmitStyles.scss';

type Props = {
  dataDirty: boolean,
  reset: () => void,
};

type State = {
  fetching: boolean,
  error: boolean,
  success: boolean,
  redirect: boolean,
};

class StudentInfo extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      fetching: false,
      error: false,
      success: false,
      redirect: false,
    };

    this.submit = this.submit.bind(this);
    this.redirect = null;
  }

  componentWillUnmount() {
    if (this.redirect !== null) {
      clearTimeout(this.redirect);
      this.redirect = null;
    }
  }

  redirect: ?TimeoutID;

  submit: any => void;
  submit(data: any) {
    this.setState({
      fetching: true,
    });

    const { dataDirty, reset } = this.props;
    let updateData = () => rsvp(data);
    if (!dataDirty) {
      updateData = () => Promise.resolve();
    }

    updateData()
      .then(() => {
        this.setState({ fetching: false, error: false, success: true });
        this.redirect = setTimeout(() => {
          if (dataDirty) {
            setTimeout(reset, 500);
          }
          this.setState({ redirect: true });
        }, 3500);
      })
      .catch(() => {
        this.setState({ fetching: false, error: true });
      });
  }

  render() {
    const { redirect, fetching, error, success } = this.state;
    let body = (
      <FormContext.Consumer>
        {({ data }) => (
          <div className="scrolled-form">
            <button
              className="button-blue submit-button"
              onClick={() => this.submit(data)}
              type="button"
            >
              Submit
            </button>
          </div>
        )}
      </FormContext.Consumer>
    );

    if (redirect) {
      body = <Redirect to="/" />;
    } else if (fetching) {
      body = <img src={loader} alt="Loading" />;
    } else if (error) {
      body = (
        <div>
          <p>Error during submission, try again later</p>
        </div>
      );
    } else if (success) {
      body = (
        <div>
          <p>Registration Successful!</p>
        </div>
      );
    }

    return <div className="submission-page">{body}</div>;
  }
}

const mapStateToProps = state => ({
  dataDirty: state.rsvp.dataDirty,
});

const mapDispatchToProps = dispatch => ({
  reset: () => dispatch(invalidateData()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StudentInfo);
