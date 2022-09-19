import React, { Component } from 'react';
import propTypes from 'prop-types';
import './App.css';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Section from './components/Section/Section';
import { css } from 'styled-components';
import styles from './components/shared/shared.module.css';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {};

  state = {
    good: this.props.initialValue,
    neutral: 0,
    bad: 0,
  };
  onChange = event => {
    const { name, value } = event.currentTarget;
    console.log(name, value);
    this.setState(prevState => ({ [name]: prevState[name] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className={styles.container}>
        <Section title="Please leave feadback" />

        <FeedbackOptions
          onChange={this.onChange}
          options={['good', 'neutral', 'bad']}
        />
        {bad > 0 || neutral > 0 || good > 0 ? (
          <Statistics state={this.state} />
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    );
  }
}

export default App;
