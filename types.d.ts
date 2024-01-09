type Todo = {
  _id: string | React.Key;
  name: String;
  dateCreated?: String;
  completedStatus: Boolean;
  dateDue: Date;
};

type ToBuy = {
  _id: string | React.Key;
  category: string;
  estimatedPrice: string;
  itemToBuy: string;
};
type Meal = {
  _id: string | React.Key;
  mealName: string;
  ingredients?: string[];
  recipeLinks?: string[];
  category: string;
  description?: string;
};
type Idea = {
  _id: string | React.Key;
  ideaName: string;
  completedStatus: Boolean;
};

type Expense = {
  _id: string | React.Key;
  expenseName: string;
  date: Date;
  amount: number;
  location?: string
};
