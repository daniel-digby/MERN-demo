import axios from "axios";

const LOGIN = "/api/auth/login";

export const APIloginUser = async (user: string): Promise<void> => {
	try {
		const endpoint = LOGIN;

		// make an axios https call to our backend
		const res = await axios.post(
			endpoint,
			{
				user: user,
			},
			{ withCredentials: true }
		);
		const data = res.data;

		// check to see if we got a body in our response
		if (data !== undefined) {
			alert("successfully posted login to backend");
		} else {
			alert("api call failed");
		}
	} catch (err) {
		console.log(err);
	}
};
