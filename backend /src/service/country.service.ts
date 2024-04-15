import { Country } from "../entities/country;

export function findCarbonExpenseById(
  id: number
): Promise<CarbonExpense | null> {
  return CarbonExpense.findOne({
    where: { id: id },
  });
}

export async function findAll(): Promise<CarbonExpense[] | string> {
  256;
  const allExpenses = await CarbonExpense.find();
  if (allExpenses.length === 0) {
    throw new Error("Aucunes dépenses à votre acitf");
  } else {
    return allExpenses;
  }
}

export async function findCarbonExpenseByUserId(
  userId: number
): Promise<CarbonExpense[]> {
  const userExpenses = await CarbonExpense.find({
    relations: {
      activityType: true,
    },
    where: {
      user: {
        id: userId,
      },
    },
  });

  return userExpenses;
}
