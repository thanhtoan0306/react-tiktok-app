import React, { useState, useEffect } from 'react';
import './index.css';

export default function ChampList(props) {
  const memberList = props.memberList || [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="wrapper">
      <div class="grid-container">
        {memberList.map(item => {
          return <div class="grid-item">1</div>;
        })}
         
      </div>
    </div>
  );
}
