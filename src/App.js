import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Navbar,Homepage,Cryptocurrencies,CryptoDetails,News } from './components'
import './App.css';
import { Layout, Typography, Space } from 'antd';

const App = () => {
    return (
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Routes>
                <Route path="/" element={<Homepage />}></Route>
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                ></Route>
                <Route path="/crypto/:id" element={<CryptoDetails />}></Route>
                <Route path="/news" element={<News />}></Route>
              </Routes>
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              Cryptogram <br />
              All rights reserverd.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    );
};

export default App;
