// @flow
/* eslint no-lonely-if: 0 */
/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint react/require-default-props: 0 */

import React, { Component } from 'react';

import dropDownArrow from 'assets/drop_down_arrow.svg';

import type { ElementRef } from 'react';

type Props = {
  label: string,
  placeholder: string,
  items: Array<{ text: string, value: string }>,
  onSelect: (string[]) => void,
  selected: Array<string>,
  error?: boolean,
  errorMessage?: string,
};

type State = {
  isOpen: boolean,
  selected: boolean[],
};

// static count var to give each instance a unique id
let id = 0;

class MultiSelect extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
      selected: props.items.map(() => false),
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);

    this.selectRef = React.createRef();
    this.inputRef = React.createRef();
    this.id = `multi-select-${id}`;
    id += 1;
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    const { items } = props;
    const stored = props.selected;
    // $FlowFixMe
    const storedSelected = items.map(() => false);
    for (let i = 0; i < items.length; i += 1) {
      if (stored.indexOf(items[i].value) !== -1) {
        storedSelected[i] = true;
      }
    }

    const newState = Object.assign({}, state, { selected: storedSelected });
    for (let i = 0; i < storedSelected.length; i += 1) {
      if (storedSelected[i] !== state.selected[i]) {
        return newState;
      }
    }

    return state;
  }

  id: string;
  inputRef: ElementRef<*>;
  selectRef: ElementRef<*>;

  toggleMenu: () => void;
  toggleMenu() {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
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
    const { selected } = this.state;
    const newSelected = selected.map((x, i) => (i === newIndex ? !x : x));
    this.setState({
      selected: newSelected,
    });

    const selectedItems = [];
    newSelected.forEach((x, i) => {
      if (x) {
        selectedItems.push(items[i].value);
      }
    });
    onSelect(selectedItems);
  }

  handleFocus: (SyntheticEvent<HTMLDivElement>) => void;
  handleFocus(e: SyntheticEvent<HTMLDivElement>) {
    e.preventDefault();
    this.toggleMenu();
    this.inputRef.current.focus();
  }

  render() {
    const { items, label, placeholder, error, errorMessage } = this.props;
    const { isOpen, selected } = this.state;

    const menuHeight = items.length * 40 <= 200 ? items.length * 40 : 210;
    const openedStyling = {
      height: menuHeight,
    };
    const closedStyling = {
      height: 0,
      visibility: 'hidden',
    };

    const selectedItems = [];
    let valueSelected = false;
    selected.forEach((x, i) => {
      if (x) {
        selectedItems.push(items[i].text);
        valueSelected = true;
      }
    });

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
              value={selectedItems.join(', ')}
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
          {items.map((x, i) => (
            <div
              key={x.text}
              onClick={() => this.selectItem(i)}
              className={selected[i] ? 'menu-el selected' : 'menu-el'}
            >
              <p>{x.text}</p>
            </div>
          ))}
        </div>
        {error && <p className="error-message">{errorMessage}</p>}
      </div>
    );
  }
}

export default MultiSelect;
