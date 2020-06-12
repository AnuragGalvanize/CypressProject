import React from 'react';
import './App.css';
import Collapsible from "@paprika/collapsible";
import Modal from "@paprika/modal";
import Button from "@paprika/button";
import Tabs from "@paprika/tabs";

function App() {
  const [isCollapsed, setIsCollapsed] = React.useState(true);
  const [isOpen, setModal] = React.useState(false);
  const handleOpenModal = (isOpen) => {
    setModal(isOpen);
  };
  const handleCloseModal = () => {
    setModal(false);
  };
  return (
    <React.Fragment>
    <Tabs>
      <Tabs.List>
        <Tabs.Tab>Installed</Tabs.Tab>
        <Tabs.Tab>Available List</Tabs.Tab>
      </Tabs.List>
      <Tabs.Panels>
        <Tabs.Panel>
          <Button onClick={() => handleOpenModal(true)}>Test Modal</Button>
        </Tabs.Panel>
        <Tabs.Panel>Available List</Tabs.Panel>
      </Tabs.Panels>
    </Tabs>
  <Modal isOpen={isOpen} onClose={handleCloseModal}>
  <Modal.Header>Install toolkit?</Modal.Header>
  <Modal.Content>
    <p>(Tollkit Name) contains</p>
  <Collapsible
    a11yText="collapsible section"
    isCollapsed={isCollapsed}
    isDisabled={false}
    label={(isCollapsed)? "Robotic Scripts - 3":"Robotic Scripts:"}
    iconAlign="left"
    onClick={() => setIsCollapsed(!isCollapsed)}
  >
    <ul>
      <li>Script A</li>
      <li>Script B</li>
      <li>Script C</li>
    </ul>
  </Collapsible>
  <Collapsible
    a11yText="collapsible section"
    isCollapsed={isCollapsed}
    isDisabled={false}
    label={(isCollapsed)? "Storyboards - 4":"Storyboards:"}
    iconAlign="left"
    onClick={() => setIsCollapsed(!isCollapsed)}
  >
    <ul>
      <li>Storyboard A</li>
      <li>Storyboard B</li>
      <li>Storyboard C</li>
      <li>Storyboard D</li>
    </ul>
  </Collapsible>
  <Collapsible
    a11yText="collapsible section"
    isCollapsed={isCollapsed}
    isDisabled={false}
    label={(isCollapsed)? "Collections - 10":"Collections:"}
    iconAlign="left"
    onClick={() => setIsCollapsed(!isCollapsed)}
  >
    <ul>
      <li>Collection A</li>
      <li>Collection B</li>
      <li>Collection C</li>
      <li>Collection D</li>
      <li>Collection E</li>
      <li>Collection F</li>
      <li>Collection G</li>
      <li>Collection H</li>
      <li>Collection I</li>
      <li>Collection J</li>
    </ul>
  </Collapsible>
  </Modal.Content>
  <Modal.Footer>
    <Button kind="primary">Install</Button>
    <Button kind="minor" onClick={handleCloseModal}>
      Cancel
    </Button>
  </Modal.Footer>
</Modal>
</React.Fragment>
  );
}

export default App;
