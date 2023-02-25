import { useState } from 'react';
import { invoke } from '@tauri-apps/api/tauri';
import { List, Avatar } from 'antd';

import { routeData } from './constants';

function HomePage() {
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
      <List
        dataSource={routeData}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://joesch.moe/api/v1/random" />}
              title={<a href={item.url}>{item.title}</a>}
              description="To write a page of drag and order"
            />
          </List.Item>
        )}
      />
    </section>
  );
}

export default HomePage;
