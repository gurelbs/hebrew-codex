require('dotenv').config()
const OpenAI = require('openai-api')

const openai = new OpenAI(process.env.API_KEY)

async function gptResponse(q) {
	const { data } = await openai.complete({
		engine: 'davinci-codex',
		prompt: `<|endoftext|>/* I start with a blank HTML page, and incrementally modify it via <script> injection. Written for Chrome. */\n/* Command: Add \"Hello World\", by adding an HTML DOM node */\nvar helloWorld = document.createElement('div');\nhelloWorld.innerHTML = 'Hello World';\ndocument.body.appendChild(helloWorld);\n/* Command: Clear the page. */\nwhile (document.body.firstChild) {\n  document.body.removeChild(document.body.firstChild);\n}\n\n/* Command: ${q} */\n`,
		temperature: 0,
		max_tokens: 1000,
		stop: `/* Command:`,
		top_p: 0,
		frequency_penalty: 0,
		presence_penalty: 0,
	})
	return data.choices[0].text
}
module.exports = gptResponse
