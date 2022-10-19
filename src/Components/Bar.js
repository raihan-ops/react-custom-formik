import React from 'react';

const Bar = () => {
    const Progress_bar = ({ bgcolor, progress, height, align = "horizontal" }) => {

        const Parentdiv = {
            height: align === "horizontal" ? height : "100%",
            width: align === "horizontal" ? '100%' : height,
            // backgroundColor:  'whitesmoke',
            backgroundColor: align === "horizontal" ? 'whitesmoke' : `${bgcolor}`,
            border: `2px solid ${bgcolor}`,
            margin: 50,
            borderRadius: "5px"
        }

        const Childdiv = {
            height: align == "horizontal" ? '100%' : `${progress}%`,
            width: align == "horizontal" ? `${progress}%` : "100%",
            backgroundColor: align == "horizontal" ? bgcolor : "whitesmoke",
            // backgroundColor: "yellow",

            textAlign: 'right'
        }

        const progresstext = {
            padding: 10,
            color: 'black',
            fontWeight: 900
        }

        return (
            <div style={Parentdiv}>
                <div style={Childdiv}>

                </div>
            </div>
        )
    }
    return (
        <div>
            <Progress_bar bgcolor="green" progress='98' height={20} />
            <div style={{
                height:"200px"
            }}>
                <Progress_bar bgcolor="orange" progress='0' height={20} align="vertical" />
                <Progress_bar bgcolor="red" progress='50' height={20} align="vertical" />
            </div>
        </div>
    );
};

export default Bar;