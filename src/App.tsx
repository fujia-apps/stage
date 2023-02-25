import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { Button } from 'antd';

function App() {
  const [greetMsg, setGreetMsg] = useState('');
  const [name, setName] = useState('');

  async function greet() {
    // Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
    setGreetMsg(await invoke('greet', { name }));

    const sayHiRes = await invoke('say_hi', { name });
    console.log(sayHiRes);
  }

  return (
    <section className="container">
      <Button>Antd</Button>
    </section>
  );
}

export default App;
