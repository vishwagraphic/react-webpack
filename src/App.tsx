import './style.css';
import IMAGE from './react.png';
import LOGO from './react.svg';
import { ClickCounter } from './clickCounter';

export const App = () => {
  const name = 'Viswa';
  return (
    <>
      <img src={LOGO} height={100} alt="SVG logo" />
      <img src={IMAGE} height={200} alt="logo" />
      <h1>
        Test React Typescript - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <ClickCounter />
    </>
  );
};
