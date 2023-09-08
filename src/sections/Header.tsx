import { Component } from "react";
import "./Header.css";

export type HeaderSectionProps = {
  title: string;
  subtitle?: string;
};

export class HeaderSection extends Component<HeaderSectionProps> {
  render() {
    const { title, subtitle } = this.props;
    return (
      <section className="Header">
        <div className="Section-text">
          <h1> {title} </h1>
          {subtitle && <h4> {subtitle} </h4>}
        </div>
      </section>
    );
  }
}
