export interface AccountInfo {
  accountHolderName: string;
  accountNumber: number;
  balance: number;
  lastTransactionDate: Date;
  dob: Date;
  accountType: string; // e.g., "Checking", "Savings", "Credit Card", "Loan"
currency: string; // e.g., "USD", "EUR", "GBP"
  interestRate: number; // e.g., 0.5 for 0.5%
  branchName: string;
branchCode: string;
creationDate: Date;
contactEmail: string;
contactPhone: string;
}

export const account: AccountInfo =
{
    accountHolderName: "John Doe",
    accountNumber: 1234567890,
    balance: 1500.00,
    lastTransactionDate: new Date("2023-12-01"),
    dob: new Date("1980-05-15"),
    accountType: "Checking",
    currency: "USD",
    interestRate: 0.5,
    branchName: "Main Street",
    branchCode: "MS123",
    creationDate: new Date("2010-06-01"),
    contactEmail: "john.doe@example.com",
    contactPhone: "555-1234",
};

export const providers=[
  {
    "id": 1,
    "name": "Service Provider 1",
    "description": "Description of Service Provider 1"
  },
  {
    "id": 2,
    "name": "Service Provider 2",
    "description": "Description of Service Provider 2"
  },
  {
    "id": 3,
    "name": "Service Provider 3",
    "description": "Description of Service Provider 3"
  },
  {
    "id": 4,
    "name": "Service Provider 4",
    "description": "Description of Service Provider 4"
  },
  {
    "id": 5,
    "name": "Service Provider 5",
    "description": "Description of Service Provider 5"
  },
  {
    "id": 6,
    "name": "Service Provider 6",
    "description": "Description of Service Provider 6"
  },
  {
    "id": 7,
    "name": "Service Provider 7",
    "description": "Description of Service Provider 7"
  },
  {
    "id": 8,
    "name": "Service Provider 8",
    "description": "Description of Service Provider 8"
  },
  {
    "id": 9,
    "name": "Service Provider 9",
    "description": "Description of Service Provider 9"
  },
  {
    "id": 10,
    "name": "Service Provider 10",
    "description": "Description of Service Provider 10"
  },
  {
    "id": 11,
    "name": "Service Provider 11",
    "description": "Description of Service Provider 11"
  },
  {
    "id": 12,
    "name": "Service Provider 12",
    "description": "Description of Service Provider 12"
  },
  {
    "id": 13,
    "name": "Service Provider 13",
    "description": "Description of Service Provider 13"
  },
  {
    "id": 14,
    "name": "Service Provider 14",
    "description": "Description of Service Provider 14"
  },
  {
    "id": 15,
    "name": "Service Provider 15",
    "description": "Description of Service Provider 15"
  },
  {
    "id": 16,
    "name": "Service Provider 16",
    "description": "Description of Service Provider 16"
  },
  {
    "id": 17,
    "name": "Service Provider 17",
    "description": "Description of Service Provider 17"
  },
  {
    "id": 18,
    "name": "Service Provider 18",
    "description": "Description of Service Provider 18"
  },
  {
    "id": 19,
    "name": "Service Provider 19",
    "description": "Description of Service Provider 19"
  },
  {
    "id": 20,
    "name": "Service Provider 20",
    "description": "Description of Service Provider 20"
  }
]
