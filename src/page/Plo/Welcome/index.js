import React from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames/bind';
import { Container } from 'react-bootstrap';

import bridge from './img/bridge.png';

const cx = classNames.bind(styles);

const Welcome = () => {
  return (
    <Container>
      <div className={cx('main')}>
        <img alt='...' src={bridge} className={cx('bridge')} />
        <h2 className={cx('title-h2')}>Support Darwinia，Invest in the next generation of Web3.0 Metaverse</h2>
        <p className={cx('desc')}>We are bridging heterogeneous chains to build the Web3.0 Metaverse.</p>
        <button className={cx('sign-up-for-wautlist-btn')}>
          <span>Sign up for waitlist</span>
        </button>
      </div>
    </Container>
  );
};

export default React.memo(Welcome);
