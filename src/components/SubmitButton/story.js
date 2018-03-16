import React from 'react'
import { storiesOf } from '@storybook/react'
import SubmitButton from './index'
import { withKnobs, text, boolean } from '@storybook/addon-knobs/react'

storiesOf('SubmitButton', module)
  .addDecorator(withKnobs)
  .add('with text child', () => (
    <SubmitButton
      loading={boolean('loading', false)}>
      {text('label', 'TEST')}
    </SubmitButton>
  ))
  .add('with component child', () => (
    <SubmitButton
      loading={boolean('loading', false)}>
      <button>{text('buttonLabel', 'TEST')}</button>
    </SubmitButton>
  ))
