import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

const IndexPage = ({dispatch, example}) => {
  const fetchData = () => {
    dispatch({
      type: 'example/fetch'
    })
  }
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>To get started, edit <code>src/index.js</code> and save to reload.</li>
        <li><a href="https://github.com/dvajs/dva-docs/blob/master/v1/en-us/getting-started.md">Getting Started</a></li>
      </ul>
      {example && example.data && example.data.results.map(item => {
        return (<div key={item.email}>
          {item.name.title} - {item.name.first} - {item.name.last}
        </div>)
      })}
      <button onClick={fetchData} >Fetch</button>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect(({ example }) => ({ example }))(IndexPage);
