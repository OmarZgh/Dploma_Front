import { useEffect, useState } from "react";

export function connexioStatus() {
    return (window as any)
        .ethereum.request({ method: "eth_accounts" })
        .then(handleAccountsChanged)
        .catch(console.error);
}

function handleAccountsChanged(accounts: string[]) {
    if (accounts.length === 0) {
        console.log("Not connected to MetaMask.");
        return false;
    } else {
        console.log("Connected to MetaMask.");
        return true;
    }
}

export function handleConnect() {
    (window as any)
        .ethereum.request({ method: "eth_requestAccounts" })
        .then(handleAccountsChanged)
        .catch(console.error);
}

export const useWeb3 = () => {
    const [connected, setConnected] = useState(false);
    const [account, setAccount] = useState("");

    useEffect(() => {
        const fetchWeb3 = async () => {
            setAccount((window as any).ethereum.selectedAddress);
            setConnected(await connexioStatus());
        };

        fetchWeb3();
    }, [connected]);

    return { connected, account, connect: handleConnect };
};
