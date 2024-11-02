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
const GRAY_IMAGE = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4oaycRSKJnSJQf_KwOPQ1AN_97Swn80nfaw&s';
const DEFAUT_IMAGE =
  'https://cmsassets.rgpub.io/sanity/images/dsfx7636/game_data/1dec87dd6e583aa7031db63150d8b86611e2f177-1280x720.jpg?auto=format&fit=fill&q=80&w=956';
const array = [];
for (let i = 0; i < 100; i++) {
  array.push(defaultMember); // Or any other value you want
}

export default function PickRow(props) {
  return (
    <div className="wrapper-pick">
      <div className="ban-container">
        <div className="ban-team">
          <div className="ban-cell">
            <img width={60} height={60} src={props.t1banList[0]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={60} height={60} src={props.t1banList[1]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={60} height={60} src={props.t1banList[2]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
        </div>
        <div className="ban-team">
          <div className="ban-cell">
            <img width={60} height={60} src={props.t2banList[0]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={60} height={60} src={props.t2banList[1]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
          <div className="ban-cell">
            <img width={60} height={60} src={props.t2banList[2]?.profilePictureUrl || GRAY_IMAGE} />
          </div>
        </div>
      </div>
      <div className="grid-container-pick">
        <div className="player">
          <img
            className="player-avatar"
            src={props.t1PickList[0]?.profilePictureUrl || 'https://raw.githubusercontent.com/davidherasp/lol_images/master/role_lane_icons/TOP.png'}
          />
        </div>
        <div className="player">
          <img
            className="player-avatar"
            src={
              props.t1PickList[1]?.profilePictureUrl || 'https://raw.githubusercontent.com/davidherasp/lol_images/master/role_lane_icons/MIDDLE.png'
            }
          />
        </div>
        <div className="player">
          <img
            className="player-avatar"
            src={
              props.t1PickList[2]?.profilePictureUrl ||
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/degndao-3803ac5c-8d3b-4205-bdac-17e03fb712dd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlYzk3MGY0LTE3MDYtNDkxNS05YTkzLTQxZjNkOWM4MjAyY1wvZGVnbmRhby0zODAzYWM1Yy04ZDNiLTQyMDUtYmRhYy0xN2UwM2ZiNzEyZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dl2fyLAB4_80akvDhBoZ-4w7eforvxOeLLeqT1Jx2G4'
            }
          />
        </div>
        <div className="player">
          {' '}
          <img
            className="player-avatar"
            src={
              props.t1PickList[3]?.profilePictureUrl || 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/SUPPORT.png?raw=true'
            }
          />
        </div>
        <div className="player">
          {' '}
          <img
            className="player-avatar"
            src={
              props.t1PickList[4]?.profilePictureUrl ||
              'https://raw.githubusercontent.com/esports-bits/lol_images/refs/heads/master/role_lane_icons/ADC.png'
            }
          />
        </div>
        <div className="team">
          <div className="match">GRAND FINALS </div>
          <div className="patch">PATCH 14.6 </div>

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
              <div style={{ textAlign: 'center' }}>BLG</div>
              <div className="score">
                <h2>2</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="player">
          <img
            className="player-avatar"
            src={props.t2PickList[0]?.profilePictureUrl || 'https://raw.githubusercontent.com/davidherasp/lol_images/master/role_lane_icons/TOP.png'}
          />
        </div>
        <div className="player">
          <img
            className="player-avatar"
            src={
              props.t2PickList[1]?.profilePictureUrl || 'https://raw.githubusercontent.com/davidherasp/lol_images/master/role_lane_icons/MIDDLE.png'
            }
          />
        </div>
        <div className="player">
          <img
            className="player-avatar"
            src={
              props.t2PickList[2]?.profilePictureUrl ||
              'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2ec970f4-1706-4915-9a93-41f3d9c8202c/degndao-3803ac5c-8d3b-4205-bdac-17e03fb712dd.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJlYzk3MGY0LTE3MDYtNDkxNS05YTkzLTQxZjNkOWM4MjAyY1wvZGVnbmRhby0zODAzYWM1Yy04ZDNiLTQyMDUtYmRhYy0xN2UwM2ZiNzEyZGQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dl2fyLAB4_80akvDhBoZ-4w7eforvxOeLLeqT1Jx2G4'
            }
          />
        </div>
        <div className="player">
          {' '}
          <img
            className="player-avatar"
            src={
              props.t2PickList[3]?.profilePictureUrl || 'https://github.com/esports-bits/lol_images/blob/master/role_lane_icons/SUPPORT.png?raw=true'
            }
          />
        </div>
        <div className="player">
          {' '}
          <img
            className="player-avatar"
            src={
              props.t2PickList[4]?.profilePictureUrl ||
              'https://raw.githubusercontent.com/esports-bits/lol_images/refs/heads/master/role_lane_icons/ADC.png'
            }
          />
        </div>
      </div>
    </div>
  );
}
