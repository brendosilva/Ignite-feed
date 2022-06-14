import { useState } from 'react'
import { Header } from './components/Header.jsx'
import { Post } from './Post.jsx'
import { Sidebar } from './components/Sidebar'


import styles from './App.module.css'
import './global.css'


export function App() {


  return (
    <div>
      <Header></Header>
      <div className={styles.wrapper}>
        <Sidebar></Sidebar>
        <main>
          <Post
            author="Brendo Silva"
            content="olá mundo sou dev backend aprendendo sobre front"
          />
        </main>
      </div>
    </div>

  )
}


