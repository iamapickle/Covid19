import React from 'react';
import axios from 'axios';
const url='https://covid19.mathdro.id/api';


export const fetchD=async()=>{
	try{
		// const response=await axios.get(url);
		// const mod={
		// 	confirmed:response.data.confirmed,
		// 	recovered:response.data.recovered,
		// 	deaths:response.data.deaths,
		// }
		// return mod;
		const {data:{confirmed, recovered,deaths, lastUpdate}}= await axios.get(url);
		return {confirmed, recovered, deaths, lastUpdate};

	}catch(error){

	}
}
export const fetchDaily=async()=>{
	try{
		const {data}=await(axios.get('https://covid19.mathdro.id/api/daily'));
		const modifiedD=data.map((DailyData)=>({
			confirmed:DailyData.confirmed.total,
			deaths:DailyData.deaths.total,
			date:DailyData.reportDate,
		}));
		return modifiedD;

	}catch(error){

	}
}


