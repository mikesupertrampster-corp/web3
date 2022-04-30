package main

import (
	"fmt"
	"github.com/ethereum/go-ethereum/ethclient"
	"github.com/unstoppabledomains/resolution-go/v2"
	"log"
)

func main() {
	ethereumUrl := "https://mainnet.infura.io/v3/aebdd7711d2d4f88a89a4c038243aa6a"
	ethereumL2Url := "https://polygon-mainnet.infura.io/v3/aebdd7711d2d4f88a89a4c038243aa6a"
	ethereumNetworkId := "mainnet"
	ethereumL2NetworkId := "polygon"

	unsBuilder := resolution.NewUnsBuilder()
	backend, err := ethclient.Dial(ethereumUrl)
	if err != nil {
		log.Panic(err)
	}

	unsBuilder.SetContractBackend(backend).SetEthereumNetwork(ethereumNetworkId)
	backendL2, err := ethclient.Dial(ethereumL2Url)
	if err != nil {
		log.Panic(err)
	}

	unsBuilder.SetL2ContractBackend(backendL2).SetL2EthereumNetwork(ethereumL2NetworkId)
	unsResolution, err := unsBuilder.Build()
	if err != nil {
		log.Panic(err)
	}

	ethAddress, _ := unsResolution.Addr("mikesupertrampster.crypto", "ETH")
	fmt.Println(ethAddress)
}
