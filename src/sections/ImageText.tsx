import { Component, ReactNode } from "react";
import arrow from "../arrow-right.svg";
import "./ImageText.css";

export type ImageTextSectionProps = {
  title: string;
  image: string;
  imageSide: "left" | "right";
  content: ReactNode;
  link?: {
    label: string;
    target: "_blank" | "_self" | "_parent";
    url: string;
  };
};

export class ImageTextSection extends Component<ImageTextSectionProps> {
  render() {
    const { title, image, imageSide, content, link } = this.props;
    return (
      <section className="ImageText">
        <div className="frame">
          <div className="text">
            <h1 className="title"> {title} </h1>
            <div className="content">{content}</div>
            {link && (
              <a href={link.url} target={link.target} className="link">
                {link.label} &nbsp; <img src={arrow} alt="arrow" />
              </a>
            )}
          </div>
          <div className={`image ${imageSide}`}>  
            <img src={image} alt="Section_Image" />
          </div>
        </div>
      </section>
    );
  }
}
