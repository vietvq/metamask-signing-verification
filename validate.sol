// SPDX-License-Identifier: MIT
pragma solidity ^0.8.8;

contract SignatureValidator {

    function validate(address signer, bytes32 hash, uint8 v, bytes32 r, bytes32 s) public pure returns (bool) {
        bytes memory prefix = "\x19Ethereum Signed Message:\n32";
        bytes32 prefixedHashMessage = keccak256(abi.encodePacked(prefix, hash));
        // Return true if the signer's address equals the recovered address from hashes.
        return signer == ecrecover(prefixedHashMessage, v, r, s);
    }
}
