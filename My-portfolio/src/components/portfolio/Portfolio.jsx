import "./portfolio.css";

import IMG1 from "../../assets/Smeconnect1.PNG";
import IMG2 from "../../assets/a1agro.PNG";
import IMG3 from "../../assets/Startup Agency Project.jpg";
import IMG4 from "../../assets/2geda.PNG";
import IMG5 from "../../assets/Ola.PNG";
import IMG6 from "../../assets/Project4.jpg";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "2geda Project",
      img: IMG4,
      description:
        "This is a social media website that updates users about the latest happenings in the society",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://2geda-project.netlify.app/",
      github: "https://github.com/ecstacy25/2geda-Project",
    },
    {
      id: 2,
      title: "SME Website with React.js",
      img: IMG1,
      description:
        "A Small and Medium scale enterprise website.",
      technologies:
        "Html | TailwindCSS | Javascript | React Js | Node js | MongoDB",
      link: "https://https://smeconnectz.netlify.app/",
      github: "https://github.com/ecstacy25/Sme_connect-project",
    },
    {
      id: 3,
      title: "A1agro Project",
      img: IMG2,
      description:
        "This is an Agro export website that showcases different products.",
      technologies: " Html | CSS | JavaScript | React js",
      link: "https://a1agrofoods.netlify.app/",
      github: "https://github.com/ecstacy25/A1_Agro",
    },
    {
      id: 4,
      title: "Startup Landing Page",
      img: IMG3,
      description:
        "A dedicated, standalone web page built for specific campaigns and target audiences.",
      technologies: "Html | CSS | JavaScript | React js",
      link: "https://alpha-agency-project.vercel.app/",
      // github: "https://github.com/Rasif-Taghizada/Alpha-Agency-Project",
    },
    {
      id: 5,
      title: "Olasystems Project",
      img: IMG5,
      description:
        "This is a Landing page built for a client",
      technologies: "Html | Css | Javascript | React js",
      link: "https://olasystems.netlify.app/",
      github: "https://github.com/Onya01/olesten",
    },
    {
      id: 6,
      title: "Fs Poster Website",
      img: IMG6,
      description:
        "Real-world group project which is still in progress and will provide educational platform for future young developers",
      technologies: "Html | Scss | Javascript",
      link: "https://fs-poster-project.vercel.app/",
      // github: "https://github.com/Rasif-Taghizada/Fs-Poster-Project",
    },
  ];

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {soloProjects.map((pro) => (
          <article className='portfolio__item' key={pro.id}>
            <div className='portfolio__item-image'>
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className='portfolio__item-content'>
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className='portfolio__item-cta'>
              <a
                href={pro.github}
                target='_blank'
                className='btn'
                rel='noreferrer'
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target='_blank'
                className='btn btn-primary'
                rel='noreferrer'
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
