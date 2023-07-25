//Change first two params
const TOKEN = '6022414578:AAGnfBfjGB9KGfowx_aVOktY5Txc3_7aKvk'
const CHAT_ID = '-1001867424683'

const TELEGRAM_URL = 'https://api.telegram.org/bot'
const SEND = '/sendMessage'

export const sendTelegramMessage = async (message: string) => {
	const messageUrl = new URL(TELEGRAM_URL + TOKEN + SEND)
	messageUrl.searchParams.set('chat_id', CHAT_ID)
	messageUrl.searchParams.set('parse_mode', 'html')
	messageUrl.searchParams.set('text', message)
	const response = await fetch(messageUrl)
	const result = await response.json()
	return result
}