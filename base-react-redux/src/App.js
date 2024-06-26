import "./App.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";

// class App extends React.Component {
//   render() {
//     return (
//       <div className="App-container">
//         <MyComponent></MyComponent>
//       </div>
//     );
//   }
// }

// const App = () => {
//   const count = useSelector((state) => state.counter.count);
//   const dispatch = useDispatch();

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// };

const App = () => {
  return (
    <div className="app-container">
      <div className="header-container">
        <Header />
      </div>
      <div className="main-container">
        <div className="sidenav-container"></div>
        <div className="app-contain">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
