import React from 'react'; //eslint-disable-line
import StatusButton from './StatusButton';

const fetchFunc = (status) => {
  return new Promise((resolve, reject) => {
    if (status) setTimeout(resolve, 2000);
    else setTimeout(reject, 2000);
  })
  .then(() => { return true; })
  .catch(() => { return false; });
};

const fetchFunc200 = fetchFunc.bind(null, true);
const fetchFunc404 = fetchFunc.bind(null, false);

module.exports = function ({ storiesOf, action }) { //eslint-disable-line
  return storiesOf('StatusButton', module)
  .add('StatusButton None', () => (
    <div>
      <StatusButton btntxt="Купить" />
      <br />
    </div>
  ))
  .add('StatusButton Loading', () => (
    <div>
      <StatusButton btntxt="Купить" btnstatus="loading" />
      <br />
    </div>
  ))
  .add('StatusButton Success', () => (
    <div>
      <StatusButton btntxt="Купить" btnstatus="success" />
      <br />
    </div>
  ))
  .add('StatusButton Error', () => (
    <div>
      <StatusButton btntxt="Купить" btnstatus="error" />
      <br />
    </div>
  ))
  .add('StatusButton 200', () => (
    <div>
      <StatusButton btntxt="Купить" fetchfunc={fetchFunc200} />
      <br />
    </div>
  ))
  .add('StatusButton 404', () => (
    <div>
      <StatusButton btntxt="Купить" fetchfunc={fetchFunc404} />
      <br />
    </div>
  ));
};
