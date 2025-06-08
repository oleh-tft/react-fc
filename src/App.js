import logo from './logo.svg';
import './App.css';
import { Info } from './components/Info';

const clubs = [
  {title: 'FC Chornomorets Odesa', img: 'FC_Chornomorets.png', city: 'Odesa', year: 1936},
  {title: 'FC Dnipro', img: 'FC_Dnipro.png', city: 'Dnipro', year: 1918}
];

function App() {
  return (
    <div className="App">
      <div id='container'>
        <Info title={clubs[0].title} img={clubs[0].img} city={clubs[0].city} year={clubs[0].year}></Info>
        <Info title={clubs[1].title} img={clubs[1].img} city={clubs[1].city} year={clubs[1].year}></Info>
      </div>
    </div>
  );
}

export default App;
