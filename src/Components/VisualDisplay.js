import { useEffect, useState } from 'react';
import ControlWidget from './ControlWidget';

const VisualDisplay = () => {
  const [status, setStatus] = useState(['on', 'on', 'on', 'on', 'off', 'on', 'on', 'on']);

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
      <ControlWidget title="Visual Display" statuses={status} />
    </div>
  );
};

export default VisualDisplay;
