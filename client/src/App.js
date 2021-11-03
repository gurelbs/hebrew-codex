import { useState, useEffect, useCallback } from 'react'
import Editor from '@monaco-editor/react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import axios from 'axios'
import InputWithMic from './components/InputWithMic'
import useLocalStorge from './hooks/useLocalStorge'
import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import api from './api'
export default function App() {
	const url =
		process.env.NODE_ENV === 'production'
			? 'https://magniv.cf/codex'
			: 'http://localhost:4000/codex'
	const [textQuery, setTextQuery] = useState('')
	const [loading, setLoading] = useState(false)
	const [results, setResults] = useLocalStorge('results', '')
	const { transcript, finalTranscript, listening, resetTranscript } = useSpeechRecognition()
	const { startListening, stopListening, abortListening } = SpeechRecognition
	const start = useCallback(() => {
		startListening({
			continuous: true,
			interimResults: true,
			language: 'iw-IL',
		})
	}, [startListening])
	const stop = useCallback(() => stopListening(), [stopListening])

	const fetchData = useCallback(
		async inputType => {
			try {
				setLoading(true)
				const { data } = await api.post(`codex?q=${inputType}`)
				setResults(res => `${res}\n\n/*${inputType}*/\n\n${data.answer.trim()}`)
				setLoading(false)
			} catch (error) {
				console.log(error)
			}
		},
		[url, setResults]
	)

	const sendInput = useCallback(
		inputType => {
			if (inputType && inputType !== '') {
				fetchData(inputType)
				resetTranscript()
				setTextQuery('')
				resetTranscript()
			}
		},
		[fetchData, resetTranscript]
	)

	function hendleKeyDown(e) {
		try {
			if (e.key === 'Enter') {
				sendInput(textQuery)
			}
		} catch (error) {
			console.log(error)
		}
	}
	useEffect(() => {
		if (finalTranscript && finalTranscript !== '' && finalTranscript === transcript) {
			sendInput(finalTranscript)
		}
	}, [finalTranscript, transcript, abortListening, resetTranscript, sendInput])
	return (
		<div className='App'>
			<div className='aditor-container'>
				<InputWithMic
					value={textQuery}
					transcript={transcript}
					loading={loading}
					hendleClick={listening ? stop : start}
					hendleSendBtn={() => sendInput(textQuery)}
					hendleChange={e => setTextQuery(e.target.value)}
					listening={listening}
					hendleKeyDown={hendleKeyDown}
				/>
			</div>
			<div className='aditor-container'>
				<Editor
					style={{ width: '100%', height: '100%', position: 'relative' }}
					theme='vs-dark'
					defaultLanguage='javascript'
					value={results}
					defaultValue={results}
					onChange={setResults}
				/>
			</div>
			<div>
				<Backdrop
					sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
					open={loading}>
					<CircularProgress color='inherit' />
				</Backdrop>
			</div>
		</div>
	)
}
