import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

export default () => (
  <div id={styles.header}>
    <div>
      {/* Replace this */}
      Steven's Portfolio
    </div>
    <div id={styles.buttonContainer}>
      <Link to="/" activeClassName="active">
        Work
      </Link>
      <Link to="/about" activeClassName="active">
        About
      </Link>
    </div>
  </div>
)
