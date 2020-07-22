import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LogoIMG from '../../assets/images/Logo_IMG.png';
import s from './Footer.module.css';
import { getIsShowLengRu } from '../../redux/global/globalSelectors';

const Footer = () => {
  const isShoWLangRu = useSelector(getIsShowLengRu);

  if (!isShoWLangRu) {
    return (
      <div className={s.footer_div}>
        <div className={s.footer}>
          <Link to="/" alt="homepage" className={s.logo_link}>
            <img src={LogoIMG} className={s.Logo_IMG} alt="kidslike" />
          </Link>
          <div className={s.footerText}>
            Робимо життя батьків і дітей ізі &#9786;
            {/* Делаем жизнь родителей и детей изи &#9786; */}
          </div>
          <p className={s.footerSpan}>2019</p>
        </div>
      </div>
    );
  }

  return (
    <div className={s.footer_div}>
      <div className={s.footer}>
        <Link to="/" alt="homepage" className={s.logo_link}>
          <img src={LogoIMG} className={s.Logo_IMG} alt="kidslike" />
        </Link>
        <div className={s.footerText}>
          {/* Робимо життя батьків і дітей ізі &#9786; */}
          Делаем жизнь родителей и детей изи &#9786;
        </div>
        <p className={s.footerSpan}>2019</p>
      </div>
    </div>
  );
};

export default Footer;
