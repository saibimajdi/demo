import React from 'react'
import QRCode from 'qrcode.react'


class QrComponent extends React.Component {
    render(){
        let url = 'http://saibimajdi.xyz/';
        return (
            <div className='row'>
                <QRCode value={url} />
            </div>
        )
    }
}

export default QrComponent