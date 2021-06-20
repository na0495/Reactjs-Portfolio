import React from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mrabet Saad. All Rights Reserved.`,
  author: {
    name: 'Mrabet Saad',
    accounts: [
      {
        url: 'https://github.com/na0495/',
        label: 'Github Account',
        type: 'gray',
        icon: <FaGithub />
      },
      {
        url: '',
        label: 'Twitter Account',
        type: 'twitter',
        icon: <FaTwitter />
      },
      // {
      //   url: 'https://dev.to/m_ahmad',
      //   label: 'Dev Account',
      //   type: 'gray',
      //   icon: <FaDev />
      // },
      {
        url: 'https://www.linkedin.com/in/saad-mrabet-978a01188/',
        label: 'LinkedIn Account',
        type: 'linkedin',
        icon: <FaLinkedin />
      },
      // {
      //   url: 'https://www.quora.com/profile/Muhammad-Ahmad-66',
      //   label: 'Quora Account',
      //   type: 'red',
      //   icon: <FaQuora />
      // },
      {
        url: 'mailto:saadmrabet008@gmail.com',
        label: 'Mail saad',
        type: 'gray',
        icon: <FiMail />
      }
    ]
  }
};

export default siteConfig;
