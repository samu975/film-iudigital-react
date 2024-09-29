import { Routes, Route } from 'react-router-dom';
import DirectorForm from '../pages/Director/DirectorForm';
import DirectorList from '../pages/Director/DirectorList';
import FilmDetail from '../pages/Film/FilmDetail';
import FilmForm from '../pages/Film/FilmForm';
import FilmList from '../pages/Film/FilmList';
import GenreList from '../pages/Genre/GenreList';
import ProducerList from '../pages/Producer/ProducerList';
import Home from '../pages/Home/Home';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Director */}
      <Route path="/director/form" element={<DirectorForm />} />
      <Route path="/director/list" element={<DirectorList />} />

      {/* Film */}
      <Route path="/film/:id" element={<FilmDetail />} />
      <Route path="/film/form" element={<FilmForm />} />
      <Route path="/film/form/:id" element={<FilmForm />} />
      <Route path="/film/list" element={<FilmList />} />

      {/* Genre */}
      <Route path="/genre/list" element={<GenreList />} />

      {/* Producer */}
      <Route path="/producer/list" element={<ProducerList />} />
    </Routes>
  );
};

export default AppRoutes;
