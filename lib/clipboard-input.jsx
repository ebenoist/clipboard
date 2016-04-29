const React = require('react');
const MobileDetect = require('mobile-detect');

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

class ClipboardInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { copied: false, selected: false };
  }

  selectText(event) {
    event.preventDefault();

    const input = this.refs.code;
    input.focus();
    input.setSelectionRange(0, input.value.length);
    this.setState({ selected: true });
  }

  copyText(event) {
    event.preventDefault();
    this.selectText(event);

    if (!isMobile) {
      document.execCommand('copy');
      this.setState({ copied: true });
    }
  }

  copiedMessage() {
    if (this.state.copied) {
      return <h1>Copied!</h1>;
    }

    if (this.state.selected) {
      return <h1>Selected!</h1>;
    }
  }

  buttonText() {
    if (isMobile) {
      return 'Select';
    } else {
      return <i className="fa fa-clipboard" />;
    }
  }

  render() {
    return (
      <form>
        <label for="code">Your Code</label>
        <div className="input-group">
          <input ref="code" type="text" className="form-control" value="your code" readOnly={true} />
          <span className="input-group-addon" onClick={this.copyText.bind(this)} id="basic-addon2">
            {this.buttonText()}
          </span>
        </div>

        {this.copiedMessage()}
      </form>
    );
  }
}

module.exports = ClipboardInput;
