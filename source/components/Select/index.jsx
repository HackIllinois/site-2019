// @flow
/* eslint no-lonely-if: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/require-default-props: 0 */

// disabled due to prettierrc:
/* eslint operator-linebreak: 0 */
/* eslint object-curly-newline: 0 */

import * as React from 'react';

import dropDownArrow from 'assets/drop_down_arrow.svg';
import './styles.scss';

import type { ElementRef } from 'react';

type Props = {
  label: string,
  placeholder: string,
  items: Array<{ text: string }>,
  onSelect: string => void,
  disableInput?: boolean,
};

type State = {
  isOpen: boolean,
  inputValue: string,
  matchIndex: number,
  valueSelected: boolean,
};

// static count var to give each instance a unique id
let id = 0;

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isOpen: false,
      inputValue: '',
      matchIndex: 0,
      valueSelected: false,
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

  id: string;
  inputRef: ElementRef<*>;

  toggleMenu: () => void;
  toggleMenu() {
    const { isOpen } = this.state;
    const { disableInput } = this.props;
    if (!isOpen) {
      if (!disableInput) {
        this.inputRef.current.select();
      }
      const { inputValue } = this.state;
      this.setState({ isOpen: true, inputValue });
    } else {
      this.setState({ isOpen: false });
    }
  }

  selectItem: number => void;
  selectItem(newIndex: number) {
    const { items, onSelect } = this.props;
    this.setState({
      matchIndex: newIndex,
      inputValue: items[newIndex].text,
      isOpen: false,
      valueSelected: true,
    });
    onSelect(items[newIndex].text);
  }

  handleChange: (SyntheticEvent<HTMLInputElement>) => void;
  handleChange(e: SyntheticEvent<HTMLInputElement>) {
    const { disableInput } = this.props;
    if (disableInput) {
      return;
    }

    const newValue = e.currentTarget.value;
    if (newValue === '') {
      this.setState({ inputValue: newValue, matchIndex: 0, valueSelected: false });
      const dropdown = document.getElementById(this.id);
      if (dropdown) {
        dropdown.scrollTop = 0;
      }
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

      const dropdown = document.getElementById(this.id);
      if (dropdown) {
        dropdown.scrollTop = 37 * matchIndex;
      }

      this.setState({ inputValue: newValue, matchIndex });
    }
  }

  handleKeyDown: (SyntheticKeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown(e: SyntheticKeyboardEvent<HTMLInputElement>) {
    const { isOpen } = this.state;
    const { disableInput } = this.props;
    if (isOpen) {
      if (e.key === 'ArrowUp') {
        let { matchIndex } = this.state;
        const { items } = this.props;
        if (matchIndex !== 0) {
          matchIndex -= 1;

          const dropdown = document.getElementById(this.id);
          if (dropdown && dropdown.scrollTop >= 37 * (matchIndex + 1)) {
            dropdown.scrollTop -= 37;
          }
          this.setState({ matchIndex, inputValue: items[matchIndex].text });
        }
      } else if (e.key === 'ArrowDown') {
        let { matchIndex } = this.state;
        const { items } = this.props;
        if (matchIndex !== items.length - 1) {
          matchIndex += 1;

          const dropdown = document.getElementById(this.id);
          if (dropdown && dropdown.scrollTop <= 37 * (matchIndex - 5)) {
            dropdown.scrollTop += 37;
          }
          this.setState({ matchIndex, inputValue: items[matchIndex].text });
        }
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        const { items, onSelect } = this.props;
        const { matchIndex } = this.state;
        this.setState({
          inputValue: items[matchIndex].text,
          isOpen: false,
          valueSelected: true,
        });
        onSelect(items[matchIndex].text);
      }
    } else {
      if (e.key === 'Enter') {
        if (!disableInput) {
          e.currentTarget.select();
        }
        this.setState({ isOpen: true });
      }
    }
  }

  handleFocus: (SyntheticEvent<HTMLDivElement>) => void;
  handleFocus(e: SyntheticEvent<HTMLDivElement>) {
    e.preventDefault();
    this.toggleMenu();
    this.inputRef.current.focus();
  }

  render() {
    const { items, label, placeholder } = this.props;
    const { isOpen, inputValue, matchIndex, valueSelected } = this.state;

    const menuHeight = items.length * 40 < 185 ? items.length * 40 : 185;
    const openedStyling = {
      height: menuHeight,
    };
    const closedStyling = {
      height: 0,
      visibility: 'hidden',
    };

    return (
      <div className="select form-field">
        <label className="label" htmlFor={`${this.id}-input`}>
          <p>{label}</p>
          <div className="input-cont" onClick={this.handleFocus}>
            <input
              className="input"
              style={valueSelected ? { color: 'white' } : null}
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
