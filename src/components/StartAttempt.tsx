import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): React.JSX.Element {
    let [attempts, setAttempts] = useState<number>(4);
    let [progress, setProgress] = useState<boolean>(false);
    let [stopDisable, setStopDisable] = useState<boolean>(true);
    let [startDisable, setStartDisable] = useState<boolean>(false);
    let [mulliganDisable, setMulliganDisable] = useState<boolean>(false);
    function addAttempt(): void {
        attempts += 1;
        setAttempts(attempts);
    }
    function subAttempt(): void {
        attempts -= 1;
        setAttempts(attempts);
    }
    /*function changeStopDisable(): void {
        stopDisable = !stopDisable;
        setStopDisable(stopDisable);
    }*/
    function checkAttempts() {
        if (attempts <= 0) {
            attempts = 0;
            startDisable = true;
            setStartDisable(startDisable);
        } else {
            startDisable = false;
            setStartDisable(startDisable);
        }
    }
    function changeProgress() {
        progress = !progress;
        setProgress(progress);
    }
    function checkProgress() {
        if (progress) {
            startDisable = true;
            mulliganDisable = true;
            stopDisable = false;
        } else {
            startDisable = false;
            mulliganDisable = false;
            stopDisable = true;
        }
        setStartDisable(startDisable);
        setMulliganDisable(mulliganDisable);
        setStopDisable(stopDisable);
    }
    return (
        <div>
            Start Attempt
            <div>
                <Button
                    disabled={mulliganDisable}
                    onClick={() => {
                        addAttempt();
                        checkAttempts();
                    }}
                >
                    Mulligan
                </Button>
                <Button
                    disabled={startDisable}
                    onClick={() => {
                        subAttempt();
                        changeProgress();
                        checkProgress();
                    }}
                >
                    Start Quiz
                </Button>
                <Button
                    disabled={stopDisable}
                    onClick={() => {
                        changeProgress();
                        checkProgress();
                        checkAttempts();
                    }}
                >
                    Stop Quiz
                </Button>
                <div>Attempts: {attempts}</div>
            </div>
        </div>
    );
}
