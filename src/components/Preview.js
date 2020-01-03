import React from "react";
import "../stylesheets/preview.scss";
import Icon from "./Icon";
import defaultImage from "../images/default-profile.png";

class Preview extends React.Component {
  render() {
    return (
      <section className="preview">
        <div className="preview__container">
          <button className="preview__reset">
            <i className="far fa-trash-alt preview__icon"></i>reset
          </button>
          <article className="preview__display">
            <header className="preview__display--header">
              <div className="preview__display--container">
                <h3 className="preview__display--title js-preview-title js-preview">{this.props.name || "Nombre Apellido"}</h3>
                <h3 className="preview__display--subtitle js-preview-subtitle js-preview">{this.props.job || "Front-end Developer"}</h3>
              </div>
            </header>
            <div className="preview__display--img" style={{ backgroundImage: `url(${this.props.image || defaultImage})` }}></div>
            <footer className="preview__display--footer menu">
              <ul className="menu__list">
                <Icon classLi="menu__items--email filter" classA="js-link-email js-preview" classI="far fa-envelope" />
                <Icon href={`tel:+${this.props.phone}`} classI="fas fa-mobile-alt" classLi="menu__items--phone filter" classA="js-link-phone js-preview" />
                <Icon classLi="menu__items--linkedin filter" classA="js-link-linkedin js-preview" classI="fab fa-linkedin-in" />
                <Icon classLi="menu__items--github filter" classA="js-link-github js-preview" classI="fab fa-github-alt" />
              </ul>
            </footer>
          </article>
        </div>
      </section>
    );
  }
}
export default Preview;
