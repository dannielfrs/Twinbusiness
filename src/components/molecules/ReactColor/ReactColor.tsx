import React, { Component } from 'react';
import { ChromePicker, ColorResult } from 'react-color';

interface ColorPickerProps {
  onColorChange: (color: string) => void;
}

interface ComponentState {
  background: string;
}

class ColorPickerComponent extends Component<ColorPickerProps, ComponentState> {
  constructor(props: ColorPickerProps) {
    super(props);
    this.state = {
      background: '#fff',
    };
  }

  handleChangeComplete = (color: ColorResult) => {
    this.setState({ background: color.hex });
    this.props.onColorChange(color.hex);
  };

  render() {
    return (
      <div style={{ zIndex: '9999' }}>
        <ChromePicker
          color={this.state.background}
          onChangeComplete={this.handleChangeComplete}
        />
      </div>
    )
  }
}

export default ColorPickerComponent;
