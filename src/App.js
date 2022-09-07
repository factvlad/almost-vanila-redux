// import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { imagesSelector } from "./redux/pictures/selectors"
import { picturesSlice } from './redux/pictures/picturesSlice';
import './App.css';

// function App({ images }) 


function App() {
  const { actions: { initPicturesAction, addPicturesAction } } = picturesSlice
  const images = useSelector(imagesSelector)
  const dispatch = useDispatch()

  useEffect(() => {
    const axios = require('axios').default;
    const apiKey = '28723731-5c15bd07d095f3f0e05de01ba';

    const getImages = async (searchQuery, page) => {
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
      dispatch(initPicturesAction(data.hits))
    }
    getImages()
  }, [])


  return (
    <div className="App">
      <ul>{ images.map(item => <li key={ item.id }>
        <img src={ item.webformatURL } width="300" /></li>
      ) }</ul>
    </div>
  );
}

// const mapStateToProps = state => ({
//   images: state.images
// })
// export default connect(mapStateToProps)(App); //не смотрите сюда

export default (App)
