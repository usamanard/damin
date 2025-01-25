
// src/app/components/QrCode.jsx
"use client";
import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

const QrCode = () => {
    const qrLink = 'https://damin-gamma.vercel.app/redirect'; // Point to the new redirect page

    return (
      <div className="flex flex-col  ">
        <QRCodeCanvas value={qrLink} size={55} />
        
      </div>
    );
}

export default QrCode