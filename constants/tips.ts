export interface Tip {
    id: string;
    title: string;
    description: string;
    category: 'Saving' | 'Budgeting' | 'Lifestyle';
}

export const TIPS: Tip[] = [
    {
        id: '1',
        title: 'The 30-Day Rule',
        description: 'Wait 30 days before buying non-essential items to curb impulse spending.',
        category: 'Saving',
    },
    {
        id: '2',
        title: 'Cook at Home',
        description: 'Meal prepping can save significantly compared to eating out or ordering delivery.',
        category: 'Lifestyle',
    },
    {
        id: '3',
        title: 'Review Subscriptions',
        description: 'Check your bank statement for recurring charges you no longer use.',
        category: 'Budgeting',
    },
    {
        id: '4',
        title: 'Generic Brands',
        description: 'Switch to store-brand groceries for staples; they are often identical to name brands.',
        category: 'Saving',
    },
    {
        id: '5',
        title: 'Energy Efficiency',
        description: 'Switch to LED bulbs and unplug electronics when not in use to lower utility bills.',
        category: 'Lifestyle',
    },
];
