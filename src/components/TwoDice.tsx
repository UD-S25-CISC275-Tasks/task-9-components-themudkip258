import React, { useState } from "react";
import { Button } from "react-bootstrap";
//import { render, screen, fireEvent } from "@testing-library/react";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): React.JSX.Element {
    let [leftDie, setLeftDie] = useState<number>(2);
    let [rightDie, setRightDie] = useState<number>(3);
    let [gameText, setGameText] = useState<string>("");
    //let leftDie2: number = screen.getByTestId("left-die");

    function rollLeft(): void {
        leftDie = d6();
        setLeftDie(leftDie);
    }
    function rollRight(): void {
        rightDie = d6();
        setRightDie(rightDie);
    }
    function checkRolls(): void {
        if (leftDie === rightDie && leftDie === 1) {
            gameText = "Lose";
        } else if (leftDie === rightDie) {
            gameText = "Win";
        } else {
            gameText = "";
        }
        setGameText(gameText);
    }
    return (
        <div>
            Two Dice
            <div>
                <span data-testid="left-die">{leftDie} </span>
                <span data-testid="right-die">{rightDie}</span>
            </div>
            <Button
                onClick={() => {
                    rollLeft();
                    checkRolls();
                }}
            >
                Roll Left
            </Button>
            <Button
                onClick={() => {
                    rollRight();
                    checkRolls();
                }}
            >
                Roll Right
            </Button>
            <div>{gameText}</div>
        </div>
    );
}
