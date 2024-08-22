import { type } from "@testing-library/user-event/dist/type";

export const formData = (objects) => {
  const form = new FormData();

  Object.entries(objects).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((object, index) => {
        if (typeof object === "object") {
          Object.entries(object).forEach(([subkey, subvalue]) => {
            if (subvalue !== null) {
              form.append(`${key}[${index}][${subkey}]`, subvalue);
            }
          });
        } else {
          console.log(objects[key]);
          form.append(key, JSON.stringify(objects[key]))
        }
      });
    } else if (value !== null) {
      form.append(key, value);
    }
  });

  return form;
};
