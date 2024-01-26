import {items} from './../constants';
import Slider from './Slider';

const MiddleComponent: React.FC = () => (
  <section
    id="middleComponent"
    className={`relative flex-col pt-0 md:pt-[12vh] lg:pt-[10vh] `}>
    <Slider items={items} />
  </section>
);

export default MiddleComponent;
