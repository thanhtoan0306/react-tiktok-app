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

export default function PickRow(props) {
  const memberList = props.memberList || array;
  return (
    <div className="wrapper-pick">
      <div className="ban-container">
        <div className="ban-team">
          <div className="ban-cell">
            <img width={80} height={80} src={DEFAUT_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={80} height={80} src={DEFAUT_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={80} height={80} src={DEFAUT_IMAGE} />
          </div>
        </div>
        <div className="ban-team">
          <div className="ban-cell">ban-container</div>
          <div className="ban-cell">ban-container</div>
          <div className="ban-cell">ban-container</div>
        </div>
      </div>
      <div className="grid-container-pick">
        <div className="player">
          <img className="player-avatar" src="https://i.pinimg.com/474x/cd/e9/37/cde9376a994f7e736a85a42e47ec7f9d.jpg" />
        </div>
        <div className="player">
          <img className="player-avatar" src={defaultMember.profilePictureUrl} />
        </div>
        <div className="player">
          <img className="player-avatar" src={DEFAUT_IMAGE} />
        </div>
        <div className="player">4</div>
        <div className="player">5</div>
        <div className="team">
          <div className="match">GRAND FINALS </div>
          <div className="patch">GRAND FINALS </div>

          <div className="team-logo-contaniner">
            <div className="each-team">
              <img
                width={80}
                height={'auto'}
                src="https://am-a.akamaihd.net/image?resize=96:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1726801573959_539px-T1_2019_full_allmode.png"
              />
              <div style={{ textAlign: 'center' }}>SKT</div>
              <div className="score">
                <h2>2</h2>
              </div>
            </div>
            <div style={{ marginTop: '30px' }}>VS</div>
            <div className="each-team">
              <img
                width={80}
                height={'auto'}
                src={
                  'https://am-a.akamaihd.net/image?resize=96:&f=http%3A%2F%2Fstatic.lolesports.com%2Fteams%2F1682322954525_Bilibili_Gaming_logo_20211.png'
                }
              />
              <div style={{ textAlign: 'center' }}>SKT</div>
              <div className="score">
                <h2>2</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="player">1</div>
        <div className="player">2</div>
        <div className="player">3</div>
        <div className="player">4</div>
        <div className="player">5</div>
      </div>
    </div>
  );
}
