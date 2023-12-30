import "./Homepage.css";
import SliderHomepageS1 from "../../component/SliderHomepageS1/SliderHomepageS1";
import Seriesisplaying from "../../component/seriesisplaying/seriesisplaying";
import LastMovie from "../../component/latestmovies/latestmovies";
import Veblag from "../../component/Veblag/Veblag";
import Frequentlyaskedquestion from "../../component/Frequentlyaskedquestion/Frequentlyaskedquestion";
import AboutUs from "../../component/AboutUs/AboutUs";

export default function Homepage() {
  return (
    <>
      <SliderHomepageS1 />
      <Seriesisplaying />
      <LastMovie />
      <Veblag />
      <div className="flex flex-wrap  justify-between mt-[50px] px-[70px]">
        <AboutUs />
        <Frequentlyaskedquestion />
      </div>
    </>
  );
}
