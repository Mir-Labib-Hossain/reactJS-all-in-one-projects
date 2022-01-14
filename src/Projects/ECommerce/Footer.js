import React from "react";

export default function Footer() {
  return (
    <div className="footer" id="contact">
      <div className="child-footer">
        <a href="#facebook">
          <i className="fab fa-facebook-square"></i>
          facebook
        </a>
        <a href="#instagram">
          <i className="fab fa-instagram"></i>
          Instagram
        </a>
        <a href="#youtube">
          <i className="fab fa-youtube"></i> Youtube
        </a>
      </div>
      <p>&copy; mirlabibhossain 2021 - {getCurrentDate()}</p>
    </div>
  );
}
function getCurrentDate() {
  let newDate = new Date();
  let year = newDate.getFullYear();
  return `${year}`;
}