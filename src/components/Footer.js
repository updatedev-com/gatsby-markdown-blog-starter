import React from 'react'
import * as styles from './Footer.module.scss'
import config from '../../data/SiteConfig'

const isPresent = string => string && string.trim() != '';

const Footer = () => (
  <footer>
    <div className={styles.container}>
      <div>
        {isPresent(config.userTwitter) &&
          <a
            href={`https://twitter.com/${config.userTwitter}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        }
        {isPresent(config.userGitHub) &&
          <a
            href={`https://github.com/${config.userGitHub}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        }
        <a
          href={config.siteUrl + config.siteRss}
          target="_blank"
          rel="noopener noreferrer"
        >
          RSS
        </a>
      </div>
      <div className={styles.copyright}>{config.copyright}</div>
    </div>
  </footer>
)

export default Footer
