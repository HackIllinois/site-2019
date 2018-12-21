import React from 'react';
import './styles.scss';

type Props = {
  handleUpload: number => void,
};

type State = {
  fileName: string,
};

class FileUpload extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.fileInput = React.createRef();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      fileName: '',
    };
  }

  handleChange() {
    const { handleUpload } = this.props;
    const file = this.fileInput.current.files[0];
    this.setState({ fileName: file.name });
    handleUpload(file);
  }

  render() {
    const { fileName } = this.state;
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
      </div>
    );
  }
}

export default FileUpload;
