import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"

import "./global.css";


const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'Educator @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. 🚀' },
      { type: 'link', content: '👉 https://github.com/diego3g' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' }, 
    ],
    publishedAt: new Date('2022-09-03 20:30:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/hugosaraiva93.png',
      name: 'Hugo Saraiva',
      role: 'CTO @Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋', },
      { type: 'paragraph', content: 'Acabei de subir um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da RocketSeat. 🚀' },
      { type: 'link', content: '👉 https://github.com/hugosaraiva93' },
      { type: 'link', content: '#novoprojeto #nlw #rocketseat' }, 
    ],
    publishedAt: new Date('2022-09-10 10:00:00'),
  },
];


export function App() {
  return (
    <div>
      <Header />
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
  )
}

