import React, { useState, useEffect } from 'react';
import useWebSocket from 'react-use-websocket';
import ChampList from './ChampList';
import PickRow from './PickRow';
import './index.css';
import CardChamp from './CardChamp';
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
const defaultMember2 = {
  actionId: 1,
  userId: '6816877011711280130',
  secUid: 'MS4wLjABAAAAgYMZOltceEx9DPaCeevFFAnpoVhBtteX-9Gv7WHXOcl_beSgg2qBUrm9AFadvSXn',
  uniqueId: 'thanh_dat962',
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

const array = [];
for (let i = 0; i < 100; i++) {
  const deepCopy = JSON.parse(JSON.stringify({ ...defaultMember, uniqueId: i, nickname: i }));

  array.push(deepCopy); // Or any other value you want
}
const PHASE = { BAN: 1, PICK: 2 };
const TEAM = { T1: 1, T2: 2 };
export default function ClientBlindPick() {
  const [lastMessage, setLastMessage] = useState(null);
  const [memberArray, setMemberArray] = useState(array);
  const [pickChamp, setPickChamp] = useState(defaultMember);
  const [t1banList, setT1banList] = useState([]);
  const [t2banList, setT2banList] = useState([]);
  const [t1PickList, setT1PickList] = useState([]);
  const [t2PickList, setT2PickList] = useState([]);
  const [confirmChampList, setComfirmChampList] = useState([]);

  const [phase, setPhase] = useState(PHASE.BAN);
  const [teamSwitch, setTeamSwitch] = useState(TEAM.T1);

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
  const checkState = () => {
    console.log({ t1banList, t2banList, t1PickList, t2PickList, phase, teamSwitch, confirmChampList });
  };
  const handleComfirmChamp = champ => {
    console.log('handleComfirm', champ);
    if (t2PickList.length > 4) {
      return;
    }
    setComfirmChampList([...confirmChampList, champ]);
    if (phase === PHASE.BAN) {
      if (teamSwitch === TEAM.T1) {
        setT1banList([...t1banList, champ]);
      }
      if (teamSwitch === TEAM.T2) {
        setT2banList([...t2banList, champ]);
        if (t2banList.length > 1) {
          setPhase(PHASE.PICK);
        }
      }
    }
    if (phase === PHASE.PICK) {
      if (teamSwitch === TEAM.T1) {
        setT1PickList([...t1PickList, champ]);
      }
      if (teamSwitch === TEAM.T2) {
        setT2PickList([...t2PickList, champ]);
      }
    }
    if (teamSwitch === TEAM.T1) {
      setTeamSwitch(TEAM.T2);
    }
    if (teamSwitch === TEAM.T2) {
      setTeamSwitch(TEAM.T1);
    }
  };

  return (
    <div>
      <div className="pick-zone">
        <div>
          <iframe
            width="400"
            height="230"
            src="https://www.youtube.com/embed/RqFZRIiduY4?si=ydlLdnGoJfgvFSFv"
            // title="YouTube video player"
            frameborder="0"
            // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            // allowfullscreen
          ></iframe>
          <div>
            <img src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/09/lich-thi-dau-cktg-2024.jpg" width={400} height={'auto'} />
          </div>
        </div>
        <ChampList
          memberArray={memberArray}
          pickChamp={pickChamp}
          onPickChamp={setPickChamp}
          onConfirmChamp={handleComfirmChamp}
          confirmChampList={confirmChampList}
        />
        <div>
          <CardChamp />
          <button onClick={checkState}>Check</button>
        </div>
      </div>

      <PickRow t1banList={t1banList} t2banList={t2banList} t1PickList={t1PickList} t2PickList={t2PickList} />
    </div>
  );
}
