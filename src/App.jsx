//& =============
//* Modules
import { Title } from "./components/title.jsx";
import { Timetable } from "./components/timetable.jsx";

//& =============
//* Styles
import './styles/App.css'
import { BLOCK_SUBJECTS } from "./scripts/core/constants.js";

function App() {
  return (
    <>
      <Timetable/>
    </>
  );
}

export default App