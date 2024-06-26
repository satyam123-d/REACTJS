import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_bBNoeyp992fEN43u9StHGi8EnGGrMZAs6NGa5nyH`)
            .then((res) => res.json())
            .then((res) => setData(res));
    }, [currency]);

    console.log(data);
    return data;
}

export default useCurrencyInfo;
