export interface ReusableProps {
  title: string;
  description: string;
}

export interface FormProps {
  onSubmit: (formData: { [key: string]: string }) => void;
  fields: { name: string; type: string; label: string }[];
  buttonText: string;
}
