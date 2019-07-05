import React from 'react';
import { romanToArabicNumber } from './utils';

interface Props {
  onChange: (value: number|null) => void;
}

interface State {
  errorMessage: string;
}

export class RomanArabicParser extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      errorMessage: '',
    }
  }

  render() {
    return (
      <div>
        <input type="text" name="roman-arabic-parser" onChange={this.onChange} />
        <div style={{ color: 'red' }}>{this.state.errorMessage}</div>
      </div>
    );
  }

  private onChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const arabicNumber = romanToArabicNumber(event.target.value);
    if (arabicNumber === null) {
      this.setState({
        errorMessage: 'Invalid Roman Number',
      });
    }
    this.props.onChange(arabicNumber);
  }
}

export default RomanArabicParser;
