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

export default function ChampList(props) {
  const memberList = props.memberArray || [defaultMember];
  const [pickChamp, setPickChamp] = useState(defaultMember);
  return (
    <div>
      <div className="wrapper">
        <div class="grid-container">
          {memberList.map(item => {
            const hasId2 = props.confirmChampList.some(obj => obj.uniqueId === item.uniqueId);
            return (
              <div class="grid-item">
                <div>
                  <img
                    onClick={() => {
                      if (hasId2) {
                        return;
                      }

                      item.uniqueId;
                      props.onPickChamp(item);
                      console.log(item.uniqueId, props.pickChamp.uniqueId);
                    }}
                    className={`champ-avatar ${hasId2 ? 'gray-tinted-element' : ''} ${
                      item.uniqueId === props.pickChamp.uniqueId ? 'champ-select' : ''
                    }`}
                    width={80}
                    height={80}
                    style={{ objectFit: 'cover' }}
                    src={item.profilePictureUrl || DEFAUT_IMAGE}
                  />
                  <div className="champ-name">{item.nickname}</div>
                </div>
              </div>
            );
          })}
           
        </div>
        <div className="button-container">
          <button
            style={{ width: 300 }}
            onClick={() => {
              const hasId2 = props.confirmChampList.some(obj => obj.uniqueId === props.pickChamp.uniqueId);
              if (hasId2) {
                return;
              }
              props.onConfirmChamp(props.pickChamp);
            }}
            className="button"
          >
            LOCK IN
          </button>
        </div>
      </div>
    </div>
  );
}
