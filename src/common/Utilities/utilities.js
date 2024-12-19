import { useSelector } from "react-redux";
import { useQueryParameter } from "../../features/queryParameters";
import { pageQueryParamName } from "../../features/queryParamNames";

export const formatDate = (dateProps, format) => {
  const date = new Date(dateProps);

  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  format = format.replace("dd", day.toString().padStart(2, "0"));

  format = format.replace("MM", month.toString().padStart(2, "0"));

  if (format.indexOf("yyyy") > -1) {
    format = format.replace("yyyy", year.toString());
  } else if (format.indexOf("yy") > -1) {
    format = format.replace("yy", year.toString().slice(2, 4));
  }

  return format;
};

export const getNonDuplicatedItems = (array, numberOfItems) => {
  const quantity = numberOfItems ?? array.length;

  let filteredArray = Array.from(new Set(array.map((item) => item.id))).map(
    (id) => {
      return array.find((a) => a.id === id);
    }
  );

  filteredArray = filteredArray.filter(
    (item) => filteredArray.indexOf(item) < quantity
  );

  return filteredArray;
};

export const usePage = (selectPage) => {
  const pageState = useSelector(selectPage);
  return useQueryParameter(pageQueryParamName) ?? pageState;
};
