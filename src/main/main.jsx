import "./main.scss";
import SynopsisBlock from '../components/synopsisBlock/synopsisBlock'
import VideoDetailsBlock from '../components/videoDetailsBlock/videoDetailsBlock'
import Footer from '../components/footer/footer'
import ButtonComponent from "../components/buttonComponent/buttonComponent";
import mainBackgroundImg from '../assets/background_1.png';

function MainBlock() {
  return (
    <>
      <div className="main u-block-structures">
        {/* <ButtonComponent link="/" text="PREVENTA S/. 5.00"/> */}
      </div>
      <SynopsisBlock />
      <VideoDetailsBlock />
      <Footer />
    </>
  );
}

export default MainBlock;
