import React, { Component } from 'react';
import addons from '@storybook/addons';
import qrcode from 'qrcode';

class QrCodeImage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    qrcode.toCanvas(canvas, this.props.url , function (error) {
      if (error) { console.error(error) };
      console.log('success!');
    });
  }

  render() {
    return (
      <canvas id="canvas"></canvas>
    );
  }
}

addons.register('qr-code',
  function() {
    addons.addPanel('qr-code',// ここがURLのパラメータになる様子
      {
        title: 'qr-code',// これがタブに表示される
        render: function(active) {
          const sampleOn = active.active;// activeがtrueのときタブがカレント
          if(sampleOn) {
            console.log(location.href);
            const url = location.href;
            return(<QrCodeImage url={url} />);
          }
        },
      }
    );

  }
);