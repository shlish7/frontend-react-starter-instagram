import React from "react";
import {  Routes, Route } from "react-router";

import { HomePage } from "./pages/HomePage";
import { ChatApp } from "./pages/Chat.jsx";
import { UserDetails } from "./pages/UserDetails";
import { LeftSideBar } from "./cmps/LeftSideBar.jsx";
import { Profile } from "./pages/Profile.jsx";
// import { FeedItemFullScreen } from "./pages/FeedItemFullScreen.jsx";
import { FeedItemFullScreen } from "./pages/FeedItemFullScreen.jsx";
import { Stories } from "./pages/Stories";

export function RootCmp() {
  return (
    <div className="instagram-app">
      {/* <AppHeader /> */}
      <main>

        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/p/:pId?" element={<FeedItemFullScreen />} />
            {/* <Route path="/stories/:userName?" element={<Stories />} /> */}
          </Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>

      </main>
      {/* <AppFooter /> */}
    </div>
  );
}