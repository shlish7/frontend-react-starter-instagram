import React from 'react'
import { Link } from "react-router-dom";

import ImageAvatars from "../ImageAvatars.jsx";
import Verified from "../../assets/svg/verified.svg?react";
import MoreOptions from '../../assets/svg/more-options-icon.svg?react'
import hazinor from "../../assets/images/Hazinor.jpg";


export function FeedItemCreatorDetails() {
  return (
    <section className="img-title-container">
    <section className="avatar-and-user-details">
      <section className="avatar">
        <ImageAvatars
          img={hazinor}
          avatarHeight="30px !important"
          avatarWidth="30px !important"
        />
      </section>
      <section className="home-img-title-user-details">
        <section className="home-user-title-container">
          <Link to="/" className="home-title-user-name">
            User.Name
          </Link>
          <Verified className="home-title-verified" />
          <span className="home-title-dot">.</span>
          <time className="home-posted-time">15h</time>
        </section>
        <section className="home-title-details">
          <Link to="/">
            <span className="home-title-caption">
              veneris
              <span>.</span>
              Vivaldi Winter Drill #2
            </span>
          </Link>
        </section>
      </section>
    </section>

    <section className="home-page-img-title"></section>

    <section className="img-title-more-option">
      <MoreOptions className="home-more-options-icon" />
    </section>
  </section>
    )
}

