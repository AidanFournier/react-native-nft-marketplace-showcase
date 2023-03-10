import { Download, Features, SectionWrapper } from './components';
import { feature, homeHero, homeVideo, mockup } from "./assets";
import styles from "./styles/Global";

const App = () => {
  return (
    <div>
      <SectionWrapper 
        title="Start selling and growing with your own store of NFTs. "
        description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace."
        showBtn
        mockupImg={homeHero}
        banner="banner"
      />
      <SectionWrapper 
        title="Smart User Interface Marketplace"
        description="Experience the buttery UI of ProNef NFT Marketplace. Smooth consistent colours in a fluent UI design."
        video={homeVideo}
        reverse
      />
      <Features />
      <SectionWrapper 
        title="Deployment"
        description="ProNef is built using Expo, which runs natively on all users' devices. You can easily get your app into people's hands."
        mockupImg={feature}
        reverse
      />
      <SectionWrapper 
        title="Creative way to showcase the store"
        description="The app contains two screens. The first screen lists all NFTs while the second one shows the details of a specific NFT."
        mockupImg={mockup}
        banner="banner02"
      />
      <Download />
      <div className="px-4 pb-1 pt-6 justify-center items-center bg-primary flex-col text-center banner04">
        <p className={`${styles.pText} ${styles.whiteText}`}>&copy; Aidan Fournier 2023</p>
      </div>
    </div>
  );
}

export default App;
