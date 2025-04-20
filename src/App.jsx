import React, { useState } from 'react'
import './App.css'

function App() {

  const [count, setCount] = useState(0)
  const [cssName, setCssName] = useState('selected')
  const [id, setId] = useState('')
  const [watchlist, setWatchList] = useState('watchlist-image')


  const [movies, setMovies] = useState([
    {
      name: "The Sky Force",
      image: '/The Sky Force.png',
      watchlist: '/add.png'
    },
    {
      name: "Lets Meet",
      image: '/Lets Meet.png',
      watchlist: '/add.png'
    },
    {
      name: "The Sky Force 1",
      image: '/The Sky Force.png',
      watchlist: '/add.png'
    },
    {
      name: "Lets Meet 1",
      image: '/Lets Meet.png',
      watchlist: '/add.png'
    },
    {
      name: "The Sky Force 2",
      image: '/The Sky Force.png',
      watchlist: '/add.png'
    },
    {
      name: "Lets Meet 2",
      image: '/Lets Meet.png',
      watchlist: '/add.png'
    },
    {
      name: "The Sky Force 3",
      image: '/The Sky Force.png',
      watchlist: '/add.png'
    },
    {
      name: "Lets Meet 3",
      image: '/Lets Meet.png',
      watchlist: '/add.png'
    },
    {
      name: "The Sky Force 4",
      image: '/The Sky Force.png',
      watchlist: '/add.png'
    },
    {
      name: "Lets Meet 4",
      image: '/Lets Meet.png',
      watchlist: '/add.png'
    }
  ])

  const [selected, setSelected] = useState([])

  const addToWatchlist = (index) => {

    if (movies[index].watchlist == '/remove.png') {
      setCount(count - 1)
      movies[index].watchlist = '/add.png'
      setMovies([...movies])

      for (let i = 0; i < selected.length; i++) {
        if (selected[i].name == movies[index].name) {
          selected.splice(i, 1)
          setSelected([...selected])
        }
      }
    }


    else {
      setCount(count + 1)
      movies[index].watchlist = '/remove.png'
      setMovies([...movies])
      setSelected([...selected, movies[index]])
    }
  }


  const showMovies = () => {
    setCssName('visible')
    setWatchList('not-allowed')
    setId('main')
  }

  return (
    <>
      <div className='main' id={id}>
        <div className='first'>
          <img src="/logo.png" width="100" />

          <button id='watchlist-btn' onClick={() => { showMovies() }}>Watchlist : {count}</button>
        </div>
        <br />

        <br /><br />
        <br />
        <div className='second'>

          {movies.map((item, index) =>
            <div id='movie' key={index}>
              <img src={item.image} height="200" />
              <div id="watchlist">
                <p id="para">{item.name}</p>
                <img
                  id={watchlist}
                  src={item.watchlist}
                  width="25"
                  onClick={() => { addToWatchlist(index) }} />
              </div>
            </div>
          )}
        </div>

        <div className={cssName}>
          <img
            src="/cut.png"
            width="30"
            id="close-btn"
            onClick={() => {
              setCssName('selected')
              setId('')
              setWatchList('watchlist-image')
            }}
          />

          {selected.map((item, index) =>
            <div key={index} id="s-movies">
              <img src={item.image} width="25" />
              <h3>{item.name}</h3>
            </div>
          )}
        </div>




      </div>


    </>
  )
}

export default App