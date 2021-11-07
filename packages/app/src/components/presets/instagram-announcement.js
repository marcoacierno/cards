/* eslint-disable no-use-before-define */

import Inline from '../inline.macro'
import { Snake, Heading, Link, Flex, Text } from './scope'

const code = (
  <Inline>
    <>
      <Link href="https://use.typekit.net/ybc5ove.css" rel="stylesheet" />
      <Flex
        sx={{
          width: 1080,
          height: 1920,
          position: "relative",
          overflow: "hidden",
          background: "#F8B03D",
          border: '14px #000 solid',
          fontFamily: 'aktiv-grotesk-extended, sans-serif',
          px: 50,
        }}
        id="social-card"
      >
        <PyConLogo style={{
          position: 'absolute',
          top: 150,
          width: '400px',

        }} />
        <Flex sx={{
          alignItems: 'flex-start',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Heading
            sx={{
              fontSize: 7,
              fontWeight: 700,
              mb: 100,
              fontFamily: 'aktiv-grotesk-extended, sans-serif'
            }}
          >
            {query.heading.toUpperCase()}
          </Heading>
          <Text
            sx={{
              color: "#fff",
              fontSize: 6,
              fontWeight: 500
            }}
          >
            {query.whiteText.map(t => <>
              {t.toUpperCase()}
              <br />
            </>)}
          </Text>
        </Flex>
        <Snake style={{
          position: 'absolute',
          bottom: -10,
          right: 70,
          width: 250,
          height: 300,
        }} />
      </Flex>
    </>
  </Inline>
)

const query = {
  heading: 'Get your tickets now!',
  whiteText: [
    `Florence`,
    `5th - 7th`,
    `June 2022`,
  ]
}

export const instagramannouncement = {
  name: 'Instagram - Announcement',
  code,
  query,
  aspectRatio: '9/16'
}
