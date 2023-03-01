import { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyDON7Nv3EoLPDIQanVTN5YeXq8Q13PoQ2U",
    authDomain: "alto-hotel.firebaseapp.com",
    databaseURL: "https://alto-hotel-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "alto-hotel",
    storageBucket: "alto-hotel.appspot.com",
    messagingSenderId: "291022622615",
    appId: "1:291022622615:web:2b39bf8ea2dbc6526cbed2",
    measurementId: "G-6Z9CPTPZ66"
};

if (!firebase.apps.length) {
  	firebase.initializeApp(firebaseConfig);
}

const database = firebase.database();

const MessageSender = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");

	const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setMessage(event.target.value);
		setError("");
	};

	const handleMessageSend = () => {
		const messagesRef = database.ref("messages");
		messagesRef.push({
		message: message.trim()
		});
		setMessage("");
	};

	return (
		<div className="flex absolute justify-between top-0 bg-gray-700 h-screen w-full">

		
			{/* Message box */}
			<div className='flex absolute justify-between bottom-0 h-16 w-full p-2 border-t border-solid border-[#979FA7]'>
				<input
					className='h-full mx-4 px-4 w-full border border-solid border-[#979FA7] rounded-lg text-base'
					placeholder='Text a message'
					type="text" id="message-input" value={message} onChange={handleMessageChange}
				/>
				
				<button
					className='h-full w-[100px] ml-2 mr-4 rounded-lg text-base text-white bg-[#326BFF]'
					onClick={handleMessageSend}>Send
				</button>

			</div>
		</div>
	);
};

export default MessageSender;
