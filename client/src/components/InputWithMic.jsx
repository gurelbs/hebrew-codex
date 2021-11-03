import React from 'react'
// mui
import { Badge, InputAdornment, OutlinedInput, Typography } from '@mui/material'
import Fab from '@mui/material/Fab'
import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import SendIcon from '@mui/icons-material/Send'

export default function InputWithMic({
	value,
	hendleKeyDown,
	hendleChange,
	hendleClick,
	listening,
	loading,
	hendleSendBtn,
	transcript
}) {
	return (
		<div className='input-container'>
			<div className='input-recognition'>
				{/* <Typography variant='body1' color={theme.palette.grey}>
					{listening ? 'כיבוי' : 'הפעלת'} זיהוי קולי
				</Typography> */}
				<Badge
					color='secondary'
					variant={listening && !loading ? 'dot' : null}
					overlap='circular'
					badgeContent={listening ? ' ' : null}>
					<Fab
						variant={listening ? 'extended' : 'circular'}
						disabled={loading}
						onClick={hendleClick}
						maxwidth='sm'>
						{listening ? <MicIcon /> : <MicOffIcon />}
					</Fab>
				</Badge>
				<Typography variant='body1' className='input-container__text'>
					{transcript}
				</Typography>
			</div>
			<div className='input-text'>
				<OutlinedInput
					fullWidth
					multiline={true}
					sx={{
						direction: 'rtl',
						display: 'flex',
						alignItems: 'center',
						border: 0,
						outline: 0,
					}}
					endAdornment={
						<InputAdornment position='end'>
							<Fab variant={'extended'} disabled={loading} onClick={hendleSendBtn} maxwidth='sm'>
								<SendIcon
									sx={{
										transform: 'rotate(180deg)',
									}}
								/>
							</Fab>
						</InputAdornment>
					}
					type='text'
					autoFocus
					placeholder='אפשר לשאול אותי כל דבר, אעשה כמיטב יכולתי!'
					value={value}
					onChange={hendleChange}
					onKeyDown={hendleKeyDown}
				/>
			</div>
		</div>
	)
}
