import React from 'react';
import { Link } from 'react-router-dom';
import LogoIMG from '../../assets/images/Logo_IMG.png';
import s from './Footer.module.css';

const Footer = () => {
  return (
    <div className={s.footer_div}>
      <div className={s.footer}>
        <Link to="/" alt="homepage" className={s.logo_link}>
          <img src={LogoIMG} className={s.Logo_IMG} alt="kidslike" />
        </Link>
        <div className={s.footerText}>
          Робимо життя батьків і дітей ізі &#9786;
        </div>
        <p className={s.footerSpan}>2019</p>
      </div>
    </div>
  );
};

export default Footer;
