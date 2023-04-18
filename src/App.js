import './App.css';
import Comment from './components/Comment/Comment';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      <Comment></Comment>
    </div>
  );
}

export default App;
