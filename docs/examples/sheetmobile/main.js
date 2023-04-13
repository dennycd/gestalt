// @flow strict
import { type Node, useState } from 'react';
import {
  Flex,
  Layer,
  SheetMobile,
  Box,
  Text,
  DeviceTypeProvider,
  Button,
  FixedZIndex,
  CompositeZIndex,
} from 'gestalt';

export default function Example(): Node {
  const [showComponent, setShowComponent] = useState(true);
  const PAGE_HEADER_ZINDEX: FixedZIndex = new FixedZIndex(10);
  const ABOVE_PAGE_HEADER_ZINDEX: CompositeZIndex = new CompositeZIndex([PAGE_HEADER_ZINDEX]);

  return (
    <DeviceTypeProvider deviceType="mobile">
      {showComponent ? (
        <Layer zIndex={ABOVE_PAGE_HEADER_ZINDEX}>
          <SheetMobile
            heading="Heading"
            subHeading="SubHeading"
            primaryAction={{
              accessibilityLabel: 'Next page',
              label: 'Next',
              onClick: ({ onDismissStart }) => onDismissStart(),
            }}
            onDismiss={() => setShowComponent(false)}
            footer={
              <SheetMobile.DismissingElement>
                {({ onDismissStart }) => (
                  <Flex justifyContent="center" gap={2}>
                    <Button color="gray" text="Secondary" onClick={() => onDismissStart()} />
                    <Button color="red" text="Primary" onClick={() => onDismissStart()} />
                  </Flex>
                )}
              </SheetMobile.DismissingElement>
            }
            size="auto"
          >
            <Box>{Array(100).fill(<Text>Content</Text>)}</Box>
          </SheetMobile>
        </Layer>
      ) : null}
      <Box padding={2}>
        <Button
          accessibilityLabel="Show SheetMobile"
          color="red"
          text="Show SheetMobile"
          size="lg"
          onClick={() => setShowComponent(true)}
        />
      </Box>
    </DeviceTypeProvider>
  );
}