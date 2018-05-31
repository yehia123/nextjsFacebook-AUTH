import React from 'react';
import SkyLight from 'react-skylight';



const FBdetails = () =>
  <div>
    <section>
      <h1>React SkyLight</h1>
      <button onClick={() => this.simpleDialog.show()}>Open Modal</button>
    </section>
    <SkyLight hideOnOverlayClicked ref={ref => this.simpleDialog = ref} title="Hi, I'm a simple modal">
          Hello, I dont have any callback.
    </SkyLight>
  </div>;


FBdetails.displayName = 'Example';

export default FBdetails;
