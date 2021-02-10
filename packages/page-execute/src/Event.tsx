// Copyright 2017-2021 @canvas-ui/app-execute authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Expander, Output } from '@canvas-ui/react-components';
import React from 'react';

import { AbiMessage } from '@polkadot/api-contract/types';
import { TypeRegistry } from '@polkadot/types';
import { EventRecord } from '@polkadot/types/interfaces';
import { u8aToString } from '@polkadot/util';

interface Props {
  className?: string;
  value: EventRecord;
  message: AbiMessage;
  registry: TypeRegistry;
}

function Event ({ className = '', message, registry, value: { event, topics } }: Props): React.ReactElement<Props> {
  console.log(topics);
  const contractName = topics.map(u8aToString)
    .filter((topic: string) => topic.includes('::'))
    ?.pop() ?? '';
  const value = topics.map(u8aToString)
    .filter((topic: string) => !topic.includes('::'))
    ?.pop() ?? '';

  console.log(value, message.returnType);

  return (
    <Expander
      className={className}
      summary={contractName}
      summaryMeta={''}
    >
      <Output
        isError={false}
        registry={registry}
        type={message.returnType}
        value={value}
        withCopy
        withLabel={false}
      />
    </Expander>
  );
}

export default React.memo(Event);
