import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio6- (5).jpg";
import IMG6 from "../../assets/portfolio6- (5).jpg";

const data = [
  {
    id: 1,
    image: IMG2,
    title: "Sagrado Mercadito",
    url: "",
    demo: "https://www.youtube.com/watch?v=UZw3NqKEC5U",
  },
  {
    id: 2,
    image: IMG3,
    title: "Epicentro",
    url: "",
    demo: "https://www.youtube.com/watch?v=3BGImJ1bReo",
  },
  {
    id: 3,
    image: IMG1,
    title: "Organic People Society",
    url: "",
    demo: "https://www.youtube.com/watch?v=zZlEYp2vuf8",
  },
  {
    id: 4,
    image: IMG4,
    title: "Conference - Era of Apps",
    url: "",
    demo: "https://www.youtube.com/watch?v=QvxNc5rQYyU",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>What I've Done</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data
          .slice(0)
          .reverse()
          .map(({ id, image, title, url, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a
                    href={url}
                    className={url ? "btn" : "hide"}
                    target="_blank"
                  >
                    URL
                  </a>
                  <a
                    href={demo}
                    className={demo ? "btn btn-primary" : "hide"}
                    target="_blank"
                  >
                    Demo
                  </a>
                </div>
              </article>
            );
          })}
      </div>
    </section>
  );
};

export default Portfolio;
