import React from 'react';
import { romanToArabicNumber } from './utils';

interface Props {
  onChange: (value: number|null) => void;
}

export class RomanArabicParser extends React.Component<Props> {
  render() {
    return (
      <div>
        <input type="text" name="roman-arabic-parser" onChange={this.onChange} />
      </div>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.props.onChange(romanToArabicNumber(event.target.value));
  }
}

export default RomanArabicParser;
