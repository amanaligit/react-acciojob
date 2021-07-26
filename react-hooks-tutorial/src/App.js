import logo from "./logo.svg";
import "./App.css";
import ClassCounter from "./components/ClassCounter";
import HookCounter from "./components/HookCounter";
import HookCounter2 from "./components/HookCounter2";
import HookObject from "./components/HookObject";
import HookArray from "./components/HookArray";
import EffectCounter from "./components/EffectCounter";
import MouseContainer from "./components/MouseContainer";
import FetchUseEffect from "./components/FetchUseEffect";
import ComponentA from "./components/ExampleUseContext/ComponentA";
import RefFocusInput from "./components/RefFocusInput";
import RefTimer from "./components/RefTimer";
import MemoCounter from "./components/MemoCounter";
import ParentComponent from "./components/useCallbackExample/ParentComponent";

function App() {
  return (
    <div className="App">
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounter2 /> */}
      {/* <HookObject /> */}
      {/* <HookArray /> */}
      {/* <EffectCounter /> */}
      {/* <MouseContainer /> */}
      {/* <FetchUseEffect /> */}
      {/* <ComponentA /> */}

      {/* <RefFocusInput /> */}
      {/* <RefTimer /> */}
      {/* <MemoCounter />*/}
      <ParentComponent />
    </div>
  );
}

export default App;
