import axios from 'axios'
import axiosRetry from "https://cdn.jsdelivr.net/npm/axios-retry@4.5.0/+esm";

import { displayCards } from './UI.js'
impementById('resError')


// "https://flowboard-api-virid.vercel.app/cards"
let url = "https://flowboard-api-virid.vercel.app/cards"
export async function getCards() {


  try {
    const res = await axios.get(url)
    const tickets = await res.data
    cardsDb = tickets


  } catch (error) {

      resError.style.color = "#8E1B38"
      resError.textContent = error.message
      refreshBtn.style.display = "block"
      resetWrapper.insertBefore(resError, resetWrapper.firstChild)
  }
}

// fetch('https://flowboard-api-virid.vercel.app/reset', {
//   method: 'POST',
//   headers: {
//     'X-Workspace': 'public'
//   }
// })