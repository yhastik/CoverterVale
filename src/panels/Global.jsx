import React from 'react'
import { Panel, PanelHeader, Group, Header, Button, Div, Input } from '@vkontakte/vkui';
import PropTypes from 'prop-types';
import "./Global.css"

export const Global = ({id, go}) => {
  return (
    <Panel className='background' id = {id}>
      <Div>
        <Button id='btn1' stretched size="l" onClick={go} data-to="persik">Конвертировать</Button>
      </Div>
    </Panel>
  )

}
Global.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};