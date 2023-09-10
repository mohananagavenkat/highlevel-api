

 ## Live API Server

https://highlevel-api-j9a4.onrender.com

## End Points

**POST /wallet:**
to setup the wallet with the given balance at start

Request Body

    {
	    "name":"venkat",
	    "balance":100
	}

Response

    {
        "_id": "64fc8374201237f00acd6a50",
        "name": "venkat",
        "balance": 439.1368,
        "createdAt": "2023-09-09T14:38:44.528Z",
        "updatedAt": "2023-09-10T05:33:13.286Z",
        "__v": 19
    }


**GET /wallet/:walletId**:
fetch the details about the given wallet

Response

    {
        "_id": "64fc8374201237f00acd6a50",
        "name": "venkat",
        "balance": 439.1368,
        "createdAt": "2023-09-09T14:38:44.528Z",
        "updatedAt": "2023-09-10T05:33:13.286Z",
        "__v": 19
    }

**POST transaction/:walletId:**
make the transaction

Request Body

    {
		   "walletId":"64fc8374201237f00acd6a50",
		   "amount":-10,
		   "description":"debitig some amount"
	}

Response

    {
    	"_id": "64fc8374201237f00acd6a50",
    	"name": "venkat",
    	"balance": 429.1368,
    	"createdAt": "2023-09-09T14:38:44.528Z",
    	"updatedAt": "2023-09-10T05:59:59.798Z",
    	"__v": 20
    }

**GET transaction?walletId=x&limit=x&offset=x&sortBy=x&sortDirection=x:**
 get the transactions

Response

    {
        "transactions": [
            {
                "_id": "64fd5b6007678eddc3090af0",
                "wallet": "64fc8374201237f00acd6a50",
                "amount": -10,
                "balance": 429.1368,
                "description": "debitig some amount",
                "type": "DEBIT",
                "createdAt": "2023-09-10T06:00:00.111Z",
                "updatedAt": "2023-09-10T06:00:00.111Z",
                "__v": 0
            },
            {
                "_id": "64fd5519a7ba4812e707e34c",
                "wallet": "64fc8374201237f00acd6a50",
                "amount": -10,
                "balance": 439.1368,
                "description": "debitimg 10 prod",
                "type": "DEBIT",
                "createdAt": "2023-09-10T05:33:13.360Z",
                "updatedAt": "2023-09-10T05:33:13.360Z",
                "__v": 0
            },
            {
                "_id": "64fd5509a7ba4812e707e348",
                "wallet": "64fc8374201237f00acd6a50",
                "amount": 10,
                "balance": 449.1368,
                "description": "credtign 10 prod",
                "type": "CREDIT",
                "createdAt": "2023-09-10T05:32:57.382Z",
                "updatedAt": "2023-09-10T05:32:57.382Z",
                "__v": 0
            },        ],
        "total": 19
    }

## Extra Info

Using **MongoDB transactions** while crediting/debiting amount to make sure they are ACID

using **Optimistic Concurrency** to handle parallel credit/debit requests

## Demo Video

There is a demo video in the repository. Unable to show it in readMe because of it's size.

