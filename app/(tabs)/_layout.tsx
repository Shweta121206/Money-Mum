import React from 'react';
import { Tab, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Layout = () => {
  return (
    <div>
      <h1>My Money Mum App</h1>
      <Tabs>
        <Tab title="Home">
          <h2>Home Content</h2>
        </Tab>
        <Tab title="Transactions">
          <h2>Transactions Content</h2>
        </Tab>
        <Tab title="Settings">
          <h2>Settings Content</h2>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Layout;