// Copyright 2017-2021 @canvas-ui/app-execute authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { Table } from '@canvas-ui/react-components';
import React, { useMemo } from 'react';
import styled from 'styled-components';

import { AbiMessage } from '@polkadot/api-contract/types';
import { TypeRegistry } from '@polkadot/types';
import { BlockNumber, EventRecord } from '@polkadot/types/interfaces';
import { formatNumber } from '@polkadot/util';

import Event from './Event';
import { useTranslation } from './translate';

interface IndexedEvent {
  index: number;
  record: EventRecord;
}

interface KeyedEvent extends IndexedEvent {
  blockHash: string;
  blockNumber: BlockNumber;
  key: string;
}
interface Props {
  className?: string;
  emptyLabel?: React.ReactNode;
  events?: KeyedEvent[];
  eventClassName?: string;
  label?: React.ReactNode;
  message: AbiMessage;
  registry: TypeRegistry;
}

function Events ({ className = '', emptyLabel, eventClassName, events, label, message, registry }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();

  const header = useMemo(() => [
    [label || t<string>('recent events'), 'start']
  ], [label, t]);

  return (
    <Table
      className={className}
      empty={emptyLabel || t<string>('No events available')}
      header={header}
    >
      {events && events.map(({ blockNumber, key, record }): React.ReactNode => (
        <tr
          className={eventClassName}
          key={key}
        >
          <td className='overflow'>
            <Event message={message}
              registry={registry}
              value={record}/>
            {blockNumber && (
              <div className='event-link'>
                {formatNumber(blockNumber)}
              </div>
            )}
          </td>
        </tr>
      ))}
    </Table>
  );
}

export default React.memo(styled(Events)`
  td.overflow {
    position: relative;

    .event-link {
      position: absolute;
      right: 0.75rem;
      top: 0.5rem;
    }
  }
`);
