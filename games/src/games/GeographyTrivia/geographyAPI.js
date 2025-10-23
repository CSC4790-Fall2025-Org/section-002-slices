export async function fetchTriviaQuestions() {
  try {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=1&category=22&difficulty=easy&type=multiple"
    );

    if (!res.ok) throw new Error("Network response was not ok");

    const data = await res.json();
    console.log("Fetched Trivia Data:", data);

    // If OpenTDB sends an invalid response (e.g. rate limited or empty)
    if (data.response_code !== 0 || !data.results?.length) {
      console.warn("OpenTDB returned invalid data:", data);
      throw new Error("Invalid API response");
    }

    const questionData = data.results[0];
    const { question, correct_answer, incorrect_answers } = questionData;

    const allAnswers = shuffleArray([
      correct_answer,
      ...incorrect_answers,
    ]).sort(() => Math.random() - 0.5);

    return {
      Questions: decodeHTML(question),
      correctAnswer: decodeHTML(correct_answer),
      answers: allAnswers.map(decodeHTML),
    };
  } catch (error) {
    console.error("Trivia Fetch Error:", error);
    throw new Error("Failed to fetch trivia questions.");
  }
}

// helper function to decode HTML entities
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

// simple shuffle helper
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}
