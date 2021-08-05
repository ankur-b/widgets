import Accordion from './Components/Accordion'
import Search from './Components/Search'
function App() {
  const items=[{title:'t1',
  content:'c1'
},{
  title:'t2',
  content:'c2'
},{
  title:'t3',
  content:'c3'
}]
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      <Search/>
    </div>
  );
}

export default App;
