import Header from "./components/Header"
import PortfolioSection from "./components/PortfolioSection"
import About from './components/About';
import Contact from './components/Contact';
import sanityCli from "../../sanity.cli";
import { sanityClient } from "./sanity"
import { portfolioSectionsQuery } from './queries';  // Import the centralized query

export default async function Home() {
  // Fetch portfolio sections data using the Sanity client
  const portfolioSections = await sanityClient.fetch(portfolioSectionsQuery);

  return (
    <div>
      <Header />

      <div className="">
        {/* Dynamically rendered Portfolio Sections */}
        {portfolioSections.map((section) => (
          <PortfolioSection
            key={section.id}
            title={section.title}
            reelUrls={section.reelUrls}
            images={section.images}
            id={section.id}
            sectionStyle={section.sectionStyle}
          />
        ))}

        {/* Hardcoded Portfolio Sections */}

      
        <PortfolioSection
          id="portfolio1"
          title="Animator"
          sectionStyle="bg-[#165d4b]"
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
          sectionStyle="bg-[#055973]"
          reelUrls={["/reel1.mp4"]}
          images={[
            { src: 'images/StopMotion4.png', alt: 'Image 3', text: 'Description 3' },
            { src: 'images/StopMotion5.png', alt: 'Image 4', text: 'Description 4' },
            // Add more images here
          ]}
        />
        <PortfolioSection
          id="portfolio3"
          title="Maker"
          sectionStyle="bg-[#165d4b]"
          reelUrls={["/reel1.mp4"]}
          images={[
            { src: 'images/StopMotion6.png', alt: 'Image 5', text: 'Description 5' },
            { src: 'images/StopMotion7.png', alt: 'Image 6', text: 'Description 6' },
            // Add more images here
          ]}
        />
      </div>
      <About />
      <Contact id="contact"/>
    </div>
  )
}