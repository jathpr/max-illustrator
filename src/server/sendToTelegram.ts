const TOKEN = process.env.GATSBY_API_TOKEN
const CHAT_ID = process.env.GATSBY_API_CHAT_ID

const TELEGRAM_URL = 'https://api.telegram.org/bot'
const SEND = '/sendMessage'

export const sendTelegramMessage = async (message: string) => {
	if(!TOKEN||!CHAT_ID) return
	const messageUrl = new URL(TELEGRAM_URL + TOKEN + SEND)
	messageUrl.searchParams.set('chat_id', CHAT_ID)
	messageUrl.searchParams.set('parse_mode', 'html')
	messageUrl.searchParams.set('text', message)
	const response = await fetch(messageUrl)
	const result = await response.json()
	return result
}