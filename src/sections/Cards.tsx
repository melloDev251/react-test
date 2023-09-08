import { Component } from "react";
import { Card } from "../components/Card";
import "./Cards.css";

export type CardSectionProps = {
  title: string;
  cards?: {
    image: string;
    content: string;
    link?: {
      label: string;
      target: "_blank" | "_self" | "_parent";
      url: string;
    };
  }[];
};

export class CardSection extends Component<CardSectionProps> {
  render() {
    const { title, cards } = this.props;
    return (
      <section className="cards">
        <div className="group">
          <h1>{title}</h1>
          <div className="cards-content">
            {cards &&
              cards.map((card) => (
                <Card
                  image={card.image}
                  content={card.content}
                  link={card.link}
                />
              ))}
          </div>
        </div>
      </section>
    );
  }
}
