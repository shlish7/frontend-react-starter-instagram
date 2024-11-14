import React from "react";
import { Link } from "react-router-dom";

import ImageAvatars from "../ImageAvatars";

export default function ProfileHeader({ feedItems, user }) {
  return (
    <>
      <header className="profile-main-header">
        <section className="profile-pic">
          <ImageAvatars
            img={user.imgUrl}
            avatarHeight="150px !important"
            avatarWidth="150px !important"
          />
        </section>
        <section className="header-btns">
          <section className="profile-link-buttons">
            <Link className="profile-link-button">Edit Profile</Link>
            <Link className="profile-link-button">View Archive</Link>
          </section>
          <section className="profile-follows-lists">
            <section className="profile-follows">
              <span className="profile-counts">200</span>
              <span>Posts</span>
            </section>
            <section className="profile-follows">
              <span className="profile-counts">500</span>
              <span>Followers</span>
            </section>
            <section className="profile-follows">
              <span className="profile-counts">
                {user?.following?.map((item, idx) => {
                  item.userId === user._id;
                })}
              </span>
              <span>Following</span>
            </section>
          </section>
        </section>
        <h1>Test2</h1>
      </header>
    </>
  );
}
