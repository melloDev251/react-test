import "./App.css";
import { HeaderSection, HeaderSectionProps } from "./sections/Header";
import { ImageTextSection, ImageTextSectionProps } from "./sections/ImageText";
import { CardSection, CardSectionProps } from "./sections/Cards";

function App() {
  const HeaderSectionProps: HeaderSectionProps = {
    title: "FUTURMAP DATA",
    subtitle: "La technologie fibre la plus rapide avec une offre TV enrichie",
  };

  const ImageTextSectionPropsArray: ImageTextSectionProps[] = [
    {
      title: "Id vitae proin convallis et.",
      image: "Rectangle 241.png",
      imageSide: "right",
      content: (
        <div>
          <p>
            Parturient tincidunt sem a a vestibulum cras enim dictum tempus
            inceptos massa dictumst a est suscipit nam elit.
          </p>
          <hr />
          <p>
            Rhoncus, ut nunc, non morbi vivamus sed suspendisse morbi. Mi, in
            nunc justo vitae amet enim adipiscing. Aliquam morbi fusce tellus a
            leo aliquam urna in. Pharetra leo sed viverra porta neque enim.
            Scelerisque in ante commodo viverra. Odio potenti vestibulum, vitae
            quis. Tincidunt vestibulum purus, donec nunc viverra vel, mattis
            diam. Facilisi turpis convallis egestas vel nulla.
          </p>
        </div>
      ),
      link: {
        label: "En savoir plus",
        target: "_blank",
        url: "https://example.com",
      },
    },
    {
      title: "Id vitae proin convallis et.",
      image: "Rectangle 241.png",
      imageSide: "left",
      content: (
        <div>
          <p>
            Parturient tincidunt sem a a vestibulum cras enim dictum tempus
            inceptos massa dictumst a est suscipit nam elit.
          </p>
          <hr />
          <p>
            Rhoncus, ut nunc, non morbi vivamus sed suspendisse morbi. Mi, in
            nunc justo vitae amet enim adipiscing. Aliquam morbi fusce tellus a
            leo aliquam urna in. Pharetra leo sed viverra porta neque enim.
            Scelerisque in ante commodo viverra. Odio potenti vestibulum, vitae
            quis. Tincidunt vestibulum purus, donec nunc viverra vel, mattis
            diam. Facilisi turpis convallis egestas vel nulla.
          </p>
        </div>
      ),
      link: {
        label: "En savoir plus",
        target: "_blank",
        url: "https://example.com",
      },
    },
  ];

  const CardSectionProps: CardSectionProps = {
    title: "Titre de la section",
    cards: [
      {
        image: "image 1.png",
        content:
          "Rhoncus, ut nunc, non morbi vivamus sed suspendisse morbi. Mi, in nunc justo vitae amet enim adipiscing. Aliquam morbi fusce tellus a leo aliquam urna in.",
        link: {
          label: "En savoir plus",
          target: "_blank",
          url: "https://example.com/1",
        },
      },
      {
        image: "image 2.png",
        content:
          "Rhoncus, ut nunc, non morbi vivamus sed suspendisse morbi. Mi, in nunc justo vitae amet enim adipiscing. Aliquam morbi fusce tellus a leo aliquam urna in. ",
        link: {
          label: "En savoir plus",
          target: "_self",
          url: "https://example.com/2",
        },
      },
      {
        image: "image 3.png",
        content:
          "Rhoncus, ut nunc, non morbi vivamus sed suspendisse morbi. Mi, in nunc justo vitae amet enim adipiscing. Aliquam morbi fusce tellus a leo aliquam urna in. ",
        link: {
          label: "En savoir plus",
          target: "_parent",
          url: "https://example.com/3",
        },
      },
    ],
  };

  return (
    <div className="App">
      <HeaderSection {...HeaderSectionProps} />

      <br />
      <br />

      {ImageTextSectionPropsArray.map((props, index) => (
        <ImageTextSection key={index} {...props} />
      ))}

      <br />
      <br />

      <CardSection {...CardSectionProps} />
    </div>
  );
}

export default App;
