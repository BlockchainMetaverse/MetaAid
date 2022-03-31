// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";

import "MintMetaAidToken.sol";

contract SaleMetaAidToken is Ownable {
    MintMetaAidToken public mintMetaAidToken;

    address public ukraineAddress;

    constructor(address _mintMetaAidToken, address _ukraineAddress) {
        mintMetaAidToken = MintMetaAidToken(_mintMetaAidToken);
        ukraineAddress = _ukraineAddress;
    }

    mapping(uint => uint) public tokenPrices;
    mapping(uint => uint) public remainTokens;

    uint public totalAidPrice;

    function setForSaleMetaAidToken(uint _tokenId, uint _price) public onlyOwner {
        require(_price > 0, "Price is zero is lower.");
        require(tokenPrices[_tokenId] == 0, "This MetaAidToken is already on sale.");
        require(mintMetaAidToken.isApprovedForAll(owner(), address(this)), "Owner did not approve.");

        tokenPrices[_tokenId] = _price;
        remainTokens[_tokenId] = mintMetaAidToken.balanceOf(msg.sender, _tokenId);
    }

    function purchaseMetaAidToken(uint _tokenId) public payable {
        uint price = tokenPrices[_tokenId];

        require(price > 0, "This MetaAidToken is not on sale.");
        require(price <= msg.value, "Caller sent lower than price.");
        require(owner() != msg.sender, "Caller is service address.");
        require(remainTokens[_tokenId] > 0, "This MetaAidToken is sold out.");

        // All ETHs will be transfered to Ukraine.
        // Ukraine ETH Address - 0x165CD37b4C644C2921454429E7F9358d18A45e14
        // https://twitter.com/Ukraine/status/1497594592438497282
        payable(ukraineAddress).transfer(msg.value);

        mintMetaAidToken.safeTransferFrom(owner(), msg.sender, _tokenId, 1, "");

        totalAidPrice += msg.value;
        remainTokens[_tokenId] -= 1;
    }

    function getMetaAidTokens(address _owner) public view returns (uint[] memory, uint[] memory) {
        uint totalSupply = mintMetaAidToken.totalSupply();

        require(totalSupply > 0, "Not exist MetaAidToken.");
        
        uint[] memory tokenIds = new uint[](totalSupply);
        uint[] memory tokenAmounts = new uint[](totalSupply);

        for(uint i = 0; i < totalSupply; i++) {
           uint tokenId = i + 1;
           uint tokenAmount = mintMetaAidToken.balanceOf(_owner, tokenId);
           
           tokenIds[i] = tokenId;
           tokenAmounts[i] = tokenAmount;
        }

        return (tokenIds, tokenAmounts);
    }

    function getMetaAidTokenData(uint _tokenId) public view returns (string memory, uint, uint) {
        string memory tokenUri = mintMetaAidToken.uri(_tokenId);
        uint tokenPrice = tokenPrices[_tokenId];
        uint remainToken = remainTokens[_tokenId];

        return (tokenUri, tokenPrice, remainToken);
    }
}