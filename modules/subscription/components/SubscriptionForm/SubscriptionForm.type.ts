export type SubscriptionFormProps = {
  onSubmit: (data: any) => void;
  isLoading?: boolean;
};

export type SignUpInputs = {
  lastName: string;
  firstName: string;
  password: string;
  email: string;
  phone: string;
};
