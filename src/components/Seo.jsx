import SEO from 'react-seo-component';
import seo from '../_mock/seo.json';

export default function Seo() {
  return (
    <>
      <SEO
        title={seo.title}
        titleTemplate={seo.siteName}
        titleSeparator={seo.titleSeparator}
        description={seo.description}
        image={seo.image}
        pathname={seo.siteUrl}
        siteLanguage={seo.siteLanguage}
        siteLocale={seo.siteLocale}
        twitterUsername={seo.twitterUsername}
      />
    </>
  )
}