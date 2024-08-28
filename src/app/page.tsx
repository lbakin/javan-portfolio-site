import Header from "./components/Header"
import PortfolioSection from "./components/PortfolioSection"
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <div>      
      <Header />
      <PortfolioSection
        id="portfolio1"
        title="Animator"
        sectionStyle="bg-teal-500"
        reelUrls={["/reel1.mp4", "/reel2.mp4"]}
        images={[
          { src: 'images/StopMotion1.png', alt: 'Image 1', text: 'Description 1' },
          { src: 'images/StopMotion2.png', alt: 'Image 2', text: 'Description 2' },
          { src: 'images/StopMotion3.png', alt: 'Image 2', text: 'Description 2' },
          // Add more images here
        ]}
      />
      <PortfolioSection
        id="portfolio2"
        title="Rigger"
        sectionStyle="bg-teal-400"
        reelUrls={["/reel1.mp4"]}
        images={[
          { src: 'images/StopMotion4.png', alt: 'Image 3', text: 'Description 3' },
          { src: 'images/StopMotion5.png', alt: 'Image 4', text: 'Description 4' },
          // Add more images here
        ]}
      />
      <PortfolioSection
        id="portfolio3"
        title="Director"
        sectionStyle="bg-teal-500"
        reelUrls={["/reel1.mp4"]}
        images={[
          { src: 'images/StopMotion6.png', alt: 'Image 5', text: 'Description 5' },
          { src: 'images/StopMotion7.png', alt: 'Image 6', text: 'Description 6' },
          // Add more images here
        ]}
      />
      <About />
      <Contact id="contact"/>
    </div>
  )
}