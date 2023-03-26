sequenceDiagram
    actor User
    actor Certifier
    actor Certified
    participant Interface
    participant Wallet
    participant SmartContract

    rect rgb(225, 246, 255)
    note right of User: Get a certication.
    User->>+Interface:Enter hash
    Interface->>+SmartContract:Send request
    SmartContract-->>-Interface:Send Response
    Interface-->>-User:return data
    end

    rect rgb(254, 246, 255)
    note right of User: AddCertification.
 
    alt is connected
    Certifier->>+Interface:Enter certifiacation infos
    Interface->>+Wallet:Check connexion
    Wallet-->>-Interface:add certifier address
    Interface->>+SmartContract:Send request
    SmartContract-->>Wallet:send Logs
    SmartContract-->>-Interface:send Logs
    Interface-->>-Certifier:Confirm certification
    else not connected
    Certifier->>+Interface:Enter certifiacation infos
    Interface->>+Wallet:Check connexion
        
    Wallet->>+Certifier: ask Login
    Certifier-->>-Wallet: enter Information
    Wallet-->>-Interface:add certifier address
    Interface->>+SmartContract:Send request
    SmartContract-->>Wallet:send Logs
    SmartContract-->>-Interface:send Logs
    Interface-->>-Certifier:Confirm certification
    end
    end
    
    rect rgb(211, 248, 211)
    note right of User: toogle visibility certification.
    alt is connected
    Certified->>+Interface:Enter certifiacation infos
    Interface->>+Wallet:Check connexion
    Wallet-->>-Interface:add certifier address
    Interface->>+SmartContract:Send request
    SmartContract-->>Wallet:send Logs
    SmartContract-->>-Interface:send Logs
    Interface-->>-Certified:Confirm certification
    else not connected
    Certified->>+Interface:Enter certifiacation infos
    Interface->>+Wallet:Check connexion
        
    Wallet->>+Certified: ask Login
    Certified-->>-Wallet: enter Information
    Wallet-->>-Interface:add certifier address
    Interface->>+SmartContract:Send request
    SmartContract-->>Wallet:send Logs
    SmartContract-->>-Interface:send Logs
    Interface-->>-Certified:Confirm certification
    end
    end