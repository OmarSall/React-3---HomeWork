import { useEffect, useState} from "react";

export default function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formatTime = (number) => String(number).padStart(2, "0");

    return (
        <div>
            🕒 {formatTime(time.getHours())}:{formatTime(time.getMinutes())}:{formatTime(time.getSeconds())}
        </div>
    );
}
