import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = (): React.ReactElement => {
    return (
        <div
            style={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
            }}
        >
            <CircularProgress />
        </div>
    );
};
export default Loading;
