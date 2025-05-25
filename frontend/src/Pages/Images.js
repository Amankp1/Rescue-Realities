import React, { useEffect } from 'react';
import '../Components/box.css';
import './Images.css';
import NuclearImage from '../Assets/Img/Nuclear_dis.jpeg';
import RadioImage from '../Assets/Img/Radio_dis.jpeg';
import ChemicalImage from '../Assets/Img/Chemical_dis.jpeg';

function Images() {

    useEffect(() => {
        // Your JavaScript code here
        document.getElementById('next').onclick = function() {
          let lists = document.querySelectorAll('.item');
          document.getElementById('slide').appendChild(lists[0]);
        };
        document.getElementById('prev').onclick = function() {
          let lists = document.querySelectorAll('.item');
          document.getElementById('slide').prepend(lists[lists.length - 1]);
        };
      }, []);

      const myStyle = {
        marginTop: '2000px',
      };

  return (
    <div className="container_img" style={myStyle}>
      <div id="slide">
        <div className="item" style={{ backgroundImage: `url(${NuclearImage})` }}>
          <div className="content">
            <div className="name">Nuclear Disaster</div>
            {/* <div className="des">Tinh ru anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu</div>
            <button>See more</button> */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${RadioImage})` }}>
          <div className="content">
            <div className="name">Radiological Disaster</div>
            {/* <div className="des">Tinh ru anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu</div>
            <button>See more</button> */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${ChemicalImage})` }}>
          <div className="content">
            <div className="name">Chemical Disaster</div>
            {/* <div className="des">Tinh ru anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu</div>
            <button>See more</button> */}
          </div>
        </div>
        <div className="item" style={{ backgroundImage: `url(${RadioImage})` }}>
          <div className="content">
            <div className="name">Biological Disaster</div>
            {/* <div className="des">Tinh ru anh đi chạy phố, chưa kịp chạy phố thì anh chạy mất tiêu</div>
            <button>See more</button> */}
          </div>
        </div>
      </div>
      <div className="buttons">
        <button id="prev"><i className="fa-solid fa-angle-left" /></button>
        <button id="next"><i className="fa-solid fa-angle-right" /></button>
      </div>
    </div>
  );
}

export default Images;
