export async function getWordWithDefinition(maxRetries = 5) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const [word] = await fetch(
        "https://random-word-api.vercel.app/api?words=1&length=5"
      ).then((res) => res.json())

      const dictRes = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      if (!dictRes.ok) continue

      const defData = await dictRes.json()
      const def = defData[0]?.meanings?.[0]?.definitions?.[0]?.definition
      if (def) return { word, definition: def }
    } catch {
      continue
    }
  }
  throw new Error("Failed to get word")
}

export function checkGuess(word, current, locked) {
  const newLocked = [...locked]
  const newCurrent = [...current]

  for (let i = 0; i < 5; i++) {
    const guessLetter = current[i]?.toLowerCase()
    if (!locked[i] && guessLetter === word[i]) newLocked[i] = word[i].toUpperCase()
    if (!locked[i]) newCurrent[i] = null
  }

  const isCorrect = newLocked.every((l, i) => l?.toLowerCase() === word[i])
  return { newLocked, newCurrent, isCorrect }
}
