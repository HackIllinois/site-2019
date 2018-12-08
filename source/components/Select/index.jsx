// @Flow
/* eslint no-lonely-if: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

// disabled due to prettierrc:
/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */

import * as React from 'react';

import dropDownArrow from 'assets/drop_down_arrow.svg';
import './styles.scss';

type Props = {
  label: string,
  placeholder: string,
  items: Array<{ text: string }>,
  onSelect: string => void,
};

// static count var to give each instance a unique id
let id = 0;

class Select extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      inputValue: '',
      matchIndex: 0,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);

    this.inputRef = React.createRef();
    this.id = `select-menu-${id}`;
    id += 1;
  }

  toggleMenu() {
    const { isOpen } = this.state;
    if (!isOpen) {
      this.inputRef.current.select();
      const { inputValue } = this.state;
      this.setState({ isOpen: true, inputValue });
    } else {
      this.setState({ isOpen: false });
    }
  }

  selectItem(newIndex) {
    const { items, onSelect } = this.props;
    this.setState({
      matchIndex: newIndex,
      inputValue: items[newIndex].text,
      isOpen: false,
    });
    onSelect(newIndex);
  }

  handleChange(e) {
    const newValue = e.target.value;
    if (newValue === '') {
      this.setState({ inputValue: newValue, matchIndex: 0 });
      document.getElementById(this.id).scrollTop = 0;
    } else {
      let { matchIndex } = this.state;
      const { inputValue } = this.state;
      const { items } = this.props;

      // If change is a backspace, set matchIndex back to 0
      if (inputValue.length > newValue.length) {
        matchIndex = 0;
      }
      // Find index of closest item to search value
      while (
        matchIndex < items.length &&
        items[matchIndex].text.toLowerCase() < newValue.toLowerCase()
      ) {
        matchIndex += 1;
      }

      document.getElementById(this.id).scrollTop = 37 * matchIndex;

      this.setState({ inputValue: newValue, matchIndex });
    }
  }

  handleKeyDown(e) {
    const { isOpen } = this.state;
    if (isOpen) {
      if (e.key === 'ArrowUp') {
        let { matchIndex } = this.state;
        const { items } = this.props;
        if (matchIndex !== 0) {
          matchIndex -= 1;
          if (document.getElementById(this.id).scrollTop >= 37 * (matchIndex + 1)) {
            document.getElementById(this.id).scrollTop -= 37;
          }
          this.setState({ matchIndex, inputValue: items[matchIndex].text });
        }
      } else if (e.key === 'ArrowDown') {
        let { matchIndex } = this.state;
        const { items } = this.props;
        if (matchIndex !== items.length - 1) {
          matchIndex += 1;
          if (document.getElementById(this.id).scrollTop <= 37 * (matchIndex - 5)) {
            document.getElementById(this.id).scrollTop += 37;
          }
          this.setState({ matchIndex, inputValue: items[matchIndex].text });
        }
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        const { items, onSelect } = this.props;
        const { matchIndex } = this.state;
        this.setState({
          inputValue: items[matchIndex].text,
          isOpen: false,
        });
        onSelect(matchIndex);
      }
    } else {
      if (e.key === 'Enter') {
        e.target.select();
        this.setState({ isOpen: true });
      }
    }
  }

  handleFocus(e) {
    console.log('hi');
    e.preventDefault();
    this.toggleMenu();
    this.inputRef.current.focus();
  }

  render() {
    const { items, label, placeholder } = this.props;
    const { isOpen, inputValue, matchIndex } = this.state;

    const menuHeight = items.length * 37 < 185 ? items.length * 37 : 185;
    const openedStyling = {
      height: menuHeight,
    };
    const closedStyling = {
      height: 0,
      visibility: 'hidden',
    };

    return (
      <div className="select">
        <label className="label" htmlFor={`${this.id}-input`}>
          {label}
          <div className="input-cont" onClick={this.handleFocus}>
            <input
              className="input"
              value={inputValue}
              onChange={this.handleChange}
              onKeyDown={this.handleKeyDown}
              ref={this.inputRef}
              placeholder={placeholder}
              id={`${this.id}-input`}
            />
            <img
              className={isOpen ? 'drop-down-arrow rotated' : 'drop-down-arrow'}
              src={dropDownArrow}
              alt="Drop down arrow"
            />
          </div>
        </label>
        <div className="menu" style={isOpen ? openedStyling : closedStyling} id={this.id}>
          {items.map((item, index) => (
            <div
              key={item.text}
              onClick={() => this.selectItem(index)}
              className={index === matchIndex ? 'menu-el selected' : 'menu-el'}
            >
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Select;
