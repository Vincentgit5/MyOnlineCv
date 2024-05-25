import React from 'react'
import './portfolio.css'
import IMG2 from '../../assets/Image6.png'
import IMG1 from '../../assets/Image2.jpg'
import IMG3 from '../../assets/Image3.jpg'
import IMG4 from '../../assets/Image4.jpg'
import IMG6 from '../../assets/Image1.jpg'
import IMG7 from '../../assets/Image7.jpg'

const data = [
  {
    id: 1,
    image: IMG2,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://www.figma.com/proto/HVBaWuxpYPNTCMVMsAfeNf/Untitled?node-id=1-2&t=ARZ0dkBouBaVpjdB-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2',
  },
  {
    id: 2,
    image: IMG1,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21894975-Hyper-Charts-templates',
  },
  {
    id: 3,
    image: IMG3,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21955497-Chart-widgets-library-Hyper-charts-UI-Kit',
  },
  {
    id: 4,
    image: IMG4,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21778446-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps',
  },
  {
    id: 5,
    image: IMG6,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/21895285-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma',
  },
  {
    id: 6,
    image: IMG7,
    title: "This is portfolio item title",
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/22269115-Eclipse-Banking-app-templates',
  }
]

const Portfolio = () => {
  return (
    <section id='portfoliio'>
      <h5>My recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className='portfolio__item'>
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='blank'>Github</a>
                  <a href={demo} className='btn btn-primary' target='blanck'>Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio