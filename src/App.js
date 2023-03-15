import logo from './logo.svg';
import profile_picture from './img/profile_picture.png'
// import './App.css';
import Cards from './components/Cards';
import { LIST_SOCIAL_NETWORKS } from './data/listSocialNetwork';

function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', backgroundColor: 'blue', padding: 10 }}>

      <div style={{ display: 'flex', flex: 1, backgroundColor: 'red' }}>
        <img style={{ borderRadius: 150 }} src={profile_picture} alt="loading..." />
      </div>

      <div style={{ display: 'flex', flex: 1, flexDirection: 'column ', backgroundColor: 'green', padding: 10, justifyContent: 'space-around' }}>
        <div style={{ backgroundColor: 'orange', margin: 10 }}> aboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutaboutabout</div>
        <div style={{ backgroundColor: 'pink', margin: 10 }}>
          <Cards listSocialNetwork={LIST_SOCIAL_NETWORKS} />

        </div>
      </div>


      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </div>
  );
}

export default App;