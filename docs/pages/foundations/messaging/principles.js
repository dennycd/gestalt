// @flow strict
import { Text, Box, Flex, Heading } from 'gestalt';
import { type Node } from 'react';
import Page from '../../../docs-components/Page.js';
import PageHeader from '../../../docs-components/PageHeader.js';
import MainSection from '../../../docs-components/MainSection.js';
import Timely from '../../../graphics/messaging/timely.svg';
import Brief from '../../../graphics/messaging/brief.svg';
import Relevant from '../../../graphics/messaging/relevant.svg';

type PrincipleItemProps = {|
  color: string,
  heading: string,
  image?: Node,
  text: string | Node,
|};

function PrincipleItem({ color, heading, image, text }: PrincipleItemProps): Node {
  return (
    <Flex
      direction="column"
      gap={{
        row: 0,
        column: 4,
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={160}
        width={260}
        dangerouslySetInlineStyle={{
          __style: {
            backgroundColor: `var(--color-${color})`,
          },
        }}
      >
        {image}
      </Box>
      <Heading size="400">{heading}</Heading>
      <Box marginBottom={6}>
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
}

export default function MessagingPrinciples(): Node {
  return (
    <Page title="Messaging principles">
      <PageHeader
        badge="pilot"
        name="Messaging principles"
        type="guidelines"
        description={`Messaging patterns detail how we communicate errors, warnings, successes, recommendations and general information on system status. Messages can be either generated immediately after a user performs an action, or can be generated by the system automatically in order to help someone understand and navigate a product.

A message is different from a status indicator in that it includes a more detailed written explanation.`}
      />
      <MainSection name="Principles">
        <Flex gap={12} alignContent="between" wrap>
          <Flex.Item flex="grow" flexBasis="0%" minWidth={275} maxWidth="45%">
            <PrincipleItem
              color="purple-mysticool-450"
              image={<Timely />}
              heading="Timely"
              text={
                <Text>
                  Alerts, confirmations and information should be surfaced at the time that they are
                  needed.
                </Text>
              }
            />
          </Flex.Item>
          <Flex.Item flex="grow" flexBasis="0%" minWidth={275} maxWidth="45%">
            <PrincipleItem
              color="blue-skycicle-450"
              image={<Brief />}
              heading="Brief"
              text={
                <Text>
                  Messages should be brief and should not distract a user or get in the way of
                  completing a task. They shouldn’t appear too often in the experience.
                </Text>
              }
            />
          </Flex.Item>
          <Flex.Item flex="grow" flexBasis="0%" minWidth={275} maxWidth="45%">
            <PrincipleItem
              color="teal-spabattical-450"
              image={<Relevant />}
              heading="Relevant"
              text={
                <Text>
                  The information or alerts provided should be relevant to the surface a user is
                  currently working on, and be placed near the sections they relate to.
                </Text>
              }
            />
          </Flex.Item>
        </Flex>
      </MainSection>
    </Page>
  );
}