import React from 'react';
import RomanArabicParser from './features/RomanArabicParser';

interface Props {}

export class App extends React.Component<Props, { value: number }> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Roman Numerals to Arabic Numbers</h2>
        </header>
        <RomanArabicParser onChange={this.handleChange} />
        <h4>Arabic number: <b>{this.state.value}</b></h4>
      </div>
    );
  }

  private handleChange(n: number|null): void {
    this.setState({
      value: n || 0,
    })
  }
}

export default App;
