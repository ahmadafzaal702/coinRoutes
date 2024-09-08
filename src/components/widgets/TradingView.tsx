import { useEffect, useRef } from 'react';

const TradingViewChart = ({ currency }: { currency: string }) => {
    const container = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = `
        {
          "autosize": true,
          "height": "550",
          "symbol": "COINBASE:${currency.replace("-", "")}",
          "interval": "W",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": false,
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;

        if (container.current) {
            if (container.current.lastChild) {
                container.current.removeChild(container.current.lastChild);
            }
            container.current.appendChild(script);
        }

    }, [currency]);

    return (
        <>
            <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}></div>
        </>
    );
};

export default TradingViewChart;
