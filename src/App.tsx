import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import GuestDateSelectionCard from './components/GuestDateSelectionCard';
import MyAppBar from './components/AppBar';
import { Container } from '@mui/material';
import ProductSelectionPage from './components/ProductSelectionPage';

export default function App() {
  return (
    <Container maxWidth="sm">
      <HashRouter>
        <MyAppBar />
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path={'/home'} element={<Home />} />
          <Route path={'/guests/:guestId/dates'} element={<GuestDateSelectionCard />} />
          <Route path={'/product'} element={<ProductSelectionPage />} />
        </Routes>
      </HashRouter>
    </Container>
  )
}