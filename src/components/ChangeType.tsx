import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): React.JSX.Element {
    let [question, setQuestion] = useState<QuestionType>(
        "short_answer_question",
    );
    let [questionText, setQuestionText] = useState<string>("Short Answer");
    function changeQuestionType(): void {
        if (question === "multiple_choice_question") {
            question = "short_answer_question";
            questionText = "Short Answer";
        } else {
            question = "multiple_choice_question";
            questionText = "Multiple Choice";
        }
        setQuestion(question);
        setQuestionText(questionText);
    }
    return (
        <div>
            Change Type
            <div>
                <Button
                    onClick={() => {
                        changeQuestionType();
                    }}
                >
                    Change Type
                </Button>
            </div>
            <div>{questionText}</div>
        </div>
    );
}
