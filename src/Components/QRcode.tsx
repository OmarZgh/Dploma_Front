import {QRCodeCanvas, QRCodeSVG} from "qrcode.react";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import {Env} from "../Env";
import DOMAIN = Env.DOMAIN;

interface IProps {
    hash?: string
}

const QRcode = (props: IProps) => {
    const {hash} = props
    const downloadQR = (): void => {
        const canvas: HTMLCanvasElement | null = document.getElementById("qrcode") as HTMLCanvasElement | null;
        if (!canvas) {
            throw new Error("Canvas element not found");
        }
        const pngUrl: string = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
        const downloadLink: HTMLAnchorElement = document.createElement("a");
        downloadLink.href = pngUrl;
        downloadLink.download = "qrcode.png";
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <Box display={"flex"} flexDirection={"column"}>
            <QRCodeCanvas
                id="qrcode"
                value={DOMAIN+"?id=" + hash}
                size={256}>
            </QRCodeCanvas>
            <Button onClick={downloadQR}> Download QR </Button>
        </Box>
    )
}
export default QRcode
