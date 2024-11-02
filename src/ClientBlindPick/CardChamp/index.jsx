import React, { useState, useEffect } from 'react';
import './index.css';
const defaultMember = {
  actionId: 1,
  userId: '6816877011711280130',
  secUid: 'MS4wLjABAAAAgYMZOltceEx9DPaCeevFFAnpoVhBtteX-9Gv7WHXOcl_beSgg2qBUrm9AFadvSXn',
  uniqueId: 'thanh_dat96',
  nickname: 'Đạt-Ka nhạt',
  profilePictureUrl:
    'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7328095186808995847.webp?lk3s=a5d48078&nonce=23206&refresh_token=edf4485d9e806d343fec847140d04b5c&x-expires=1730638800&x-signature=40txYm5R4ixsJqeDOGwoU6XL0%2Fo%3D&shp=a5d48078&shcp=fdd36af4',
  followRole: 0,
  userBadges: [
    {
      type: 'privilege',
      privilegeId: '7138381176787490596',
      level: 4,
      badgeSceneType: 8,
    },
  ],
  userSceneTypes: [8],
  userDetails: {
    createTime: '0',
    bioDescription: '',
    profilePictureUrls: [
      'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/7328095186808995847~tplv-tiktok-shrink:72:72.webp?lk3s=a5d48078&nonce=99491&refresh_token=93b9b94e271da1b7e9b65ce06540cb4e&x-expires=1730638800&x-signature=M4o5FgxPIzB6Nss1vIwo7ZLKp70%3D&shp=a5d48078&shcp=fdd36af4',
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7328095186808995847.webp?lk3s=a5d48078&nonce=23206&refresh_token=edf4485d9e806d343fec847140d04b5c&x-expires=1730638800&x-signature=40txYm5R4ixsJqeDOGwoU6XL0%2Fo%3D&shp=a5d48078&shcp=fdd36af4',
      'https://p9-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7328095186808995847.webp?lk3s=a5d48078&nonce=9452&refresh_token=cafad436b39699d026d1bf77c15757e2&x-expires=1730638800&x-signature=859OyfOqekUvekVzv6d9KbpNlIM%3D&shp=a5d48078&shcp=fdd36af4',
      'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/7328095186808995847.jpeg?lk3s=a5d48078&nonce=96594&refresh_token=43b5c2f8fc31ba664187890c7a396f2e&x-expires=1730638800&x-signature=j5gr8sZpZ42x3KBvZFlXuRdNpBs%3D&shp=a5d48078&shcp=fdd36af4',
    ],
  },
  followInfo: {
    followingCount: 421,
    followerCount: 26,
    followStatus: 0,
    pushStatus: 0,
  },
  isModerator: false,
  isNewGifter: false,
  isSubscriber: false,
  topGifterRank: null,
  gifterLevel: 4,
  teamMemberLevel: 0,
  msgId: '7432298532985572112',
  createTime: '1730466851840',
  label: '{0:user} joined',
  displayType: 'live_room_enter_toast',
};
const DEFAUT_IMAGE =
  'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/1dec87dd6e583aa7031db63150d8b86611e2f177-1280x720.jpg?auto=format&fit=fill&q=80&w=956';
const array = [];
for (let i = 0; i < 100; i++) {
  array.push(defaultMember); // Or any other value you want
}

export default function CardChamp(props) {
  const memberList = props.memberList || array;
  return (
    <div className="wrapper-card">
      <img width={250} height={350} src={defaultMember.profilePictureUrl} />
      <div className="rune-avatar">
        <img style={{ borderRadius: '50%' }} width={40} height={40} src="https://pbs.twimg.com/media/GKbyumVWgAAdAhs.jpg" />
        <img style={{ borderRadius: '50%' }} width={40} height={40} src="https://ddragon.leagueoflegends.com/cdn/14.21.1/img/profileicon/546.png" />
        <img style={{ borderRadius: '50%' }} width={60} height={60} src="https://i.redd.it/nls87rjmn7o31.jpg" />

        <img width={40} height={40} src="https://i.pinimg.com/474x/58/12/00/5812006cb941167209f1301920dc18e4.jpg" />
        <img
          width={40}
          height={40}
          src="https://yt3.googleusercontent.com/AjySiY7h1dO3tFVIFMKZyv2eSWaCELxAQrkrdqjNN09hGaVahbf-JE5iVO-iMLkCjhWZ_RzDww=s900-c-k-c0x00ffffff-no-rj"
        />
      </div>
      <div>
        <div>{defaultMember.nickname}</div>
      </div>
    </div>
  );
}
