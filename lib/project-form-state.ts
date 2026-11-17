export type State = {
  errors?: {
    title?: string[];
    description?: string[];
    technologies?: string[];
    type?: string[];
    link?: string[];
    yearCompleted?: string[];
  };
  message?: string | null;
};

export const initialState: State = {
  message: null,
  errors: {},
};
