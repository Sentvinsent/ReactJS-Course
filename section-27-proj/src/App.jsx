import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why not work with us?</h2>
        <Accordion className="accordion">
          <Accordion.Item id="firstItem" className="accordion-item">
            <AccordionTitle className="accordion-item-title">
              "We've got 20 years of XP"
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>We are over 20 years in business</p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item id="secondItem" className="accordion-item">
            <AccordionTitle className="accordion-item-title">
              "We've got 20 years of XP"
            </AccordionTitle>
            <AccordionContent className="accordion-item-content">
              <article>
                <p>You can't go wrong with us</p>
                <p>We are over 20 years in business</p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <SearchableList items={PLACES} itemKeyFunc={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList
          items={["item1", "item2"]}
          itemKeyFunc={(item) => (item = item)}
        >
          {(item) => (item = item)}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
