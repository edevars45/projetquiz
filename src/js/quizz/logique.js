export async function chargerQuestions(theme) {
    try {
      const response = await fetch(`src/js/data/${theme}.json`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur de chargement JSON :", error);
      return [];
    }
  }
  
  export function verifierReponse(question) {
    return question.answer;
  }
  