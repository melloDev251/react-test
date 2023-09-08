import { Component } from "react";
import arrow from "../arrow-right.svg";
import "./Card.css";

type CardProps = {
  image: string;
  content: string;
  link?: {
    label: string;
    target: "_blank" | "_self" | "_parent";
    url: string;
  };
};

export class Card extends Component<CardProps> {
  render() {
    const { image, content, link } = this.props;

    return (
      <div className="card">
        <img src={image} alt="Card_Image" />
        <p className="contents">{content}</p>
        {link && (
          <a href={link.url} target={link.target} className="card-link">
            {link.label} &nbsp; <img src={arrow} alt="arrow" />
          </a>
        )}
      </div>
    );
  }
}
