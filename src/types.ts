export interface DudoI {
  id: number;
  title: string;
  description: string;
  bets: BetI[];
  creator: UserI;
  deadline: Date;
  group: UserGroupI;
  favorited: boolean;
  createdAt: Date;
  winCondition: number;
  result?: BetI;
}

export type NewDudoFormDataI = Omit<
  Partial<DudoI>,
  "id" & "bets" & "creator" & "favorited" & "createdAt" & "result"
>;

export interface BetI {
  id: number;
  option: string;
  amount: number;
  user: UserI;
  payment: boolean;
  updatedAt: Date;
  createdAt: Date;
  voting?: boolean;
}

export interface UserI {
  id: number;
  name: string;
  email: string;
  password: string;
  bets: BetI[];
  balance: number;
}

export interface UserGroupI {
  id: number;
  name: string;
  users: UserI[];
}

export interface PaymentI {
  id: number;
  amount: number;
  from: UserI;
  bet: BetI;
}

export const mockedUsers: UserI[] = [
  {
    id: 1,
    name: "John Doe",
    email: "",
    password: "",
    bets: [],
    balance: 100,
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "",
    password: "",
    bets: [],
    balance: 100,
  },
];

export const mockedGroup: UserGroupI[] = [
  {
    id: 1,
    name: "Tropa",
    users: mockedUsers,
  },
  {
    id: 2,
    name: "Pack",
    users: mockedUsers,
  },
];

export const mockedBets: BetI[] = [
  {
    id: 1,
    option: "Option 1",
    amount: 10,
    user: mockedUsers[0],
    payment: true,
    updatedAt: new Date(),
    createdAt: new Date(),
  },
  {
    id: 2,
    option: "Option 2",
    amount: 20,
    user: mockedUsers[1],
    payment: false,
    updatedAt: new Date(),
    createdAt: new Date(),
  },
];

export const mockedDudos: DudoI[] = [
  {
    id: 1,
    title: "Dudo 1",
    description: "Dudo 1 description",
    bets: mockedBets,
    creator: mockedUsers[0],
    deadline: new Date(),
    createdAt: new Date(),
    group: {
      id: 1,
      name: "Group 1",
      users: mockedUsers,
    },
    favorited: true,
    winCondition: 0.6,
  },
  {
    id: 2,
    title: "Dudo 2",
    description: "Dudo 2 description",
    bets: mockedBets,
    creator: mockedUsers[1],
    deadline: new Date(),
    createdAt: new Date(),
    favorited: false,
    group: {
      id: 2,
      name: "Group 2",
      users: mockedUsers,
    },
    winCondition: 1,
  },
];
