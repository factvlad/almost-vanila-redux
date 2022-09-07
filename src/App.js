// import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imagesSelector } from "./redux/pictures/selectors"
import { picturesSlice } from './redux/pictures/picturesSlice';
import { loaderSlice } from './redux/loader/loaderSlice';
import { nanoid } from '@reduxjs/toolkit';
import './App.css';
import { loaderSelector } from './redux/loader/selectors';

// function App({ images }) 


function App() {
  const { actions: { initPicturesAction, addPicturesAction } } = picturesSlice
  const { actions: { onLoader, offLoader } } = loaderSlice
  const images = useSelector(imagesSelector)
  const loader = useSelector(loaderSelector)
  const dispatch = useDispatch()

  const [page, setPage] = useState(1)


  useEffect(() => {
    const axios = require('axios').default;
    const apiKey = '28723731-5c15bd07d095f3f0e05de01ba';
  
    const getImages = async (searchQuery) => {
      try {
        dispatch(onLoader())
        const { data } = await axios.get(`https://pixabay.com/api/`, {
          params: {
            key: apiKey,
            page,
            q: searchQuery,
            orientation: 'horizontal',
            safesearch: `true`,
            per_page: 12,
          },
        });
        dispatch(page > 1 ? addPicturesAction(data.hits) : initPicturesAction(data.hits))
        dispatch(offLoader())
      } catch (error) {
        dispatch(offLoader())
      }
    }
    getImages()
  }, [page])


  return (
    <div className="App">
      { loader && <h1>LOADING........</h1> }
      <ul>{ images.map(item => <li key={ nanoid() }>
        <img src={ item.webformatURL } width="300" alt='blabla' /></li>
      ) }
      </ul>
      <button type='button' onClick={ () => setPage(page + 1) }> Load more...</button>
    </div>
  );
}

// const mapStateToProps = state => ({
//   images: state.images
// })
// export default connect(mapStateToProps)(App); //не смотрите сюда

export default (App)
