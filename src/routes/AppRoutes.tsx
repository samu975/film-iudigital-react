import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DirectorDetail from '../pages/Director/DirectorDetail';
import DirectorForm from '../pages/Director/DirectorForm';
import DirectorList from '../pages/Director/DirectorList';
import FilmDetail from '../pages/Film/FilmDetail';
import FilmForm from '../pages/Film/FilmForm';
import FilmList from '../pages/Film/FilmList';
import GenreDetail from '../pages/Genre/GenreDetail';
import GenreForm from '../pages/Genre/GenreForm';
import GenreList from '../pages/Genre/GenreList';
import ProducerDetail from '../pages/Producer/ProducerDetail';
import ProducerForm from '../pages/Producer/ProducerForm';
import ProducerList from '../pages/Producer/ProducerList';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Director */}
        <Route path="/director/:id" element={<DirectorDetail />} />
        <Route path="/director/form" element={<DirectorForm />} />
        <Route path="/director/list" element={<DirectorList />} />

        {/* Film */}
        <Route path="/film/:id" element={<FilmDetail />} />
        <Route path="/film/form" element={<FilmForm />} />
        <Route path="/film/list" element={<FilmList />} />

        {/* Genre */}
        <Route path="/genre/:id" element={<GenreDetail />} />
        <Route path="/genre/form" element={<GenreForm />} />
        <Route path="/genre/list" element={<GenreList />} />

        {/* Producer */}
        <Route path="/producer/:id" element={<ProducerDetail />} />
        <Route path="/producer/form" element={<ProducerForm />} />
        <Route path="/producer/list" element={<ProducerList />} />

        {/* Types
        Agregar si se hacen tipes
        <Route path="/types/series" element={<Series />} />
        <Route path="/types/movies" element={<Movies />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
