// @flow
/* eslint react/require-default-props: 0 */
import React from 'react';
import './styles.scss';

import type { ElementRef } from 'react';

type Props = {
  onChange: number => void,
  error?: boolean,
  errorMessage?: string,
};

type State = {
  fileName: string,
};

class FileUpload extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fileName: '',
    };
  }
  fileInput: ElementRef<*>;

  handleChange: void => void;
  handleChange() {
    const { onChange } = this.props;
    const file = this.fileInput.current.files[0];
    this.setState({ fileName: file.name });
    onChange(file);
  }

  render() {
    const { fileName } = this.state;
    const { error, errorMessage } = this.props;
    return (
      <div className="form-field">
        <label htmlFor="file-upload">
          <p className="label">Upload Resume (docx or pdf)</p>
          <div className="file-upload">
            <button type="button" className="btn">
              Choose file
            </button>
            <input
              type="file"
              ref={this.fileInput}
              onChange={this.handleChange}
              id="file-upload"
              accept=".pdf,.docx"
            />
            <p>{fileName}</p>
          </div>
        </label>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default FileUpload;
