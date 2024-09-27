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

          {/* 
                    <Route path="about" element={<AboutUs />}>
                        <Route path="team" element={<AboutTeam />} />
                        <Route path="vision" element={<AboutVision />} />
                    </Route>
                    <Route path="car" element={<CarIndex />} />
                    <Route path="car/:carId" element={<CarDetails />} />
                    <Route path="user/:id" element={<UserDetails />} />
                    <Route path="board" element={<BoardIndex />} />
                    <Route path="board/:boardId" element={<BoardDetails />} >
                        <Route path="group/:groupId/task/:taskId" element={<TaskDetails />} />
                    </Route>
                    <Route path="review" element={<ReviewIndex />} />
                    <Route path="chat" element={<ChatApp />} />
                    <Route path="admin" element={<AdminIndex />} /> */}
        </Routes>

      </main>
      {/* <AppFooter /> */}
    </div>
  );
}