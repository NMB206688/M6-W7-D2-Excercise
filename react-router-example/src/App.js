import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

import Posts from "./features/posts/Posts";
import PostLists from "./features/posts/PostLists";
import Post from "./features/posts/Post";

export default function App() {
  return (
    <Router>
      <NavBar />
      <MainLayout>
        <Routes>
          {/* Core pages */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* Blog (nested routes) */}
          <Route path="/posts" element={<Posts />}>
            <Route index element={<PostLists />} />
            <Route path=":slug" element={<Post />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}
