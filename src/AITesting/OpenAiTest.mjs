import OpenAI from "openai";

const openai = new OpenAI({
    //enterAPIkeyHere,
});

async function createCompletion() {
    const completion = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            {
                role: "user",
                content: "I am a student that likes coding and math. What are 5 career options for me?",
            },
        ],
    });
    console.log(completion.choices[0].message);
}

createCompletion();
