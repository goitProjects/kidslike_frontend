/* eslint-disable import/extensions */
import React from 'react';
import styles from './ContactsPages.module.css';
import Contacts from '../../utils/contactsInfo.js';

const ContactsPage = () => {
  return (
    <div className={styles.contacts}>
      <p className={styles.contacts_main_tittle}>Наша команда</p>
      <p className={styles.contacts_second_tittle}>
        Завжди готові до нових викликів!
      </p>
      <ul className={styles.contacts_all_card}>
        {Contacts.map(el => (
          <li className={styles.contacts_card} key={el.id}>
            <img
              className={styles.contacts_img}
              src={el.avatar}
              alt=""
              width="280"
              height="245"
            />
            <p className={styles.contacts_name}>{el.name}</p>
            <p className={styles.contacts_possition}>{el.position}</p>
            <p className={styles.contacts_mail}>{el.contacts}</p>
            <p className={styles.contacts_possition_describe}>
              {el.description}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactsPage;
