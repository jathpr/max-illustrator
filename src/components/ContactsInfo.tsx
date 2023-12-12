import styled from "@emotion/styled";
import { Instagram } from "../images/svg/Instagram";
import { Mail } from "../images/svg/Mail";
import { Phone } from "../images/svg/Phone";
import { Telegram } from "../images/svg/Telegram";

const contactsHolder={
	email:'pete4kinone@gmail.com',
	phone:'+995599079941',
	telegram:{
		url:'https://t.me/vase4kinone',
		userName:'@vase4kinone'
	},
	instagram:{
		url:'https://www.instagram.com/vasechkingone',
		userName:'@vasechkingone'
	}
}

export const ContactsInfo = () => {
  return (
    <Contacts>
		<Title>Contacts:</Title>
		<Contact>
			<SVGWrapper><Mail/></SVGWrapper>
			<Subtitle>Email:</Subtitle>
            <Subtitle>{contactsHolder.email}</Subtitle>
		</Contact>
		<Contact>
			<SVGWrapper><Phone/></SVGWrapper>
			<Subtitle>Phone:</Subtitle>
            <Subtitle>{contactsHolder.phone}</Subtitle>
		</Contact>
		<Contact>
			<SVGWrapper><Telegram/></SVGWrapper>
			<Subtitle>Telegram:</Subtitle>
			<Link href={contactsHolder.telegram.url}>{contactsHolder.telegram.userName}</Link>
		</Contact>
		<Contact>
			<SVGWrapper><Instagram/></SVGWrapper>
			<Subtitle>Instagram:</Subtitle>
			<Link href={contactsHolder.instagram.url}>{contactsHolder.instagram.userName}</Link>
		</Contact>
	</Contacts>
  );
};
const Contacts = styled.div`
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
