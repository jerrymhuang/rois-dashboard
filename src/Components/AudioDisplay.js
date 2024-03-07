import { useEffect, useState } from 'react';
import ControlWidget from './ControlWidget';

const AudioDisplay = () => {
  const [status, setStatus] = useState(['on', 'off', 'on']);
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
      <ControlWidget title="Audio Display" statuses={status} />
    </div>
  );
};

export default AudioDisplay;
