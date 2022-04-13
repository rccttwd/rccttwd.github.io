import React from 'react';
import styles from './Answers.module.scss';
import { WrongAnswer } from './App';
import { QuizContext } from '@site/src/theme/Root';

type MessageProps = (
  isCorrect: boolean,
  selectedOption: number,
  currentOption: number,
) => JSX.Element;

const renderedMessage: MessageProps = (
  isCorrect,
  selectedOption,
  currentOption,
) => {
  let message = '';

  if (!isCorrect && selectedOption === currentOption) {
    return <span className={styles.Comment}> ❌ 你的選擇</span>;
  }

  if (isCorrect) {
    if (selectedOption === undefined) {
      message = ' // 正確答案';
    } else if (selectedOption !== currentOption) {
      message = ' ⭕️ 正確答案';
    } else if (selectedOption === currentOption) {
      message = ' ✔️ 回答正確';
    }
  }

  return <span className={styles.Comment}>{message}</span>;
};

export default ({ questions }) => {
  const { selectedAnswer, result } = React.useContext(QuizContext);
  const alertBorder = { border: '1px solid #e27396' };

  return (
    <>
      {WrongAnswer(result)}
      {questions.map((question, number) => (
        <section
          className={styles.QuestionWrapper}
          key={number}
          style={
            selectedAnswer[number] === undefined ||
            questions[number].answerOptions[selectedAnswer[number]]?.isCorrect //check if the selected option is correct
              ? null
              : alertBorder
          }
        >
          {/* Question 題目 */}
          <div className={styles.QuestionSection}>
            {`${number + 1}. ${question.questionText}`}
          </div>

          {/* Answer 答案 */}
          <div className={styles.AnswerSection}>
            {question.answerOptions.map((option, index) => (
              <p
                key={index}
                className={option.isCorrect ? styles.CorrectAnswer : null}
              >
                <span className={option.isCorrect ? null : styles.Options}>
                  {String.fromCharCode(index + 65)}.&nbsp;
                </span>
                {option.answerText}
                {renderedMessage(
                  option.isCorrect,
                  selectedAnswer[number],
                  index,
                )}
              </p>
            ))}
          </div>
        </section>
      ))}
    </>
  );
};