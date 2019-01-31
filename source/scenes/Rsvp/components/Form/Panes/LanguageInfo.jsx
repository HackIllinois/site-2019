// @flow
import React from 'react';

import Slider from 'components/Slider';

import FormTransition from '../FormTransition';
import FormContext from '../../../FormContext';

import './LanguageInfo.scss';

type Props = {
  visible: boolean,
};

const LanguageInfo = (props: Props) => {
  const { visible } = props;
  return (
    <FormTransition visible={visible} uid="student-info">
      <FormContext.Consumer>
        {({ data, errors, registerField }) => (
          <div className="scrolled-form language-info">
            <div className="instructions">
              <h2>Please rate your experience with each language from 0-10</h2>
              <h3>0 - No Experience, 5 - Some Experience, 10 - Very Comfortable</h3>
            </div>
            <div className="slider-cont">
              <Slider
                label="Python"
                onChange={registerField('python')}
                value={data.python}
                error={errors.python}
                errorMessage="Rate your skill"
              />
              <Slider
                label="Javascript"
                onChange={registerField('javascript')}
                value={data.javascript}
                error={errors.javascript}
                errorMessage="Rate your skill"
              />
              <Slider
                label="Java"
                onChange={registerField('java')}
                value={data.java}
                error={errors.java}
                errorMessage="Rate your skill"
              />
              <Slider
                label="C/C++"
                onChange={registerField('c')}
                value={data.c}
                error={errors.c}
                errorMessage="Rate your skill"
              />
              <Slider
                label="Go"
                onChange={registerField('go')}
                value={data.go}
                error={errors.go}
                errorMessage="Rate your skill"
              />
              <Slider
                label="Ruby"
                onChange={registerField('ruby')}
                value={data.ruby}
                error={errors.ruby}
                errorMessage="Rate your skill"
              />
              <Slider
                label="Rust"
                onChange={registerField('rust')}
                value={data.rust}
                error={errors.rust}
                errorMessage="Rate your skill"
              />
            </div>
          </div>
        )}
      </FormContext.Consumer>
    </FormTransition>
  );
};

export default LanguageInfo;
