import React, {Component} from "react";
import config from "./config.json";
import styles from "./greeter.css"

import m from "./_style.scss";
import bootstrap from 'bootstrap/dist/css/bootstrap.css';



class Greeter extends Component{
  render() {
    const btnClass = `${bootstrap.btn} ${bootstrap["btn-default"]}`;
    const spanClass = `${bootstrap.glyphicon} ${bootstrap["glyphicon-align-left"]}`;
    return (
      <div>
        <div className={styles.root}>
          {config.greetText}
        </div>
        <button type="button" className={btnClass} aria-label="Left Align">
          <span className={spanClass} aria-hidden="true"></span>
        </button>
      </div>
    );
  }
}

export default Greeter
