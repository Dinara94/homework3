import { URL } from "../constants";

export function getData() {
  return fetch(URL).then((res) => res.json());
}

export function updateList(newItem) {
  return fetch(URL + newItem.id, {
    method: "POST",
    body: JSON.stringify(newItem),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export function deleteItem(id) {
   return fetch(URL + id, {
    method: "DELETE",
  }).then((res) => res.json());
}

export function createContact(newItem) {
    return fetch(URL, {
        method: 'POST',
        body: JSON.stringify(newItem),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}
