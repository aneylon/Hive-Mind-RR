import { Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import FocusInput from './refs/FocusInput'
import RefCounter from './refs/RefCounter'
import RefVsStateCounter from './refs/RefVsStateCounter'
import StopWatch from './refs/StopWatch'
const RedTypography = styled(Typography)({
	color: 'red',
})
const Home = () => {
	return (
		<div>
			{/*
			<Typography variant='h1' style={{ color: 'green' }}>
				Home
			</Typography>
			<p>this is an experiment</p> 
			<RedTypography variant='h2'> Supa Red</RedTypography>
			<RefCounter />
			<StopWatch />
			<RefVsStateCounter />
		*/}
		<FocusInput />
		</div>
	)
}

export default Home
