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
          height: 1080,
          position: "relative",
          overflow: "hidden",
          background: "#F17A5D",
          flexDirection: "column",
          justifyContent: "center",
          px: 5,
          border: '14px #000 solid',
          fontFamily: 'aktiv-grotesk-extended, sans-serif'
        }}
        id="social-card"
      >
        <Box sx={{ position: "relative" }}>
          <Text
            sx={{
              color: "#fff",
              fontSize: 5,
              position: "absolute",
              bottom: "100%",
              mb: 3,
              fontWeight: 500
            }}
          >
            {query.whiteText}
          </Text>

          <Heading
            sx={{
              fontSize: 6,
              fontWeight: 700,
              fontFamily: 'aktiv-grotesk-extended, sans-serif'
            }}
          >
            {query.heading.toUpperCase()}
          </Heading>
        </Box>
        <Snake style={{ position: "absolute", bottom: -14, right: 100, width: 170 }} />
      </Flex>

    </>
  </Inline>
)

const query = {
  heading: 'Heading',
  whiteText: 'PyCon Italy 2022'
}

export const instagrampostannouncement = {
  name: 'Instagram Post - Announcement',
  code,
  query,
  aspectRatio: '1/1'
}
