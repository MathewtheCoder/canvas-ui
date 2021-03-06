// Copyright 2017-2021 @polkadot/react-components authors & contributors
// and @canvas-ui/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import { classes } from '@canvas-ui/react-util';
import React from 'react';
import SUILabel from 'semantic-ui-react/dist/commonjs/elements/Label/Label';
import { SemanticCOLORS, SemanticICONS } from 'semantic-ui-react/dist/commonjs/generic';
import styled from 'styled-components';

import Icon from './Icon';
import { BareProps } from './types';

interface Props extends BareProps {
  children: React.ReactNode;
  color?: SemanticCOLORS;
  icon?: SemanticICONS;
  label?: React.ReactNode;
}

function Bubble ({ children, className = '', color, icon, label }: Props): React.ReactElement<Props> {
  return (
    <SUILabel
      className={classes('theme--default', 'ui--Bubble', className)}
      color={color}
    >
      <div className='ui--Bubble-header'>
        {icon && (
          <Icon
            icon={icon}
            size='large'
          />
        )}
        {label && <div className='text'>{label}</div>}
      </div>
      <div className='ui--Bubble-children'>
        {children}
      </div>
    </SUILabel>
  );
}

export default React.memo(styled(Bubble)`
  font-weight: normal;
  margin: 0.25rem;
  padding: 0;

  * {
    vertical-align: middle;
  }

  .ui--Bubble-children,
  .ui--Bubble-header {
    display: inline-block;
    vertical-align: middle;
  }

  .ui--Bubble-children {
    padding: 0 0.75rem 0 0;
  }

  .ui--Bubble-header {
    background: rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    border-radius: .28571429rem 0 0 .28571429rem;
    height: 2.75rem;
    margin-right: 0.75rem;
    padding: 0 0.75rem;
    text-align: center;
    vertical-align: middle;

    > div {
      display: inline-block;
      line-height: 2.75rem !important;
      vertical-align: middle;
    }

    > .text {
      padding: 0 0 0 0.25rem;
    }
  }
`);
