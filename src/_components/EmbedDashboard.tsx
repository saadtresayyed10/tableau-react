import React, { useEffect, useRef } from "react";

const TableauDashboard: React.FC = () => {
  const vizContainerRef = useRef<HTMLDivElement | null>(null);
  const url =
    "https://public.tableau.com/views/McDonaldFinancialStatement/Dashboard1";

  useEffect(() => {
    const loadScript = async () => {
      const scriptElement = document.createElement("script");
      scriptElement.src =
        "https://public.tableau.com/javascripts/api/viz_v1.js";
      scriptElement.async = true;
      document.body.appendChild(scriptElement);

      scriptElement.onload = () => {
        if (vizContainerRef.current) {
          new window.tableau.Viz(vizContainerRef.current, url);
        }
      };
    };

    loadScript();
  }, []);

  return (
    <div
      ref={vizContainerRef}
      className="tableauPlaceholder"
      style={{ position: "relative", width: "100%", height: "65vh" }}
    >
      <noscript>
        <a href="#">
          <img
            alt="COVID 2020"
            src="https://public.tableau.com/static/images/CO/COVID2020_17036841933140/COVID2020/1_rss.png"
            style={{ border: "none" }}
          />
        </a>
      </noscript>
    </div>
  );
};

export default TableauDashboard;
