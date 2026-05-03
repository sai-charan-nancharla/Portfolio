import React, { useState, useEffect } from "react";
import "./Projects.css";
import imag from '../assets/imag.png'
import newsapp from '../assets/newsapp.png'



const project = [
  {
    title: 'Image Enhancement using GAN',
    description: ' This is web-application that enhances the degraded photographs by enhancing the pixels in the image, low quality images are transformed into high resolution images',
    image: { imag },
    git: 'https://github.com/sai-charan-nancharla/Image-Enhancement',
    technologies: ['Python', 'Streamlit', 'Machine-learning']
  },
  {
    title: 'News App',
    description: 'A news app utilizing APIs aggregates real-time news articles from various sources, offering users personalized content based on their preferences and interests.',
    image: { newsapp },
    git: "https://github.com/sai-charan-nancharla/News_App",
    technologies: ['React JS', 'Node Js', 'MongoDB', 'BootStrap']
  }
]


const Projects = () => {
  const [active, setActive] = useState(3);
  const items = [
    {
      id: 1,
      title: 'Image Enhancement',
      description: ' This is web-application that enhances the degraded photographs by enhancing the pixels in the image, low quality images are transformed into high resolution images',
      image: imag,
      git: 'https://github.com/sai-charan-nancharla/Image-Enhancement',
      technologies: ['Python', 'Streamlit', 'Machine-learning']
    },
    {
      id: 2,
      title: 'News App',
      description: 'A news app utilizing APIs aggregates real-time news articles from various sources, offering users personalized content based on their preferences and interests.',
      image: newsapp,
      git: "https://github.com/sai-charan-nancharla/News_App",
      technologies: ['React JS', 'Node Js', 'MongoDB', 'BootStrap']
    },
    {
      id: 3,
      title: 'News App',
      description: 'A news app utilizing APIs aggregates real-time news articles from various sources, offering users personalized content based on their preferences and interests.',
      image: newsapp,
      git: "https://github.com/sai-charan-nancharla/News_App",
      technologies: ['React JS', 'Node Js', 'MongoDB', 'BootStrap']
    },
    {
      id: 4,
      title: 'Image Enhancement',
      description: ' This is web-application that enhances the degraded photographs by enhancing the pixels in the image, low quality images are transformed into high resolution images',
      image: imag,
      git: 'https://github.com/sai-charan-nancharla/Image-Enhancement',
      technologies: ['Python', 'Streamlit', 'Machine-learning']
    },
    {
      id: 5,
      title: 'News App',
      description: 'A news app utilizing APIs aggregates real-time news articles from various sources, offering users personalized content based on their preferences and interests.',
      image: newsapp,
      git: "https://github.com/sai-charan-nancharla/News_App",
      technologies: ['React JS', 'Node Js', 'MongoDB', 'BootStrap']
    },
    // { id: 3, title: "Slide 3", content: "Lorem ipsum dolor sit amet..." },
    // { id: 4, title: "Slide 4", content: "Lorem ipsum dolor sit amet..." },
    // { id: 5, title: "Slide 5", content: "Lorem ipsum dolor sit amet..." },
    // { id: 6, title: "Slide 6", content: "Lorem ipsum dolor sit amet..." },
    // { id: 7, title: "Slide 7", content: "Lorem ipsum dolor sit amet..." },
  ];

  useEffect(() => {
    loadShow();
  }, [active]);

  const loadShow = () => {
    items.forEach((_, index) => {
      const item = document.querySelector(`.item-${index}`);
      if (!item) return;
      let stt = 0;
      if (index === active) {
        item.style.transform = `none`;
        item.style.zIndex = 1;
        item.style.filter = "none";
        item.style.opacity = 1;
      } else if (index > active) {
        stt = index - active;
        item.style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      } else {
        stt = active - index;
        item.style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        item.style.zIndex = -stt;
        item.style.filter = "blur(5px)";
        item.style.opacity = stt > 2 ? 0 : 0.6;
      }
    });
  };

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1 < items.length ? prevActive + 1 : prevActive));
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : prevActive));
  };

  return (
    <div className="slider">
      {items.map((item, index) => (

        <div key={item.id} className={`item item-${index}`}>

          <div>
            <div>
              <a href="#">
                <img className="img-class" src={item.image} alt="" />
              </a>
            </div>

            <div className="project-content">
              

              <h5 className="project-title">{item.title}</h5>
          
              <p className="project-description">{item.description}</p>

              <div className="details">
                <div className='project-tech'>
                  {item.technologies.map((tag, index) => (
                    <p
                      key={`${index}-${tag}`}
                    >
                      #{tag}
                    </p>
                  ))}
                </div>
                <div className="project-git"><a href={item.git}>GitHub</a></div>
              </div>
            </div>
          </div>

        </div>
      ))}
      <button id="next" onClick={nextSlide}>
        &gt;
      </button>
      <button id="prev" onClick={prevSlide}>
        &lt;
      </button>
    </div>
  );
};

export default Projects;
