import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    //Halloween: 🎃, Christmas: 🎄, New Years: 🎇, Birthday: 🎂, Easter: 🐇
    let [holiday, setHoliday] = useState<string>("🎂");
    function yearHoliday(): void {
        if (holiday === "🎂") {
            holiday = "🎄";
        } else if (holiday === "🎄") {
            holiday = "🎇";
        } else if (holiday === "🎇") {
            holiday = "🐇";
        } else if (holiday === "🐇") {
            holiday = "🎃";
        } else if (holiday === "🎃") {
            holiday = "🎂";
        }
        setHoliday(holiday);
    }
    function alphabetHoliday(): void {
        if (holiday === "🎂") {
            holiday = "🎄";
        } else if (holiday === "🎄") {
            holiday = "🐇";
        } else if (holiday === "🐇") {
            holiday = "🎃";
        } else if (holiday === "🎃") {
            holiday = "🎇";
        } else if (holiday === "🎇") {
            holiday = "🎂";
        }
        setHoliday(holiday);
    }
    return (
        <div>
            Cycle Holiday{" "}
            <div>
                <Button onClick={alphabetHoliday}>Change by Alphabet</Button>
                <Button onClick={yearHoliday}>Change by Year</Button>
            </div>
            <div>Holiday: {holiday}</div>
        </div>
    );
}
