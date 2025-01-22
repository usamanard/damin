
// src/app/components/QrCode.jsx
"use client";
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCode = () => {
    const qrLink = 'http://192.168.22.1:3000/redirect'; // Point to the new redirect page

    return (
      <div className="flex flex-col  ">
        <QRCodeCanvas value={qrLink} size={55} />
        
      </div>
    );
}

export default QrCode






