import React from 'react';
import styles from 'stylesheets/contacts';
import Icon from 'react-icons-kit';
import {github, linkedin, instagram} from 'react-icons-kit/fa';

/**
 * Maybe you should use material-ui Icon components instead?
 */

const Contacts = () => {
  return (
    <div className={styles.contacts__wrapper}>
      <Icon
        className="contact__icon"
        onClick={() => window.open('https://github.com/aungger')}
        icon={github}
        size="20"
      />
      <Icon
        className="contact__icon"
        onClick={() => window.open('https://www.linkedin.com/in/albertung')}
        icon={linkedin}
        size="20"
      />
      <Icon
        className="contact__icon"
        onClick={() => window.open('https://www.instagram.com/alby.ung/')}
        icon={instagram}
        size="20"
      />
    </div>
  );
};

export default Contacts;
