export interface Transaction {
  id: string;
  title: string;
  type: string;
  value: string;
  referenceId: string;
  alreadyReversed: boolean;
  createdAt: string;
}
