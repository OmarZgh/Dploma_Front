import {QRCodeCanvas, QRCodeSVG} from "qrcode.react";
import {Button, Container} from "@mui/material";
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
        <Container sx={{alignItems:"center"}}>
            <Box display={"flex"} flexDirection={"column"}>
                <QRCodeCanvas
                    id="qrcode"
                    value={DOMAIN + "?id=" + hash}
                    size={256}>
                </QRCodeCanvas>
                <Button sx={{m:1}} variant={"contained"} onClick={downloadQR}> Download QR </Button>
            </Box>
        </Container>
    )
}
export default QRcode
