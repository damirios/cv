import './styles/css/style.css'; 

import {CV} from "./components/CV";

import { useReactToPrint } from 'react-to-print';
import { useRef } from 'react';

function App() {
	const componentRef = useRef();
	const handlePrint = useReactToPrint({
		content: () => componentRef.current
	});

	return (
		<div className="App">
			<CV ref={componentRef} lang='ru' />
			<button onClick={handlePrint} >Print!</button>
		</div>
	);
}

export default App;
