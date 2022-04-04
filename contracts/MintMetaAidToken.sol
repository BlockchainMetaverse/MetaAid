// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintMetaAidToken is ERC1155, Ownable {
    string public name;
    string public symbol;

    mapping(uint => string) metadataURIs;

    uint public totalSupply;

    uint public totalTokenAmount;

    constructor(string memory _name, string memory _symbol) ERC1155("") {
        name = _name;
        symbol = _symbol;
    }

    function setURI(uint _tokenId, string memory _uri) public {
        metadataURIs[_tokenId] = _uri;
    }
    function uri(uint _tokenId) override public view returns (string memory) {
        return metadataURIs[_tokenId];
    }

    function mintToken(string memory _uri, uint _amount) public onlyOwner {
        totalSupply++;

        metadataURIs[totalSupply] = _uri;

        totalTokenAmount += _amount;

        _mint(owner(), totalSupply, _amount, "");
    }
}