import sound1 from "../assets/instructionaudio1.mp3";
import sound2 from "../assets/instructionaudio2.mp3";

const INSTRUCTION_STEPS_TEST1 = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
            <p>
            Our learning experiences or information about events, things, and the people we encounter are retained or 
            stored or recorded in our memory. How much is retained and how long the retained material lasts depends on
            various factors like learning, motivation, forgetting, etc. There are many ways of testing a person’s memory.
            The most common methods are recall & recognition.
            </p>
            <p>
            Recall involves the verbal reproduction or repetition of learnt material. In free recall, chunks, or pieces of 
            learnt material may be recalled freely without following any specific order. Some may reproduce the answer
            instantly, i.e., without following a specific order.
            </p>
            <p>
            In recognition some sort of a suggestion or clue is presented along with originally perceived objects and the
            individual has to pick out the objects he has perceived initially
            </p>
            `,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `
          <h2>Conditions to be followed while conducting the experiment / Precautions!</h2>
          <p>The student or the subject will have to sit 1 ft away from the screen.</p>
          <p>The subject will have to sit comfortably in a quiet and well-ventilated room.</p>
          <p>If the subject is using phone/ tab to conduct the experiment then it is mandatory
           for him/her to put the phone on Do Not Disturb (DND) mode in order to avoid any disruptions.</p>
          <h4><u>Please keep a notebook and a pen while you are conducting the experiment because you will
           have to note down some information.</u></h4>
          `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `
          <h2>General Instructions</h2>
          <h4>Note:This experiment has to be written in your record book. Please adhere to the below format.</h4>
          <p>1.Introduction</p>
          <p>2.Materials required</p>
          <p>3.Purpose</p>
          <p>4.Particulars of the subject/student [Name,Enrollment No,Age,Date]</p>
          <p>5.Procedure for conduction</p>
          <p>6.Results</p>
          <p>7.Discussions</p>
          <p>8.Conclusion</p>
          <p>9.Practical application</p>
    
    `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 4,
    content: `
            <h2>Instructions</h2>
            <p>
            You will see a list of words presented on the screen, read carefully and try to remember as many words as possible.
            </p>
            `,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
    voiceInstruction: sound1,
  },
  {
    stepIndex: 5,
    content: `<p>After clicking on the End instructions button below, you will find <b>Ready</b> word as a signal to proceed
     to begin the experiment.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_TEST2 = [
  {
    stepIndex: 1,
    content: `<h3>
    Please take your record note book and write down the words you have seen 
    on the screen. Try to write as many words as possible.
    </h3>`,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `<p>
    After clicking on the End instructions button below,the word <b>Ready</b> will appear on screen.
    </p>
    <h4>From the words displayed,carefully identify the words which you have seen previously and respond by clicking on those words</h4>

    <p>
    *Please click your responses as fast as possible.
    </p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "End Instructions",
    voiceInstruction: sound2,
  },
];

export { INSTRUCTION_STEPS_TEST1, INSTRUCTION_STEPS_TEST2 };
