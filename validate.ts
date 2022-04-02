import {
    toBuffer,
    fromUtf8,
    hashPersonalMessage,
    fromRpcSig,
    ecrecover,
    publicToAddress,
    bufferToHex,
} from 'ethereumjs-util'

export function validate(
    address,
    signedMessage,
    msg
) {
    // We now are in possession of msg, publicAddress and signature. We
    // can perform an elliptic curve signature verification with ecrecover
    const msgBuffer = toBuffer(fromUtf8(msg))
    const msgHash = hashPersonalMessage(msgBuffer)
    const signatureParams = fromRpcSig(signedMessage)
    const publicKey = ecrecover(
        msgHash,
        signatureParams.v,
        signatureParams.r,
        signatureParams.s
    )
    const addressBuffer = publicToAddress(publicKey)
    const _address = bufferToHex(addressBuffer)

    // The signature verification is successful if the address found with
    // ecrecover matches the initial publicAddress
    if (_address.toLowerCase() === address.toLowerCase()) {
    }
    // Validated
    else {
        // Signature verification failed
    }
}
