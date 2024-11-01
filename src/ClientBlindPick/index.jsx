import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import ChampList from './ChampList';
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
export default function ClientBlindPick() {
  const [lastMessage, setLastMessage] = useState(null);
  const [memberArray, setMemberArray] = useState([defaultMember]);
  //   const { sendMessage, lastMessage: socketMessage } = useWebSocket('ws://localhost:8080');

  //   useEffect(() => {
  //     setLastMessage(socketMessage);
  //     console.log(socketMessage);
  //     if (socketMessage?.data) {
  //       const memberJoin = JSON.parse(socketMessage?.data).data;
  //       console.log(memberJoin);
  //       //
  //       //
  //       setMemberArray([...memberArray, memberJoin]);
  //     }
  //   }, [socketMessage]);

  return (
    <div>
      <ChampList />
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/QphkgnxZ-oE?si=kneKBehwPffZTdVm"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
