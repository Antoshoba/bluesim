
import { ArcElement, Chart } from "chart.js";
import { Doughnut } from "react-chartjs-2";

Chart.register(ArcElement);

const data = {
    datasets: [
        {
            data: [5, 10, 10,],
            backgroundColor: [
                "#014A62",
                "#FFB27A",
                "#EC5252",

            ],
            display: true,
            borderColor: "#D1D6DC",

        }
    ]
};

const ResidentChart = () => {
    return (
        <div>
            <Doughnut
                data={data}
                options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: false
                        }
                    },
                    rotation: -90,
                    circumference: 180,
                    cutout: "92%",
                    maintainAspectRatio: true,
                    responsive: true
                }}
            />
            {/* <div
                style={{
                    position: "absolute",
                    top: "55%",
                    left: "50%",
                    transform: "translate(-100%, -50%)",
                    textAlign: "center"
                }}
            >
                <div>Text Here</div
            </div> */}
        </div>
    );
};

export default ResidentChart;
