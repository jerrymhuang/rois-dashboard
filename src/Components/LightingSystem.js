import { useEffect, useState } from 'react';
import ControlWidget from './ControlWidget';

const LightingDisplay = () => {
  const [status, setStatus] = useState(['on', 'on', 'on', 'on', 'on', 'on']);

  // useEffect(() => {
  //   fetch('http://128.113.47.13')
  //     .then(response => response.json())
  //     .then(data => {
  //       // Process the data here
  //     })
  //     .catch(error => {
  //       // Handle any errors here
  //     });
  // }, []);

  return (
    <div>
      <ControlWidget title="Lighting Display" statuses={status} />
    </div>
  );
};

export default LightingDisplay;
