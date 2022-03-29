class QuestionAndAnswerStore {
  fragment_question: Array<{ question: string; answer: string }> = [];
  questions: Array<{ question: string; answer: string }> = [];
}

export interface InjectedQuestionAndAnswer {
  questionAndAnswerStore: QuestionAndAnswerStore;
}

export { QuestionAndAnswerStore };
