import { Question } from "./question";

export const QUESTIONS: Question[] = [
  {
    id: 0,
    description: "Qual desses frameworks foi desenvolvido pelo Google?",
    answers: [
      { id: "A", description: "Spring" },
      { id: "B", description: "React" },
      { id: "C", description: "Svelte" },
      { id: "D", description: "Vue" },
      { id: "E", description: "Angular" },
    ],
    correct: "E",
  },
  {
    id: 1,
    description: "Qual a linguagem de programação mais velha ainda em uso?",
    answers: [
      { id: "A", description: "COBOL" },
      { id: "B", description: "LISP" },
      { id: "C", description: "C" },
      { id: "D", description: "Java" },
      { id: "E", description: "BASIC" },
    ],
    correct: "A",
  },
  {
    id: 2,
    description: "Qual desses projetos nao é FOSS?",
    answers: [
      { id: "A", description: "GNU" },
      { id: "B", description: "Linux" },
      { id: "C", description: "Git" },
      { id: "D", description: "AWS" },
      { id: "E", description: "BSD" },
    ],
    correct: "D",
  },
  {
    id: 3,
    description: "Qual dessas linguagens não é orientada a objetos?",
    answers: [
      { id: "A", description: "C++" },
      { id: "B", description: "Java" },
      { id: "C", description: "JavaScript" },
      { id: "D", description: "Haskell" },
      { id: "E", description: "Python" },
    ],
    correct: "D",
  },
  {
    id: 4,
    description: "Dentre essas, qual a linguagem mais rápida?",
    answers: [
      { id: "A", description: "Scratch" },
      { id: "B", description: "Java" },
      { id: "C", description: "Python" },
      { id: "D", description: "Lisp" },
      { id: "E", description: "ASM" },
    ],
    correct: "E",
  },
];
