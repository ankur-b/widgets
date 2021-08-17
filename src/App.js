import React ,{useState} from 'react'
import Accordion from './Components/Accordion'
import Search from './Components/Search'
import Dropdown from './Components/Dropdown'
const App=()=> {
  const items=[{title:'t1',
  content:'c1'
},{
  title:'t2',
  content:'c2'
},{
  title:'t3',
  content:'c3'
}]
  const options=[
    {label:"The Color Red",value:"red"},
    {label:"The Color Green",value:"green"},
    {label:"A Shade of Blue",value:"blue"}
  ]
  const [selected,setSelected] = useState(options[0])
  return (
    <div className="App">
      {/* <Accordion items={items}/> */}
      {/* <Search/> */}
      <Dropdown selected={selected} onSelectChange={setSelected} options={options}/>
    </div>
  );
}

export default App;
