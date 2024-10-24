import React from "react";
import "./Contacts.css";

const Contacts = ({ gith, teleg, instag }) => {
	let gitf = `https://github.com/${gith}`;
	let telegramLink = `https://t.me/${teleg}`;
	let instagramLink = `https://instagram.com/${instag}`;

	return (
		<div className="contCont">
			<div className="rightJust">
				<a
					href={gitf}
					className="gitlink"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github: {gith}
				</a>
				<a
					href={telegramLink}
					className="tglink"
					target="_blank"
					rel="noopener noreferrer"
				>
					Telegram: {teleg}
				</a>
				<a
					href={instagramLink}
					className="instalink"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram: {instag}
				</a>
			</div>
		</div>
	);
};

export default Contacts;
