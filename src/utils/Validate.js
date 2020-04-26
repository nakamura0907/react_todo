const ErrorMessages = {
  required: "何か入力してください。",
};

const Regex = {};

export const required = (value) => (value ? undefined : ErrorMessages.required);
