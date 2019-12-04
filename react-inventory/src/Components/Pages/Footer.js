import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className="footer bg-dark">
        <div class="toast">
            <div class="toast-header">
                Order Information
            </div>
            <div class="toast-body">
                Some text inside the toast body
            </div>
        </div>
        <div className="container">
          <span class="text-info">All rights reserved to yashwanth Thota @2019</span>
        </div>
      </footer>
    )
  }
}
