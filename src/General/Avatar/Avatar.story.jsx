import React from 'react'; //eslint-disable-line
import Avatar from './Avatar';

module.exports = function ({ storiesOf, action }) {
  return storiesOf('Avatar', module)
    .add('Empty + shadow + border', () => (
      <div>
        <Avatar />
        <Avatar classes="shadow" />
        <Avatar bordercolor="rgba(180,180,180,1)" />
        <Avatar bordercolor="rgba(180,0,0,1)" />
        <Avatar bordercolor="rgba(34,177,76,1)" />
        <Avatar bordercolor="rgba(0,0,180,1)" />
        <br />
        <Avatar classes="border-radius" />
        <Avatar classes="border-radius shadow" />
        <Avatar classes="border-radius" bordercolor="rgba(180,180,180,1)" />
        <Avatar classes="border-radius" bordercolor="rgba(180,0,0,1)" />
        <Avatar classes="border-radius" bordercolor="rgba(34,177,76,1)" />
        <Avatar classes="border-radius" bordercolor="rgba(0,0,180,1)" />
        <br />
        <Avatar classes="circle" />
        <Avatar classes="circle shadow" />
        <Avatar classes="circle" bordercolor="rgba(180,180,180,1)" />
        <Avatar classes="circle" bordercolor="rgba(180,0,0,1)" />
        <Avatar classes="circle" bordercolor="rgba(34,177,76,1)" />
        <Avatar classes="circle" bordercolor="rgba(0,0,180,1)" />
      </div>
    ))
    .add('Online', () => (
      <div>
        <Avatar classes="online" />
        <Avatar classes="online shadow" />
        <Avatar classes="online" bordercolor="rgba(180,180,180,1)" />
        <Avatar classes="online" bordercolor="rgba(180,0,0,1)" />
        <Avatar classes="online" bordercolor="rgba(34,177,76,1)" />
        <Avatar classes="online" bordercolor="rgba(0,0,180,1)" />
        <br />
        <Avatar classes="border-radius online" />
        <Avatar classes="border-radius online shadow" />
        <Avatar classes="border-radius online" bordercolor="rgba(180,180,180,1)" />
        <Avatar classes="border-radius online" bordercolor="rgba(180,0,0,1)" />
        <Avatar classes="border-radius online" bordercolor="rgba(34,177,76,1)" />
        <Avatar classes="border-radius online" bordercolor="rgba(0,0,180,1)" />
        <br />
        <Avatar classes="circle online" />
        <Avatar classes="circle online shadow" />
        <Avatar classes="circle online" bordercolor="rgba(180,180,180,1)" />
        <Avatar classes="circle online" bordercolor="rgba(180,0,0,1)" />
        <Avatar classes="circle online" bordercolor="rgba(34,177,76,1)" />
        <Avatar classes="circle online" bordercolor="rgba(0,0,180,1)" />
      </div>
      ))
      .add('Badge', () => (
        <div>
          <Avatar classes="online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/star20.png" />
          <Avatar classes="border-radius online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/star20.png" />
          <Avatar classes="circle online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/star20.png" />
          <br />
          <Avatar classes="online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/badge2_20.png" />
          <Avatar classes="border-radius online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/badge2_20.png" />
          <Avatar classes="circle online" bordercolor="rgba(34,177,76,1)" badge="http://137.74.56.40:5000/assets/avatar/badge2_20.png" />
        </div>
      ))
      .add('Foto+placeholder', () => (
        <div>
          <Avatar classes="online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/avatar50.jpg" />
          <Avatar classes="border-radius online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/avatar50.jpg" />
          <Avatar classes="circle online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/avatar50.jpg" />
          <p>Wrong url:</p>
          <Avatar classes="online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/404.jpg" />
          <Avatar classes="border-radius online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/404.jpg" />
          <Avatar classes="circle online" bordercolor="rgba(34,177,76,1)" imgsrc="http://137.74.56.40:5000/assets/avatar/404.jpg" />

        </div>
      ));
};
