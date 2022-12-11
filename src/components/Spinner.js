import React, { Component } from 'react'
import spinner from "../spinner.jpeg";
import "../App.css";
// import PropTypes from 'prop-types'

const Spinner = () => {

  return (
    <div>
      <img className="spinner my-3" src={spinner} width="50px" alt="loading" />
    </div>
  )
}

export default Spinner
