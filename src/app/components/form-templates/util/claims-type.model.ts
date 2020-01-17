export const domestiClaimModel = {
  uid: "",
  employee_name: "Namrata",
  trip_purpose: "Its a secret",
  dates: {
    leave: "5/2/2020",
    return: "7/2/2020"
  },
  tables: [
    "intercity_travel",
    "hotel",
    "meals",
    "local_travel",
    "other_expenses"
  ],
  intercity_travel: [
    {
      date: "1/11/2020",
      mode: "spaceship",
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      amount: 10000,
      paid_by_me: true
    }
  ],
  hotel: [
    {
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      hotel: "Hotel trasylvania",
      city: "Bistria",
      amount: 100000,
      paid_by_me: true,
      supporting: 111
    }
  ],
  meals: [
    {
      date: "1/11/2020",
      total: 1000,
      particulars: "no idea what this field is for :|",
      supporting: 4545
    }
  ],
  local_travel: [ {
    date: "1/11/2020",
    mode: "spaceship",
    from_date: "5/2/2020",
    to_date: "7/2/2020",
    purpose: "Its a secret",
    amount: 10000
  }],
  other_expenses: [],
  claimType: "domestic_claim"
};

export const expenseClaimJson = {
  uid: "",
  employee_name: "Namrata",
  employee_code: null,
  dates: "",
  tables: ["details"],
  details: [
    {
      date: "1/11/2020",
      amount: 1000,
      particulars: "no idea what this field is for :|",
      supporting: 4545,
      paid_by_me: true
    }
  ]
};

export const foreignClaimJson = {
  uid: "",
  employee_name: "Namrata",
  trip_purpose: "Its a secret",
  dates: {
    leave: "5/2/2020",
    return: "7/2/2020"
  },
  tables: [
    "intercity_travel",
    "hotel",
    "meals",
    "local_travel",
    "other_expenses"
  ],
  intercity_travel: [
    {
      date: "1/11/2020",
      mode: "spaceship",
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      amount: 10000,
      paid_by_me: true
    }
  ],
  hotel: [
    {
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      hotel: "Hotel trasylvania",
      city: "Bistria",
      amount: 100000,
      paid_by_me: true,
      supporting: 111
    }
  ],
  meals: [
    {
      date: "1/11/2020",
      total: 1000,
      particulars: "no idea what this field is for :|",
      supporting: 4545
    }
  ],
  local_travel: [],
  other_expenses: [],
  claimType: "domestic_claim",
  team_name: "",
  bill_to_client: true
};
export const localConveyanceClaimJson = {
  uid: "",
  employee_name: "Namrata",
  trip_purpose: "Its a secret",
  dates: {
    leave: "5/2/2020",
    return: "7/2/2020"
  },
  tables: [
    "intercity_travel",
    "hotel",
    "meals",
    "local_travel",
    "other_expenses"
  ],
  intercity_travel: [
    {
      date: "1/11/2020",
      mode: "spaceship",
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      amount: 10000,
      paid_by_me: true
    }
  ],
  hotel: [
    {
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      hotel: "Hotel trasylvania",
      city: "Bistria",
      amount: 100000,
      paid_by_me: true,
      supporting: 111
    }
  ],
  meals: [
    {
      date: "1/11/2020",
      total: 1000,
      particulars: "no idea what this field is for :|",
      supporting: 4545
    }
  ],
  local_travel: [
    {
      date: "1/11/2020",
      mode: "spaceship",
      from_date: "5/2/2020",
      to_date: "7/2/2020",
      purpose: "Its a secret",
      amount: 10000
    }
  ],
  other_expenses: [],
  claimType: "domestic_claim",
  team_name: "",
  bill_to_client: true
};
