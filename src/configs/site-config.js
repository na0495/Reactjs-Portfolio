import React from "react";
import {
  BrandGithub,
  BrandLinkedin,
  BrandeTwitter,
  Mail,
} from "tabler-icons-react";

const siteConfig = {
  copyright: `Copyright © ${new Date().getFullYear()} Mrabet Saad. All Rights Reserved.`,
  author: {
    name: "Mrabet Saad",
    accounts: [
      {
        url: "https://github.com/na0495/",
        label: "Github Account",
        type: "gray",
        icon: <BrandGithub />,
      },
      {
        url: "https://twitter.com/na0495",
        label: "Twitter Account",
        type: "twitter",
        icon: <BrandeTwitter />,
      },
      {
        url: "https://www.linkedin.com/in/saad-mrabet-978a01188/",
        label: "LinkedIn Account",
        type: "linkedin",
        icon: <BrandLinkedin />,
      },
      {
        url: "mailto:saadmrabet008@gmail.com",
        label: "Mail saad",
        type: "gray",
        icon: <Mail />,
      },
    ],
  },
};

export default siteConfig;
