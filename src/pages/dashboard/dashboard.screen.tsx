import styles from './Dashboard.module.css'
import React, { useState, useEffect } from 'react'
import { AuthRequired } from '@components/AuthRequired/AuthRequired'
import { AdminNavbar } from '@components/AdminNavbar/AdminNavbar'

export function Dashboard() {
	const user = 'Math'
	const profileGojo = "https://media.discordapp.net/attachments/858592795979415583/1168073763900891136/image.png"
	const profileSukuna = "https://media.discordapp.net/attachments/858592795979415583/1168073764316139590/image.png"

	type FakeMessageType = {
		id: number;
		type: string;
		content?: string;
		userName?: string;
		profilePhoto?: string;
		messageContent?: string;
	};

	const [displayedMessages, setDisplayedMessages] = useState<FakeMessageType[]>([]);
	const [typingIndex, setTypingIndex] = useState(0);

	const fakeMessages = [
		{ id: 1, type: 'system', content: '@satoru_gojo entrou no chat!' },
		{ id: 2, type: 'system', content: '@ryomen_sukuna entrou no chat!' },
		{ id: 3, type: 'message', userName: "Satoru Gojo", profilePhoto: profileGojo, messageContent: "Opa, eae meu mano " + user + "! Que tal um tour por aqui?" },
		{ id: 4, type: 'message', userName: "Ryomen Sukuna", profilePhoto: profileSukuna, messageContent: "Para de enrolar seu verme, apresenta logo isso pra ele" },
		{ id: 5, type: 'message', userName: "Satoru Gojo", profilePhoto: profileGojo, messageContent: "Apresenta você! 🙄" },
		{ id: 6, type: 'message', userName: "Ryomen Sukuna", profilePhoto: profileSukuna, messageContent: "Mas foi você quem deu a ideia!" },
		{ id: 7, type: 'message', userName: "Satoru Gojo", profilePhoto: profileGojo, messageContent: "Verdade, o mais forte tem que apresentar! Deixa comigo 😉" },
		{ id: 8, type: 'message', userName: "Ryomen Sukuna", profilePhoto: profileSukuna, messageContent: "Isso mesmo! Espera aí... tá errado, eu apresento!" },
		{ id: 9, type: 'message', userName: "Satoru Gojo", profilePhoto: profileGojo, messageContent: "Muito buxa 😂😂😂" },
		{ id: 10, type: 'system', content: '@satoru_gojo saiu do chat!' },
		{ id: 11, type: 'message', userName: "Ryomen Sukuna", profilePhoto: profileSukuna, messageContent: "Moleque desgraçado 💀🔪" },
	]

	useEffect(() => {
		if (typingIndex < fakeMessages.length) {
			setTimeout(() => {
				setDisplayedMessages([...displayedMessages, fakeMessages[typingIndex]]);
				setTypingIndex(typingIndex + 1);
			}, 2200);
		}
	}, [displayedMessages, typingIndex]);

	return (
		<AuthRequired>
			{() => (
				<section className={styles.dashboardContainer}>
					<div className={styles.dashboardContent}>
						<div className={styles.dashboardFakeChat}>
							{displayedMessages.map((item) => {
								if (item.type === 'message') {
									return (
										<div key={item.id} className={styles.fakeChatCard}>
											<img src={item.profilePhoto} className={styles.fakeChatImage} alt="" />
											<div>
												<div className={styles.fakeChatUsername}>{item.userName}</div>
												<p>{item.messageContent}</p>
											</div>
										</div>
									);
								} else if (item.type === 'system') {
									return <p key={item.id} className={styles.systemOutput}><span className={styles.systemOutputContent}>{item.content}</span></p>;
								}
							})}
						</div>
					</div>
					{typingIndex < fakeMessages.length && fakeMessages[typingIndex].type === 'message' && (
						<p className={styles.typingOutput}>
							<span className={styles.typingOutputContent}>{fakeMessages[typingIndex].userName}</span> está digitando...
						</p>
					)}

					<AdminNavbar />
				</section>
			)}
		</AuthRequired>
	)
}
