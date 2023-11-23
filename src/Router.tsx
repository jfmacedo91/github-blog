import { Route, Routes } from 'react-router-dom';

import { DefaultLayout } from './layouts/DefaultLayout';
import { HomePage } from './pages/HomePage';
import { PostPage } from './pages/PostPage';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={ <DefaultLayout /> }>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/post/:id" element={ <PostPage /> } />
      </Route>
    </Routes>
  )
}