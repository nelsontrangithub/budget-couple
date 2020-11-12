export type Option = {
  name: string;
  value: string;
  description: string;
};

export const OPTIONS: Option[] = [
  {
    name: "Based on income",
    value: "income",
    description:
      "The amount you and your partner owe for shared expenses is proportional to the total income you each contribute to your household.",
  },
  {
    name: "50/50 split",
    value: "half",
    description: "Your shared expenses are split in half for you and your partner.",
  },
  {
    name: "Custom",
    value: "custom",
    description:
      "Designate who will be responsible for each bill using the dropdown menu next to each expense. When using this method your income is irrelevant.",
  },
];
