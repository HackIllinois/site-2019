// @flow
/* eslint no-lonely-if: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/require-default-props: 0 */
/* eslint react/no-unused-state: 0 */

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
  onSelect: number => void,
  disableInput?: boolean,
  index: number,
  error?: boolean,
  errorMessage?: string,
};

type State = {
  isOpen: boolean,
  inputValue: string,
  valueSelected: boolean,
  setIndex: number,
};

// static count var to give each instance a unique id
let id = 0;

class Select extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const initialValue = props.index === -1 ? '' : props.items[props.index].text;
    this.state = {
      isOpen: false,
      inputValue: initialValue,
      valueSelected: initialValue !== -1,
      setIndex: props.index,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.selectRef = React.createRef();
    this.inputRef = React.createRef();
    this.id = `select-menu-${id}`;
    id += 1;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (props.index !== state.setIndex) {
      const newState = Object.assign({}, state);
      newState.valueSelected = true;
      newState.inputValue = props.items[props.index].text;
      return newState;
    }
    return state;
  }

  id: string;
  inputRef: ElementRef<*>;
  selectRef: ElementRef<*>;

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

  handleClickOutside: MouseEvent => void;
  handleClickOutside(event: MouseEvent) {
    const { isOpen } = this.state;
    if (this.selectRef && !this.selectRef.contains(event.target) && isOpen) {
      this.setState({
        isOpen: false,
      });
    }
  }

  selectItem: number => void;
  selectItem(newIndex: number) {
    const { items, onSelect } = this.props;
    this.setState({
      inputValue: items[newIndex].text,
      isOpen: false,
      valueSelected: true,
      setIndex: newIndex,
    });
    onSelect(newIndex);
  }

  handleChange: (SyntheticEvent<HTMLInputElement>) => void;
  handleChange(e: SyntheticEvent<HTMLInputElement>) {
    const { disableInput, onSelect } = this.props;
    if (disableInput) {
      return;
    }

    const newValue = e.currentTarget.value;
    if (newValue === '') {
      this.setState({ inputValue: newValue, valueSelected: false, setIndex: 0 });
      onSelect(0);
      const dropdown = document.getElementById(this.id);
      if (dropdown) {
        dropdown.scrollTop = 0;
      }
    } else {
      const { inputValue } = this.state;
      const { items, index } = this.props;
      let newIndex = index;

      // If change is a backspace, set index back to 0
      if (inputValue.length > newValue.length || index === -1) {
        newIndex = 0;
      }
      // Find index of closest item to search value
      while (
        newIndex < items.length &&
        items[newIndex].text.toLowerCase() < newValue.toLowerCase()
      ) {
        newIndex += 1;
      }

      this.setState({ setIndex: newIndex, inputValue: newValue });
      onSelect(newIndex);

      const dropdown = document.getElementById(this.id);
      if (dropdown) {
        dropdown.scrollTop = 37 * newIndex;
      }
    }
  }

  handleKeyDown: (SyntheticKeyboardEvent<HTMLInputElement>) => void;
  handleKeyDown(e: SyntheticKeyboardEvent<HTMLInputElement>) {
    const { isOpen } = this.state;
    const { disableInput, onSelect, index } = this.props;
    if (isOpen) {
      if (e.key === 'ArrowUp') {
        const { items } = this.props;
        if (index !== 0) {
          const newIndex = index - 1;
          this.setState({ inputValue: items[newIndex].text, setIndex: newIndex });
          onSelect(newIndex);

          const dropdown = document.getElementById(this.id);
          if (dropdown && dropdown.scrollTop >= 40 * (newIndex + 1)) {
            dropdown.scrollTop -= 40;
          }
        }
      } else if (e.key === 'ArrowDown') {
        const { items } = this.props;
        if (index !== items.length - 1) {
          const newIndex = index + 1;
          this.setState({ inputValue: items[newIndex].text, setIndex: newIndex });
          onSelect(newIndex);

          const dropdown = document.getElementById(this.id);
          if (dropdown && dropdown.scrollTop <= 40 * (newIndex - 5)) {
            dropdown.scrollTop += 40;
          }
        }
      } else if (e.key === 'Enter' || e.key === 'Tab') {
        const { items } = this.props;
        this.setState({
          inputValue: items[index].text,
          isOpen: false,
          valueSelected: true,
        });
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
    const { items, label, placeholder, error, errorMessage, index } = this.props;
    const { isOpen, inputValue, valueSelected } = this.state;

    const menuHeight = items.length * 40 <= 200 ? items.length * 40 : 210;
    const openedStyling = {
      height: menuHeight,
    };
    const closedStyling = {
      height: 0,
      visibility: 'hidden',
    };

    return (
      <div
        className="select form-field"
        ref={n => {
          this.selectRef = n;
        }}
      >
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
              autoComplete="off"
            />
            <img
              className={isOpen ? 'drop-down-arrow rotated' : 'drop-down-arrow'}
              src={dropDownArrow}
              alt="Drop down arrow"
            />
          </div>
        </label>
        <div className="menu" style={isOpen ? openedStyling : closedStyling} id={this.id}>
          {items.map((item, i) => (
            <div
              key={item.text}
              onClick={() => this.selectItem(i)}
              className={i === index ? 'menu-el selected' : 'menu-el'}
            >
              <p>{item.text}</p>
            </div>
          ))}
        </div>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default Select;
