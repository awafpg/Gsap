import GsapFrom from "./feature/GsapFrom";
import GsapFromTo from "./feature/GsapFromTo";
import Gsapto from "./feature/Gsapto";

function App() {
  return (
    <main>
      <div>
        <h1 className="m-2 text-3xl">GsapTo</h1>
        <p className="m-2 mt-5 text-gray-500">
          The <code>Gsap.to()</code> method is used to animate an elements from
          their current state to a new state.
        </p>
        <div>
          <GsapFrom />
          <Gsapto />
          <GsapFromTo />
        </div>
      </div>
    </main>
  );
}

export default App;
