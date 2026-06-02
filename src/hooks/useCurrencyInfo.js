import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchRates = async () => {
            const res = await fetch(
                `https://open.er-api.com/v6/latest/${currency}`
            );
            const result = await res.json();
            setData(result.rates);
        };
        fetchRates();
    }, [currency]);
    return data;
}

export default useCurrencyInfo;