// Copyright 2017-2021 @polkadot/react-query authors & contributors
// and @canvas-ui/react-query authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { BareProps } from '@canvas-ui/react-api/types';
import { useApi } from '@canvas-ui/react-hooks';
import React from 'react';

interface Props extends BareProps {
  children?: React.ReactNode;
  label?: React.ReactNode;
}

function NodeVersion ({ children, className = '', label }: Props): React.ReactElement<Props> {
  const { systemVersion } = useApi();

  return (
    <div className={className}>
      {label || ''}{systemVersion}{children}
    </div>
  );
}

export default React.memo(NodeVersion);
