import React, { useState } from 'react';
import { openContentForm } from './DistrictContent';
import Modal from './Modal';

const SeoulDistrictButtons = () => {
    
    const handleButtonClick = (districtName) => {
        openContentForm(districtName);
    };

    const districts = [
        { name: 'SeoDaeMun', top: '290px', left: '582px' },
        { name: 'JongNo', top: '226px', left: '660px' },
        { name: 'EunPyeong', top: '175px', left: '550px' },
        { name: 'SeongBuk', top: '218px', left: '698px' },
        { name: 'DongDaeMun', top: '293px', left: '776px' },
        { name: 'GangBuk', top: '115px', left: '713px' },
        { name: 'DoBong', top: '83px', left: '755px' },
        { name: 'NoWon', top: '85px', left: '815px' },
        { name: 'JungNang', top: '258px', left: '855px' },
        { name: 'GwangJin', top: '362px', left: '835px' },
        { name: 'SeongDong', top: '371px', left: '750px' },
        { name: 'Jung', top: '366px', left: '667px' },
        { name: 'YongSan', top: '409px', left: '644px' },
        { name: 'MaPo', top: '318px', left: '501px' },
        { name: 'GangSeo', top: '283px', left: '360px' },
        { name: 'YangCheon', top: '408px', left: '437px' },
        { name: 'GuRo', top: '488px', left: '423px' },
        { name: 'YeongDeungPo', top: '400px', left: '533px' },
        { name: 'DongJak', top: '480px', left: '570px' },
        { name: 'GeumCheon', top: '549px', left: '518px' },
        { name: 'GwanAk', top: '535px', left: '571px' },
        { name: 'SeoCho', top: '469px', left: '682px' },
        { name: 'GangNam', top: '451px', left: '747px' },
        { name: 'SongPa', top: '423px', left: '842px' },
        { name: 'GangDong', top: '353px', left: '920px' },
    ];

    return (
        <div>
            {districts.map((district, index) => (
                <img
                    key={index}
                    src={require(`./mapImage/${district.name}.png`)} 
                    style={{
                        position: 'absolute',
                        top: district.top,
                        left: district.left,
                        cursor: 'pointer',
                    }}
                    alt={district.name}
                    onClick={() => handleButtonClick(district.name)}
                />
            ))}

        </div>
    );
}

export default SeoulDistrictButtons;