import React, {useState} from 'react';
import './App.css';
import Tab from './components/Tab';

function App() {

  const tabs=[
    { 
      label:"Tab 1",
      content: "Come and see the violence inherent in the system. Help! Help! I'm being repressed! Are you suggesting coconuts migrate? What is the capital of Assyria? "
    },
    { 
      label:"Tab 2",
      content: "The Lady of the Lake, her arm clad in the purest shimmering samite held aloft Excalibur from the bosom of the water, signifying by divine providence that I, Arthur, was to carry Excalibur. THAT is why I am your king."
    },
    { 
      label:"Tab 3",
      content: "You don't frighten us, English pig dogs. Go and boil your bottoms, you sons of a silly person. I blow my nose at you, so-called you and all your silly English K-nig-hts. Oh, king eh? "
    }
  ]
const [currentTab, setCurrentTab] = useState("");

const changeTabs =(newTabContent)=>{
  setCurrentTab(newTabContent)
}
  
  return (
    <div className="App">
      <Tab info={tabs} onNewTab={changeTabs}/>    
      <div className="content">{currentTab}</div>
    </div>
  );
}

export default App;
