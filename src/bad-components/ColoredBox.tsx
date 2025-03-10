import React, { useState } from "react";
import { Button } from "react-bootstrap";

export const COLORS = ["red", "blue", "green"];
const DEFAULT_COLOR_INDEX = 0;

interface colorButtonProps {
    setColor: (newColor: number) => void;
    color: number;
}
interface justColors {
    color: number;
}
function ChangeColor({ setColor, color }: colorButtonProps): React.JSX.Element {
    //const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    function changeIndex() {
        setColor((1 + color) % COLORS.length);
    }
    return (
        <Button
            onClick={() => {
                changeIndex();
            }}
        >
            Next Color
        </Button>
    );
}

function ColorPreview({ color }: justColors): React.JSX.Element {
    return (
        <div
            data-testid="colored-box"
            style={{
                width: "50px",
                height: "50px",
                backgroundColor: COLORS[color],
                display: "inline-block",
                verticalAlign: "bottom",
                marginLeft: "5px",
            }}
        ></div>
    );
}

export function ColoredBox(): React.JSX.Element {
    const [colorIndex, setColorIndex] = useState<number>(DEFAULT_COLOR_INDEX);
    return (
        <div>
            <h3>Colored Box</h3>
            <span>The current color is: {COLORS[colorIndex]}</span>
            <div>
                <ChangeColor
                    setColor={setColorIndex}
                    color={colorIndex}
                ></ChangeColor>
                <ColorPreview color={colorIndex}></ColorPreview>
            </div>
        </div>
    );
}
