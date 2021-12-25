import { FC, useMemo } from "react";
import { css } from "@emotion/css";

interface Props {
  question: { question: string; answer: string };
}

export const Faq: FC<Props> = ({ question }) => {
  const styles = useMemo(() => getStyles(), []);
  return (
    <div>
      <div className={styles.question}>
        Question:
        <div className={styles.questionContent}>{question.question}</div>
      </div>
      <div className={styles.answer}>
        Answer:
        <div className={styles.answerContent}>{question.answer}</div>
      </div>
    </div>
  );
};

const getStyles = () => {
  return {
    question: css`
      font-weight: bold;
    `,
    questionContent: css`
      font-weight: normal;
    `,
    answer: css`
      font-weight: bold;
    `,
    answerContent: css`
      font-weight: normal;
    `,
  };
};
