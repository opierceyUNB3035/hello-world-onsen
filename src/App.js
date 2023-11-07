import React from 'react';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import { Page, Toolbar, Content } from 'react-onsenui';

function App() {
  return (
    <Page renderToolbar={() =>
      <Toolbar>
        <div className="center">Hello World App</div>
      </Toolbar>
    }>
      <div style={{ textAlign: 'center', marginTop: '45px' }}> {/* Adjust the marginTop as needed */}
        Hello World!
      </div>
    </Page>
  );
}

export default App;

