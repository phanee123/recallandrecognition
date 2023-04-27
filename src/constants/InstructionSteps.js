const INSTRUCTION_STEPS_TEST1 = [
  {
    stepIndex: 1,
    content: `<h2>Welcome to the experiment!</h2>
            <p>
              In our day to day life, numerous stimuli act upon our sense organs. Yet we notice and attend to very few
              objects or events. Hence, Attention is defined as the act of focusing our consciousness on an object or an
              event.
            </p>
            <p>
              In this experiment, we will try to understand how much we can grasp in one short presentation with different
              types of stimuli, such as, dots, words, nonsense syllables and numbers
            </p>`,
    buttonLabel2: "Next",
  },
  {
    stepIndex: 2,
    content: `
            <h2>Instructions</h2>
            <p>
              In this experiment, to study span of attention five different types of visual stimuli/ conditions will be
              presented.
            </p>
            <p>Each condition will be administered separately.</p>
            <p>And, instructions are given separately for each condition.</p>
            <p>*For Demo purposes we are only presenting one condition.</p>`,
    buttonLabel1: "Previous",
    buttonLabel2: "Next",
  },
  {
    stepIndex: 3,
    content: `<p>Experiment will start after you end instructions.</p>`,
    buttonLabel1: "Back",
    buttonLabel2: "End Instructions",
  },
];

const INSTRUCTION_STEPS_TEST2 = [
  {
    stepIndex: 1,
    content: `<p1>
    Please take your record note book and write down the words you have seen 
    on the screen. Try to write as many words as possible.
    </p1>
    <p1>
    Please take your record note book and write down the words you have seen 
    on the screen. Try to write as many words as possible.
    </p1>`,
    buttonLabel2: "Next",
  },
];

const INSTRUCTION_STEPS_TEST3 = [
  {
    stepIndex: 1,
    content: `<p1>
    In the following page you will see words twice as many as the words you have
    seen previously on the screen. All you have to do is identify the words you
    have seen before and click on them.
    </p1>
    <p1>
    Please give your responses as fast as possible.
    </p1>`,
    buttonLabel2: "Next",
  },
];

export {
  INSTRUCTION_STEPS_TEST1,
  INSTRUCTION_STEPS_TEST2,
  INSTRUCTION_STEPS_TEST3,
};
