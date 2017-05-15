import axios from 'axios';

export const POST_POEM = 'POST_POEM';
const samplePoems = [
		{username: "Basho_Matsuo", line1:"An old silent pond...", line2:"A frog jumps into the pond,", line3: "splash! Silence again.", thumbnail: "https://c1.staticflickr.com/3/2465/3655142494_475efb9960_b.jpg"},
		{username: "Natusume_Soseki", line1: "Over the wintry", line2: "forest, winds howl in rage", line3: "with no leaves to blow.", thumbnail: "https://c1.staticflickr.com/4/3689/11402035055_616af54af0_b.jpg"},
		{username: "Richard_Wright", line1: "Whitecaps on the bay:", line2: "A broken signboard banging", line3: "In the April wind.", thumbnail: "https://c1.staticflickr.com/8/7523/16068545340_8d802f2739_b.jpg"},
		{username: "Anselm_Hollo", line1: "follow that airplane", line2: "of course I'm high this is", line3: "an emergency", thumbnail: "https://c1.staticflickr.com/6/5073/14027996057_de53794813_z.jpg"},
		{username: "Basho_Matsuo", line1:"An old silent pond...", line2:"A frog jumps into the pond,", line3: "splash! Silence again." , thumbnail: "https://c1.staticflickr.com/3/2465/3655142494_475efb9960_b.jpg"},
		{username: "Natusume_Soseki", line1: "Over the wintry", line2: "forest, winds howl in rage", line3: "with no leaves to blow.", thumbnail: "https://c1.staticflickr.com/4/3689/11402035055_616af54af0_b.jpg"},
		{username: "Richard_Wright", line1: "Whitecaps on the bay:", line2: "A broken signboard banging", line3: "In the April wind.", thumbnail: "https://c1.staticflickr.com/8/7523/16068545340_8d802f2739_b.jpg"},
		{username: "Anselm_Hollo", line1: "follow that airplane", line2: "of course I'm high this is", line3: "an emergency", thumbnail: "https://c1.staticflickr.com/6/5073/14027996057_de53794813_z.jpg"}
	]

export function postPoem(line1,line2,line3) {
	const poem = {
		line1: line1,
		line2: line2,
		line3: line3
	}
	console.log(line1, line2, line3, poem, "poem in action");
	samplePoems.push(poem) //will want to post to db instead of push into array
	console.log(samplePoems, "sample poems in action");
	axios.post('/api/poems', {
		username: "Jackie_Feiler",
		line1: line1,
		line2: line2,
		line3: line3,
		thumbnail: "https://c1.staticflickr.com/1/230/471801087_e9adb2afd4_b.jpg" 
	})
	return {
		type: POST_POEM,
		payload: samplePoems
	}
}
