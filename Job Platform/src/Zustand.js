import { create } from "zustand";

 export const useApistore = create((set) => ({
  output: [],

  fetchData: async () => {
    const url = 'https://upwork-jobs.p.rapidapi.com/jobs';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '87d7a7ef21mshe617bebe230e9dfp17a540jsnd28d05b0051b',
		'x-rapidapi-host': 'upwork-jobs.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    set({ output: result });
} catch (error) {
	console.error(error);
}
  },
}));
