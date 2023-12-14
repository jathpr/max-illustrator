import styled from "@emotion/styled";
import { Logo } from "../components/Logo";
import { Menu } from "../components/Menu";
import { PageProps } from "gatsby";
import { TextField } from "@mui/material";
import { useState } from "react";
import { sendTelegramMessage } from "../server/sendToTelegram";
import { ContactsInfo } from "../components/ContactsInfo";

const Contacts: React.FC<PageProps> = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [phone, setPhone] = useState('')
	const [message, setMessage] = useState('')

	const [errorName, setErrorName] = useState(false)
	const [errorEmail, setErrorEmail] = useState(false)
	const [errorMessage, setErrorMessage] = useState(false)
	const [isVisible, setIsVisible] = useState(true)

	const convertMessage = (name:string,email:string,message:string,phone:string) => {
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
				{isVisible && <ContactsInfo/>}
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
					<Button type='submit' onClick={(e) => {
						 e.preventDefault()
						name ? setErrorName(false) : setErrorName(true)
						email ? setErrorEmail(false) : setErrorEmail(true)
						message ? setErrorMessage(false) : setErrorMessage(true)
						convertMessage(name,email,message,phone)
					}}>SEND</Button></div>}
				{!isVisible && <Text>I will respond to your message as soon as possible.</Text>}
				{!isVisible && <ButtonLink href='/'>GO BACK</ButtonLink>}
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

const Title = styled.h1`
text-align:center;
`
const Text = styled.p`
text-align:center;
font-size:24px;
`
const Button=styled.button`
margin-top:10px;
width:100px;
padding:10px;
background:none;
border-radius:5px;
outline:none;
:hover{
	cursor:pointer;
	border-color:gray;
	background:#e7e7e7;
}
`
const ButtonLink=styled.a`
display: block; 
margin: 0 auto; 
width: 100px;
text-decoration:none;
border:2px outset #000;
border-radius:5px;
padding:10px;
font-family:sans-serif;
text-align:center;
font-size:14px;
color:#000;
:hover{
	cursor:pointer;
	border-color:gray;
	background:#e7e7e7;
}
`