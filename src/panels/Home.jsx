import React, {useState} from 'react';
import { Panel, PanelHeader, Group, Header, Button, Div, PanelHeaderBack, Input } from '@vkontakte/vkui';
import "./Home.css"
import PropTypes from 'prop-types';

export const Home = props => {
  const [rubs, setRubs] = useState(0)
	const [evro, setEvro] = useState(0)

	const convertRUtoEVRO = () => {
		setEvro((parseFloat(rubs) * 0.010213).toFixed(3));
	};

	const convertEVROtoRU = () => {
		setRubs((parseFloat(evro) * 97.91).toFixed(3));
	};


return(
	<Panel className='Bodys' id={props.id}>
		<PanelHeader className='he' before={<PanelHeaderBack onClick={props.go} data-to="home"/>}>Конвертер валют</PanelHeader>
    <Group className="Head" header={<Header className='Header' mode="secondary"><p>Рубли в Евро</p></Header>}>
		<Div className='Div'>
            <Input 
            className='Inp'
            type='number'
            value={rubs}
            onChange={(e) => setRubs(e.target.value)}
            />

            <Button className='btn' size='1' stretched onClick={convertRUtoEVRO}>
              Конвертировать в ЕВРО
            </Button>
    </Div>
    </Group>
    <Group className="Head" header={<Header className='Header' mode="secondary"><p>Евро в Рубли</p></Header>}>
    <Div className='Div'>
            <Input 
            className='Inp'
            type='number'
            value={evro}
            onChange={(e) => setEvro(e.target.value)}
            />

            <Button className='btn' size='1' stretched onClick={convertEVROtoRU}>
              Конвертировать в РУБЛИ
            </Button>
    </Div>
    </Group>
	</Panel>
)
}
Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};
