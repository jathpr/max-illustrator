import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { PageProps } from "gatsby";
import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { sendTelegramMessage } from "../server/sendToTelegram";
import { StaticImage } from "gatsby-plugin-image";

const Contacts: React.FC<PageProps> = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')

	const [errorName, setErrorName] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorMessage, setErrorMessage] = useState(false)
	const [isVisible, setIsVisible] = useState(true)

	const convertMessage = () => {
		if (!name || !email || !message) return
		const text = name + ' отправил(а) сообщение через сайт:\n' + message + '\nКонтакты для связи:\nEmail: ' + email + (phone && ('\nТелефон: ' + phone))
		sendTelegramMessage(text)
		setIsVisible(false)
	}

	return (
		<Wrapper>
			<Logo />
			<Menu />
			<ContactsWrap>
				{isVisible && <ContactsInfo>
					<Title>Contacts:</Title>
					<Contact>
						<SVGWrapper><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z" /></svg></SVGWrapper>
						<Subtitle>Email:</Subtitle>
						<Subtitle>pete4kinone@gmail.com</Subtitle>
					</Contact>
					<Contact>
						<SVGWrapper><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z" /></svg></SVGWrapper>
						<Subtitle>Phone:</Subtitle>
						<Subtitle>+995599079941</Subtitle>
					</Contact>
					<Contact>
						<SVGWrapper><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 496 512"><path d="M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z" /></svg></SVGWrapper>
						<Subtitle>Telegram:</Subtitle>
						<Link href="https://t.me/vase4kinone">@vase4kinone</Link>
					</Contact>
					<Contact>
						<SVGWrapper><svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg></SVGWrapper>
						<Subtitle>Instagram:</Subtitle>
						<Link href="https://www.instagram.com/vasechkingone">@vasechkingone</Link>
					</Contact>
				</ContactsInfo>}
				<Title>{isVisible ? 'Text me:' : 'Thank you!'}</Title>
				{isVisible && <div><TextField id="outlined-required-name" label="Name" variant="outlined" margin='dense' sx={{ width: '100%' }} type="text" required
					error={errorName ? true : false} onChange={(e) => {
						setName(e.target.value)
						setErrorName(false)
					}} />
					<TextField id="outlined-required-email" label="Email" variant="outlined" margin='dense' sx={{ width: '100%' }} type="email" required
						error={errorEmail ? true : false} onChange={(e) => {
							setEmail(e.target.value)
							setErrorEmail(false)
						}} />
					<TextField id="outlined-basic-phone" label="Phone" variant="outlined" margin='dense' sx={{ width: '100%' }} type="tel"
						onChange={(e) => {
							setPhone(e.target.value)
						}} />
					<TextField id="outlined-multiline-static" label="Your message" multiline margin='dense' rows={4} sx={{ width: '100%' }} required
						error={errorMessage ? true : false} onChange={(e) => {
							setMessage(e.target.value)
							setErrorMessage(false)
						}} />
					<Button variant="outlined" size="medium" sx={{ width: 100 }} type='submit' onClick={(e) => {
						e.preventDefault()
						name ? setErrorName(false) : setErrorName(true)
						email ? setErrorEmail(false) : setErrorEmail(true)
						message ? setErrorMessage(false) : setErrorMessage(true)
						convertMessage()
					}}>Send</Button></div>}
				{!isVisible && <Text>I will respond to your message as soon as possible.</Text>}
				{!isVisible && <Button variant="outlined" size="medium" href='/' sx={{ display: 'block', margin: '0 auto', width: 100 }}>Go back</Button>}
			</ContactsWrap>
		</Wrapper>
	)
}

export default Contacts;

const Wrapper = styled.div`
  height: 100vh;
  padding: 0 20px;
`;
const ContactsWrap = styled.form`
max-width:700px;
margin:0 auto;
padding-bottom:30px;
`
const ContactsInfo = styled.div`
margin-bottom:30px;
`
const Contact = styled.div`
display:flex;
flex-wrap:wrap;
align-items:center;
`
const SVGWrapper = styled.div`
width:25px;
height:25px;
`
const Subtitle = styled.p`
font-size:20px;
margin:0px 0px 0px 10px;

@media (max-width:340px) {
    font-size:18px;
}
`
const Link = styled.a`
margin-left:10px;
font-size:20px;
color:#000;

@media (max-width:340px) {
    font-size:18px;
}
`
const Title = styled.h1`
text-align:center;
`
const Text = styled.p`
text-align:center;
font-size:24px;
`
